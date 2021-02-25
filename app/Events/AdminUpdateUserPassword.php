<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\User;

class AdminUpdateUserPassword {
	use Dispatchable, InteractsWithSockets, SerializesModels;

	public $user;
	public $admin;

	/**
	 * Create a new event instance.
	 *
	 * @param $admin
	 * @param $user
	 */
	public function __construct(User $admin, User $user)
	{
		$this->user = $user;
		$this->admin = $admin;
	}
}
