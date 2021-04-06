<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;

class RoleController extends Controller
{
    public function index() 
    {
        $roles = Role::all();

        return response()->json([
            'success'   => true,
            'data'      => $roles
        ]);
    }

    public function save(Request $request)
    {
        $role = Role::where('id', $request->id)->first();
        $data = $request->all();

        if ( isset($role) ) {
            $role->update($data);
        } else {
            $role = Role::create($data);
        }

        return response()->json([
            'success'   => true,
            'data'      => $role,
            'message'   => __('messages.role_save_successfully')
        ]);
    }

    public function delete(Request $request)
    {
        $unableToDelete = 0;
        $deletedIds = [];

        foreach ($request->roleIds as $roleId) {
            $role = Role::where('id', $roleId)->first();

            if ( isset($role) ) {

                if ( $role->users->first() ) {
                    $unableToDelete++;
                } else {
                    $deletedIds[] = $role->id;
                    $role->delete();
                }

            }
        }

        return response()->json([
            'success'   => true,
            'data'      => $deletedIds,
            'message'   => 
                $unableToDelete 
                ? __('messages.role_partially_delete_successfully') 
                : __('messages.role_delete_successfully')
        ]);
    }
}
