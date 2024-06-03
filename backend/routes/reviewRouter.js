import { Router } from "express";
import {
  postNewReview,
  getAllReviews,
  updateReviewById,
  deleteReviewById,
} from "../controllers/reviewController.js";
import { isAuth } from "../middlewares/isAuth.js";
import { isEmployee } from "../middlewares/isEmployee.js";

const router = Router();

router.post("/", isAuth, postNewReview);
router.get("/", isAuth, isEmployee, getAllReviews);
router.put("/:id", isAuth, isEmployee, updateReviewById);
router.delete("/:id", isAuth, isEmployee, deleteReviewById);

export default router;
