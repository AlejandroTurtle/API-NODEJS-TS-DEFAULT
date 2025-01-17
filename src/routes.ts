import { Router } from "express";
import { getProduct } from "./controllers/ProductsController";

const router = Router();

router.get("/product", getProduct);

export default router;
