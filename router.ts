import { Express } from 'express';
import authRouter from './auth/router';
import prestamosRouter from './prestamos/router';


const router = (app: Express) => {
    app.get("/", (req, res) => {
        res.json({
            message: "its working"
        });
    });
    app.use("/auth", authRouter);
    app.use("/prestamos", prestamosRouter);

}

export default router;