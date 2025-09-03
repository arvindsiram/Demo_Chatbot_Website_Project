const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());

let contact_information = [];

app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  const newEntry = { name, email, phone, message, date: new Date() };
  contact_information.push(newEntry);

  console.log("Form Data Received:", newEntry);

  fs.writeFile(
    './project/Contact_Information.json',
    JSON.stringify(contact_information, null, 2),
    'utf-8',
    (err) => {
      if (err) console.error("Error saving file:", err);
    }
  );

  res.json({ success: true, message: "Form data received successfully!" });
});

// IMPORTANT: use 5000, not 5173
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
