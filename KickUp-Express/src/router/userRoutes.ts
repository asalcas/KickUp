import { Router } from "express";
import { login, register } from "../controllers/userController.js";

const router = Router();

router.post("/api/user/register", register) // --> Controller de usuarios
router.post("/api/user/login", login)

export default router;