// Get dependencies
const app = require('./app.js')
const config = require('./config/database')
const mongoose = require('mongoose')

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
	console.log('connected to db' + config.database);
});

mongoose.connection.on('error', (error) => {
	console.log('error db' + error);
});
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`API running on localhost:${port}`));