import express from "express";
import { ENV } from "./config/env.js";
import recipeFavRoutes from "./routes/recipeFav.route.js";
const app = express();
const PORT = ENV.PORT || 5001;

app.use(express.json());

app.use("/api/favorites", recipeFavRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
