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
}
