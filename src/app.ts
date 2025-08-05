import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("AI Summary Hub backend is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



