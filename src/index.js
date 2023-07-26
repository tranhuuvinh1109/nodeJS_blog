const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes')


const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'));

app.engine("hbs", handlebars({
	extname: '.hbs'
}));
app.set("view engine", 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


route(app)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
