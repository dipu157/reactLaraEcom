<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function addProduct(Request $request)
    {
        $product = new Product;
        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->description = $request->input('description');
        $product->file_path = $request->file('file')->store('products');
        $product->save();
        return $product;
    }

    public function list()
    {
        return Product::all();
    }

    public function delete($id)
    {
        $result = Product::where('id',$id)->delete();
        if($result)
        {
            return ["result" => "Product has been deleted"];
        }else{
            return ["result" => "Operation Fauiled"];
        }
    }
}
