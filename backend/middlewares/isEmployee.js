import asyncHandler from "../config/asyncHandler.js";

const isEmployee = asyncHandler((req, res, next) => {
    console.log(req.user.role);
    if (req.user.role === "member") {
        res.status(403);
        throw new Error("access denied");
    }
    next();
});

export { isEmployee };