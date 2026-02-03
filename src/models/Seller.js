const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  percentualComissao: {
    type: Number,
    default: 50
  },
  ativo: {
    type: Boolean,
    default: true
  },
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Seller", SellerSchema);
