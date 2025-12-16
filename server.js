const express = require("express");
const crypto = require("crypto");
const path = require("path");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Login handler
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const hash = crypto.createHash("md5").update(password || "").digest("hex");

  if (
    username === "admin" &&
    hash === "21232f297a57a5a743894a0e4a801fc3"
  ) {
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
      <head><title>Admin Panel</title></head>
      <body>
        <h2>Welcome Admin</h2>
        <p><strong>Flag:</strong> intake{weak_hashes_are_dangerous}</p>
      </body>
      </html>
    `);
  } else {
    res.status(401).send(`
      <!DOCTYPE html>
      <html>
      <body>
        <h3>Invalid credentials</h3>
        <a href="/admin_backup/login.html">Try again</a>
      </body>
      </html>
    `);
  }
});

// Required for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
