import { Router } from "express";
import {
  postBooking,
  getAllBookings,
  cancelBookingById,
} from "../controllers/bookingController.js";
import { isAuth } from "../middlewares/isAuth.js";
import { isTrainer } from "../middlewares/isTrainer.js";
import { isEmployee } from "../middlewares/isEmployee.js";

const router = Router();

router.post("/", isAuth, postBooking);
router.get("/", isAuth, isEmployee, getAllBookings);
router.delete("/:id", isAuth, isTrainer, cancelBookingById);

export default router;
