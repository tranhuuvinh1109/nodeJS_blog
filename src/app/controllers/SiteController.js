const Course = require('../models/Course');

class SiteController {

	// [GET] /news
	async index (req, res) {
		try {
			const courses = await Course.find({});
			res.json(courses);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}


}

module.exports = new SiteController()