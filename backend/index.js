import express from "express";
import axios from "axios";

const app = express();

app.get("/", (req, res) => {
    res.send("Server is readyyyyy");
});

app.get("/api/products", async (req, res) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        res.json(response.data); // Send the data received from the external API
    } catch (error) {
        res.status(500).json({ error: "Error fetching data from the external API" });
    }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
