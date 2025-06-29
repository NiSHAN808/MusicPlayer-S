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

app.listen(5000, () => {
  console.log("Proxy server running on http://localhost:5000");
});
