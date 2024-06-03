import {Router} from "express";
import{
    postNewContact,
    getAllContacts,
    getContactById
} from "../controllers/contactController.js";
import {isAuth} from "../middlewares/isAuth.js";
import {isAdmin} from "../middlewares/isAdmin.js";

const router = Router();

router.post("/",isAuth, postNewContact);
router.get("/", isAuth, isAdmin, getAllContacts);
router.get("/:id", isAuth, isAdmin, getContactById);

export default router;
