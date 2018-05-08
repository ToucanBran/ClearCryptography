// Get dependencies
const app = require('./app.js')
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`API running on localhost:${port}`));