import {Router} from "express";
import {
    postNewOffer,
    getAllOffers,
    updateOfferById,
    deleteOfferById,
} from "../controllers/offerController.js";
import {isAdmin} from "../middlewares/isAdmin.js";
import {isAuth} from "../middlewares/isAuth.js";

const router = Router();


router.post("/", isAuth, isAdmin, postNewOffer);
router.get("/", isAuth, getAllOffers);
// router.get("/offer/:id", getOfferById);
router.put("/:id", isAuth, isAdmin, updateOfferById);
router.delete("/:id", isAuth, isAdmin, deleteOfferById);

export default router