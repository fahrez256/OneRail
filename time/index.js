const express = require("express");
const app = express();

app.get("/time", (req, res) => {
    res.json({ timestamp: Date.now() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
