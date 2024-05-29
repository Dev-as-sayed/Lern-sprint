import express from "express";
import cors from "cors";
import router from "./app/routes";
import { UserRoutes } from "./app/Modules/User/user.routs";

const app = express();

app.use(express.json());
app.use(cors());

// routes of application

// app.use("/api/v1", UserRoutes);
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
