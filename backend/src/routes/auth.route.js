import express from "express";
import {singup ,logout,login,updateProfile,checkAuth} from '../controllers/auth.controller.js'
import protectRoute from "../middleware/auth.middleware.js"
const router=express.Router();
export default router;

router.post("/singup",singup)
router.post("/login",login)
router.post("/logout",logout)

router.put("/update-profile",protectRoute,updateProfile);

router.get("/check",protectRoute,checkAuth);