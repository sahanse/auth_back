import { Router } from "express";
import {userLogin, userRegister, userLogout} from "../controllers/auth.controller.js"

const router = Router();

router.route('/user/login').post(userLogin);
router.route('/user/register').post(userRegister);
router.route('/user/logout').post(userLogout);

export default router;
