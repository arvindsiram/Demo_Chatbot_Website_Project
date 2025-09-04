const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000; // ✅ Render provides PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ----------------- CONTACT FORM HANDLER -----------------
const dbPath = path.join(__dirname, "Contact_Information.json");
let contact_information = [];

// Load existing data
try {
  if (fs.existsSync(dbPath)) {
    const data = fs.readFileSync(dbPath, "utf-8");
    contact_information = JSON.parse(data);
    console.log("Successfully loaded existing contact information.");
  } else {
    console.log("Contact_Information.json not found. It will be created on first submission.");
  }
} catch (error) {
  console.error("Error reading/parsing contact info file:", error);
}

// API route
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const newEntry = { name, email, phone, message, date: new Date().toISOString() };
  contact_information.push(newEntry);

  fs.writeFile(dbPath, JSON.stringify(contact_information, null, 2), "utf-8", (err) => {
    if (err) {
      console.error("Error saving file:", err);
      return res.status(500).json({ success: false, message: "Error saving form data." });
    }
    console.log("Form data saved successfully.");
    res.json({ success: true, message: "Form data received successfully!" });
  });
});

// ----------------- SERVE REACT FRONTEND -----------------
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

// React Router fallback: always serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// ----------------- START SERVER -----------------
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
