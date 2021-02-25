<?php
/**
 * Created by PhpStorm.
 * User: gemda
 * Date: 18/06/2019
 * Time: 10:14 PM
 */

namespace App;


use App\Api\Traits\GeneralModelTrait;
use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    use GeneralModelTrait;
}
