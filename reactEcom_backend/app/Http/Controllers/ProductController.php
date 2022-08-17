<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function addProduct(Request $request)
    {

        $file = $request->file('file');

        $data = [
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'file_path' => $file,
        ];

        Product::create($data);

        return $data;
    }
}
