import express from "express";
import Sale from "./models/Sale.js";

const router = express.Router();

// POST /sales
router.post("/", async (req, res) => {
  try {
    const { sellerId, clientName, value, type } = req.body;

    let commission = 0;

    if (type === "FIRST") {
      commission = value * 0.5;
    } else if (type === "RECURRENT") {
      commission = value * 0.1;
    }

    const sale = await Sale.create({
      sellerId,
      clientName,
      value,
      commission,
      type,
    });

    return res.status(201).json(sale);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export default router;



