import { Express } from 'express';
import authRouter from './auth/router';
import categoriesRouter from './categories/router';


const router = (app: Express) => {
    app.get("/", (req, res) => {
        res.json({
            message: "its working"
        });
    });
    app.use("/auth", authRouter);
    app.use("/categories", categoriesRouter);

}

export default router;