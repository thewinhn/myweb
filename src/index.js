const path = require('path');
const express = require('express');
const morgan = require('morgan');
var exphbs  = require('express-handlebars');


const app = express();
const port = 3000;

// http logger
//app.use(morgan('combined'));

// Template engine
//app.engine('handlebars', exphbs({
 //   extname: '.hbs'
//}));
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', function (req, res) {
    res.render('home');
});

// app.get('/', (req,res) => {
//     res.send('Hello world 22222 !');
// })

app.listen(port, () => console.log('Server start! ...'));
