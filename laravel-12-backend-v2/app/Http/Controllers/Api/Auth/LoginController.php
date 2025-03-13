<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Api\Auth\LoginRepository;

class LoginController extends BaseController
{
    private $repo;
    private $audit_repo;

    function __construct()
    {
        $this->repo = new LoginRepository();
    }
    public function login(Request $request) // Change this to your request class)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 442);
        }
        $input = Arr::only($request->all(), ['email',  'password']);

        $res = $this->repo->login($input);

        return $this->sendResponse($res, 'login successfully.');

    }
}
