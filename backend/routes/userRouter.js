import {Router} from "express";
import {
    signup,
    login,
    verifyToken,
    getProtected,
    logout,
    // postNewUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
} from "../controllers/userController.js";
import {isAuth} from "../middlewares/isAuth.js";
import {isAdmin} from "../middlewares/isAdmin.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify/:token", verifyToken);
router.get("/getprotected",isAuth, isAdmin, getProtected);
router.post("/logout", isAuth, logout);
// router.post("/", postNewUser);
router.get("/", isAuth, isAdmin, getAllUsers);
router.get("/:id",isAuth, isAdmin, getUserById);
router.put("/:id", isAuth, isAdmin, updateUserById);
router.delete("/:id", isAuth, isAdmin, deleteUserById);

export default router;