const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
