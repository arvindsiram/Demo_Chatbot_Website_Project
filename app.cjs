const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path'); // Import path module for reliable pathing

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded( {extended: false} ))

// Define a reliable path to the JSON file
const dbPath = path.join(__dirname, 'Contact_Information.json');

let contact_information = [];

// Read existing data from the file on server startup
try {
  // Check if file exists before trying to read
  if (fs.existsSync(dbPath)) {
    const data = fs.readFileSync(dbPath, 'utf-8');
    contact_information = JSON.parse(data);
    console.log('Successfully loaded existing contact information.');
  } else {
    console.log('Contact_Information.json not found. A new file will be created on first submission.');
  }
} catch (error) {
  console.error("Error reading or parsing contact information file:", error);
}

app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const newEntry = { name, email, phone, message, date: new Date().toISOString() };
  contact_information.push(newEntry);

  console.log("Form Data Received:", newEntry);

  // Write the updated array back to the file
  fs.writeFile(
    dbPath,
    JSON.stringify(contact_information, null, 2),
    'utf-8',
    (err) => {
      if (err) {
        console.error("Error saving file:", err);
        // If there's an error, inform the client and don't assume success
        return res.status(500).json({ success: false, message: "Error saving form data." });
      }

      // Only send success response after the file has been written successfully
      console.log("Form data saved successfully.");
      res.json({ success: true, message: "Form data received successfully!" });
    }
  );
});

// IMPORTANT: use 5000, not 5173
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});