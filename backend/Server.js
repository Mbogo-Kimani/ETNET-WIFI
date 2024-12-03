const express = require('express');
const cors = require('cors');

const app = express();

// Configure CORS
app.use(cors({
  origin: 'http://localhost:8080', // Replace with your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // If your app uses cookies or authentication
}));

// Example route
app.get('/api/street_packages', (req, res) => {
    // Example hardcoded data for testing
    res.json({
      packages: [
        { name: "Kumi Net", duration: 2400, cost: 10, description: "1 Device" }, 
      { name: "Mbao Net", duration: 7200, cost: 20, description: "1 Device" }, //orange
      { name: "8-Hour Net", duration: 28800, cost: 50, description: "1 Device" },
      { name: "Weekly Net", duration: 604800, cost: 380, description: "2 Devices" },
      { name: "Monthly Net", duration: 2592000, cost: 1000, description: "2 Devices" }, //orange
      { name: "Family x3", duration: 2592000, cost: 1300, description: "3 Devices" },
      { name: "Family x4", duration: 2592000, cost: 1600, description: "4 Devices" },
      { name: "Family x5", duration: 2592000, cost: 1800, description: "5 Devices" }, //orange
      { name: "Family x6", duration: 2592000, cost: 2000, description: "6 Devices" },
      { name: "QTRLY Family x3", duration: 7776000, cost: 3500, description: "3 Devices" },
      { name: "QTRLY Family x4", duration: 7776000, cost: 4200, description: "4 Devices" }, //orange
      { name: "QTRLY Family x5", duration: 7776000, cost: 4800, description: "5 Devices" },
      { name: "QTRLY Family x6", duration: 7776000, cost: 5300, description: "6 Devices" }  //orange  
      ]
    });
});
  
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
