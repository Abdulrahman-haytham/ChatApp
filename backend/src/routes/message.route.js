import express from "express";
import protecRoute from "../middleware/auth.middleware.js";
import {getUsersForSidebar,getMessages} from "../controllers/message.controller.js"
const router=express.Router();




router.get("/users",protecRoute,getUsersForSidebar);
router.get("/id",protecRoute,getMessages)


export default router;


