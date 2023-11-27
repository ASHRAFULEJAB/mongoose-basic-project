import express, { Application } from "express";
import cors from "cors";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import router from "./routes";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/students", router);

// const getAController = (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
// };

// app.get("/", getAController);
app.use(globalErrorHandler);
app.use(notFound);
export default app;
