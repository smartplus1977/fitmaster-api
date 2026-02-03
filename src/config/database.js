import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/fitmaster";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado 🚀");
  })
  .catch((error) => {
    console.error("Erro ao conectar no MongoDB:", error.message);
  });

export default mongoose;

