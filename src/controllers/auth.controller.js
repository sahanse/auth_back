import {ApiError} from "../utils/apiError.js"
import {ApiResponse} from "../utils/apiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const userLogin = asyncHandler(async (req, res)=>{
    const {code} = req.body;
    console.log(code)
});

const userRegister = asyncHandler(async (req, res)=>{

});

const userLogout = asyncHandler(async (req, res)=>{

});

export {
    userLogin,
    userRegister,
    userLogout
}

