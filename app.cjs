const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// --- START OF DEBUGGING BLOCK ---
console.log('--- SERVER STARTING: DEBUGGING INFO ---');

// 1. Log the directory paths to see where we are
console.log(`Executing directory (__dirname): ${__dirname}`);
console.log(`Current working directory (process.cwd()): ${process.cwd()}`);

// 2. Define and log the path to the 'dist' folder
const distPath = path.join(process.cwd(), 'dist');
console.log(`Resolved path to dist folder: ${distPath}`);

// 3. Check if the 'dist' folder and its contents actually exist from the server's perspective
try {
  if (fs.existsSync(distPath)) {
    console.log("'dist' directory EXISTS.");
    const filesInDist = fs.readdirSync(distPath);
    console.log("Files inside 'dist':", filesInDist);

    const assetsPath = path.join(distPath, 'assets');
    if (fs.existsSync(assetsPath)) {
        console.log("'dist/assets' directory EXISTS.");
        const filesInAssets = fs.readdirSync(assetsPath);
        console.log("Files inside 'dist/assets':", filesInAssets);
    } else {
        console.log("'dist/assets' directory DOES NOT EXIST.");
    }
  } else {
    console.log("'dist' directory DOES NOT EXIST.");
  }
} catch (error) {
  console.error("Error while checking 'dist' directory:", error);
}
console.log('------------------------------------');
// --- END OF DEBUGGING BLOCK ---


// Middleware to log all incoming requests
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.originalUrl}`);
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve the frontend build
app.use(express.static(distPath));

// API route (your existing code)
const dbPath = path.join(__dirname, 'Contact_Information.json');
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
