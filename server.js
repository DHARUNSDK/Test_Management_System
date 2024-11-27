const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/server/upload", upload.single("file"), (req, res) => {
  console.log("File received:", req.file);
  res.json({ message: "Questions imported successfully!" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
