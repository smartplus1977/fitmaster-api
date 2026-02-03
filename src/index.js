import express from "express";
import cors from "cors";
import "./config/database.js";

import sellersRoutes from "./routes/sellers.routes.js";
import salesRoutes from "./sales.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// rota raiz
app.get("/", (req, res) => {
  res.json({ api: "FitMaster API OK" });
});

// rotas
app.use("/sellers", sellersRoutes);
app.use("/sales", salesRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});









