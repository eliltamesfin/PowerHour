import {Router} from "express";
import {
    postNewCourse,
    getAllCourses,
    updateCourseById,
    deleteCourseById
} from "../controllers/courseController.js";
import {isAuth} from "../middlewares/isAuth.js";
import {isTrainer} from "../middlewares/isTrainer.js";
import {isEmployee} from "../middlewares/isEmployee.js";

const router = Router();

router.post("/", isAuth, isTrainer, postNewCourse);
router.get("/", isAuth, isEmployee, getAllCourses);
// router.get("/course/:id", getCourseById);
router.put("/:id", isAuth, isEmployee, updateCourseById);
router.delete("/:id", isAuth, isEmployee, deleteCourseById);

export default router