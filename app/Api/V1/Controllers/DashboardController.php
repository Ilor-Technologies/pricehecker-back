<?php

namespace App\Api\Controllers;

use App\Category;
use App\Event;
use App\Faq;
use App\Good;
use App\Http\Controllers\Controller;
use App\Institution;
use App\InternalUser;
use App\PriceChange;
use App\Role;
use App\Vendor;
use App\Warehouse;
use Tymon\JWTAuth\JWTAuth;

class DashboardController extends Controller {
    public function getData() {
        $authUser = $this->authUser();
        if (!$authUser) {
            return [];
        }

        if($authUser->hasRole(Role::SYSADMIN)) {
            return $this->getDataForSysadmin();
        }

        if($authUser->hasRole(Role::VENDOR)) {
            return $this->getDataForVendor();
        }

        return $this->getDataForOthers();
    }

    public function getMobileData() {
        $authUser = $this->authUser();
        if (!$authUser) {
            return [];
        }
        if($authUser->hasRole(Role::VENDOR)) {
            return $this->getDataForVendor();
        }

        $data = [];

        if($authUser->hasRole(Role::SYSADMIN)) {
            $vendors = Vendor::query()->latest()->take(10)->get();
            $users = InternalUser::query()->with('institution')->latest()->take(10)->get();
            $logs = Event::query()->latest()->with('eventEnum')->take(15)->get();

            $vendorsCount = Vendor::query()->count();
            $usersCount = InternalUser::query()->count();
            $institutionCount = Institution::query()->count();
            $goodsCount = Good::query()->count();
            $faqsCount = Faq::query()->count();
            $notificationCount = auth()->user()->notifications()->unread()->count();
            $trend = PriceChange::getTopFive();

            $data['stats'] = [
                'vendors' => $vendors,
                'internalUsers' => $users,
                'logs' => $logs,
                'vendorsCount' => $vendorsCount,
                'usersCount' => $usersCount,
                'institutionCount' => $institutionCount,
                'goodsCount' => $goodsCount,
                'faqsCount' => $faqsCount,
                'notificationCount' => $notificationCount,
                'priceTrends' => $trend,
            ];
        }

        $data['category'] = Category::query()->with('parent')->inRandomOrder()->latest()->limit(15)->get();
        $data['goods'] = Good::query()->with('vendor', 'warehouse.address', 'pictures', 'detail.category')->inRandomOrder()->latest()->limit(10)->get();

        return $data;
    }

    private function getDataForSysadmin() {
        $vendors = Vendor::query()->latest()->take(10)->get();
        $users = InternalUser::query()->with('institution')->latest()->take(10)->get();
        $logs = Event::query()->latest()->with('eventEnum')->take(15)->get();

        $vendorsCount = Vendor::query()->count();
        $usersCount = InternalUser::query()->count();
        $institutionCount = Institution::query()->count();
        $goodsCount = Good::query()->count();
        $faqsCount = Faq::query()->count();
        $notificationCount = auth()->user()->notifications()->unread()->count();
        $trend = PriceChange::getTopFive();

        return response()->json([
            'vendors' => $vendors,
            'internalUsers' => $users,
            'logs' => $logs,
            'vendorsCount' => $vendorsCount,
            'usersCount' => $usersCount,
            'institutionCount' => $institutionCount,
            'goodsCount' => $goodsCount,
            'faqsCount' => $faqsCount,
            'notificationCount' => $notificationCount,
            'priceTrends' => $trend,
        ]);
    }

    private function getDataForVendor() {
        return $this->withJson([
                'goods' => Good::query()->with('detail.category', 'vendor')->with('pictures')->owned()->latest()->take(10)->get(),
                'goods_count' => Good::query()->owned()->count(),
                'warehouses' => Warehouse::query()->owned()->with('address.state', 'address.city')->latest()->take(10)->get(),
                'warehouses_count' => Warehouse::query()->owned()->count(),
                'user' => (new UserController())->showAuthenticatedUser()
            ]
        );
    }

    private function getDataForOthers() {
        return $this->withJson([
            'goods' => Good::with('vendor')
                ->with('detail.category')->with('pictures')->latest()->limit(10)->get(),
            'user' => (new UserController())->showAuthenticatedUser()
        ]);
    }
}
