const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
// Enable Cross-Origin Resource Sharing for your API
app.use(cors());
// Parse JSON bodies for API requests
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));


// --- Serve React Frontend ---
// Define the path to the built frontend files
const distPath = path.join(__dirname, 'dist');

// Serve all static files (JS, CSS, images) from the 'dist' folder
// This MUST come before your API routes and the final catch-all route
app.use(express.static(distPath));


// --- API Routes ---
// Define path for your JSON "database"
const dbPath = path.join(__dirname, 'Contact_Information.json');

app.post("/api/contact", (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const newEntry = { name, email, phone, message, date: new Date().toISOString() };

    // WARNING: The following file-writing logic will cause data loss on Render.
    // See the important note below the code block.
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        let contact_information = [];
        if (!err && data) {
            contact_information = JSON.parse(data);
        }
        
        contact_information.push(newEntry);

        fs.writeFile(dbPath, JSON.stringify(contact_information, null, 2), 'utf-8', (writeErr) => {
            if (writeErr) {
                console.error("Error saving file:", writeErr);
                return res.status(500).json({ success: false, message: "Error saving form data." });
            }
            res.json({ success: true, message: "Form data received successfully!" });
        });
    });
});


// --- Frontend Catch-All Route ---
// This route MUST be the last GET route defined.
// It handles all other requests by sending the main index.html file.
// This allows your client-side React Router to handle page navigation.
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'), (err) => {
        if (err) {
            res.status(500).send(err.message);
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
