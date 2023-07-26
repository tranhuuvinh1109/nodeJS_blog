const mongoose = require('mongoose');

async function connect () {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/learning_nodejs', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connect successfully!!!');
	} catch (error) {
		console.log('Connect failure!!!');
	}
}

module.exports = { connect };
