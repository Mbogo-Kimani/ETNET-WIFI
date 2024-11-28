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
        { duration: 18000, cost: 10, description: "1 Device" }, 
        { duration: 36000, cost: 20, description: "1 Device" },
        { duration: 86400, cost: 50, description: "1 Device" } ,
        { duration: 604800, cost: 380, description: "2 Devices" },
        { duration: 2592000, cost: 1000, description: "2 Devices" },  
        { duration: 2592000, cost: 1300, description: "3 Devices" },
        { duration: 2592000, cost: 1600, description: "4 Devices" },
        { duration: 2592000, cost: 1800, description: "5 Devices" },
        { duration: 2592000, cost: 2000, description: "6 Devices" },  
        { duration: 7776000, cost: 3500, description: "3 Devices" } ,  
        { duration: 7776000, cost: 4200, description: "4 Devices" }, 
        { duration: 7776000, cost: 4800, description: "5 Devices" }, 
        { duration: 7776000, cost: 5300, description: "6 Devices" }    
      ]
    });
  });
  
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
