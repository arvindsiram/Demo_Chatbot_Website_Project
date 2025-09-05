const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// --- THE CORRECTED PATH LOGIC ---
// __dirname is '/.../src'. We go up one level ('..') to the project root, then into 'dist'.
const distPath = path.join(__dirname, '..', 'dist');


// Middleware to log all incoming requests (optional, but helpful to keep for now)
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.originalUrl}`);
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve the frontend build from the correct location
app.use(express.static(distPath));

// API route (your existing code)
const dbPath = path.join(__dirname, '..', 'Contact_Information.json'); // Also correct this path
let contact_information = [];
try {
  if (fs.existsSync(dbPath)) {
    const data = fs.readFileSync(dbPath, 'utf-8');
    contact_information = JSON.parse(data);
  }
} catch (error) {
  console.error("Error reading or parsing contact information file:", error);
}
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }
  const newEntry = { name, email, phone, message, date: new Date().toISOString() };
  contact_information.push(newEntry);
  fs.writeFile(dbPath, JSON.stringify(contact_information, null, 2), 'utf-8', (err) => {
    if (err) {
      console.error("Error saving file:", err);
      return res.status(500).json({ success: false, message: "Error saving form data." });
    }
    res.json({ success: true, message: "Form data received successfully!" });
  });
});

// Catch-all route to serve React index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Render uses process.env.PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
