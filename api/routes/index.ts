import  express from "express";
import userRoutes from "./userRoutes";
const router = express.Router();

/* GET home page. */
router.use('/user', userRoutes);

export default router;