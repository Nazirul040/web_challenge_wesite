const express = require("express");
const crypto = require("crypto");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// Login handler
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const hash = crypto.createHash("md5").update(password).digest("hex");

  if (username === "admin" &&
      hash === "21232f297a57a5a743894a0e4a801fc3") {
    res.send("intake{weak_hashes_are_dangerous}");
  } else {
    res.send("Invalid credentials");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
