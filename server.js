const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

app.get("/deezer/chart", async (req, res) => {
  try {
    const response = await axios.get("https://api.deezer.com/chart");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Deezer data" });
  }
});
app.get("/track/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const response = await axios.get(`https://api.deezer.com/track/${id}`);
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching track:", err.message);
    res.status(500).json({ error: "cannot fetch Deezer track" });
  }
});

app.listen(5000, () => {
  console.log("Proxy server running on http://localhost:5000");
});
