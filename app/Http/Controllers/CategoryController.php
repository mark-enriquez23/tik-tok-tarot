<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::all();

        return response()->json([
            'success'   => true,
            'data'      => $category
        ]);
    }

    public function save(Request $request)
    {
        $category = Category::where('id', $request->id)->first();

        $data = $request->all();

        if (isset($category)) {
            // update category
            $category->update($data);

            return response()->json([
                'success'   => true,
                'message'   => __('message.category_updated'),
                'data'      => $category
            ]);
        }else{
            $category = Category::create($data);

            return response()->json([
                'success'   => true,
                'message'   => __('message.category_saved'),
                'data'      => $category
            ]);
        }
    }
}
