const express = require('express');
const indexRouter = require('./routes/index');
const models = require('./models');
const auth = require('./middleware/auth');

const app = express();
const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false }))
app.use(auth.auth)
app.use('/', indexRouter);

app.use(function(req, res, next) {
    res.status(404).send({ error: 'Not found' })
    next()
});

models.sequelize.sync().then((req) => {
    app.listen(port, function() {
        console.log('you on port 3000')
    })
})