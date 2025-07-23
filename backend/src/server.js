import express from "express";
import { ENV } from "./config/env.js";
import recipeFavRoutes from "./routes/recipeFav.route.js";
import job from "./config/cron.js";
const app = express();
const PORT = ENV.PORT || 5001;

if (ENV.NODE_ENV === "production") job.start();

app.use(express.json());
app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true });
});
app.use("/api/favorites", recipeFavRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
