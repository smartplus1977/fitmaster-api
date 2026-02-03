import express from "express";

const router = express.Router();

// rota teste
router.post("/", (req, res) => {
  return res.status(201).json({
    message: "Seller criado (rota teste)",
    data: req.body,
  });
});

export default router;
