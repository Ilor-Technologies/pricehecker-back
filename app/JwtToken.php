<?php

namespace App;


use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;

class JwtToken extends BaseModel
{
    protected $table = 'jwt_tokens';

    protected $fillable = ['id', 'user_id', 'token'];

    public function user()
    {
        return $this->belongsTo(BaseModel::class, 'user_id');
    }

    public static function blackListToken($user)
    {
        $self = new self;
        $jwtToken = $self->where('user_id', $user->id)->get();
        if ($jwtToken->count()) {
            $jwtToken->each(function ($t) use ($user) {
                //JWTAuth::invalidate method
                //asks for a token before it can proceed                               
                try {
                    JWTAuth::setToken($t->token);  
                    //blacklist the token in db                      
                    JWTAuth::invalidate($t->token);
                } catch (TokenExpiredException $e) {
                    //$tempToken = JWTAuth::fromUser($user);
                    //JWTAuth::setToken($tempToken);
                }

                $t->delete();
            });
        }
        return;
    }

}
