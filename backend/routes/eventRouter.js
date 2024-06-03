import {Router} from "express";
import {
    postNewEvent,
    getAllEvents,
    updateEventById,
    deleteEventById,} from "../controllers/eventController.js";
    import {isAuth} from "../middlewares/isAuth.js";
    import {isTrainer} from "../middlewares/isTrainer.js";
import { isEmployee } from "../middlewares/isEmployee.js";

const router = Router();

router.post("/", isAuth, isTrainer, postNewEvent);
router.get("/", isAuth, getAllEvents);
// router.get("/event/:id", getEventById);
router.put("/:id", isAuth, isEmployee, updateEventById);
router.delete("/:id", isAuth, isEmployee, deleteEventById);

export default router