const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

// # Search for a song
// GET https://api.deezer.com/search?q=eminem

// # Get track details
// GET https://api.deezer.com/track/3135556

// # Get artist info
// GET https://api.deezer.com/artist/27

// # Get album info
// GET https://api.deezer.com/album/302127

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
app.get("/search/:what", async (req, res) => {
  try {
    let what = req.params.what;
    let link = `https://api.deezer.com/search?q=${what}`;
    const response = await axios.get(link);
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching track:", err.message);
    res.status(500).json({ error: "cannot fetch Deezer track" });
  }
});

app.listen(5000, () => {
  console.log("Proxy server running on http://localhost:5000");
});
