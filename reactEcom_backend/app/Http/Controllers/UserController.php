<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function register(Request $request)
    {
    	$data = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ];

        User::create($data);

        return $data;
    }

    public function login(Request $request)
    {
        $user = User::where('email',$request->email)->first();
        if(!$user || !Hash::check($request->password,$user->password))
        {
            return ["error" => "Email or Password not match"];
        }
        return $user;
    }
}
