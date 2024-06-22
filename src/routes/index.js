import {Router} from "express";
import productsRouter from "./products.routes.js";
import cartsRouter from "./carts.routes.js";
import usersRouter from "./users.routes.js";
import moviesRouter from "./movies.routes.js";

const router = Router();

router.use("/products", productsRouter);
router.use("/carts", cartsRouter);
router.use("/users", usersRouter);
router.use("/movies", moviesRouter);

export default router;
