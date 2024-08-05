const simsimi = require('chats-simsimi')
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.render('pages/index')
})

app.get('/ind', (req, res) => {
    let question = '...'
    let answer = 'Hello..'
    res.render('pages/ind', { hasil: answer, inputan: question });
})

app.get('/eng', (req, res) => {
    let question = '...'
    let answer = 'Hello..'
    res.render('pages/eng', { hasil: answer, inputan: question });
})

app.post('/submitid', (req, res) => {
    let question = req.body.question;
    let answer = ''
    simsimi(question, 'id')
        .then(response => {
            answer = response.result
            res.render('pages/ind', { hasil: answer, inputan: question });
        })
        .catch(error => {
            answer = error.result
            res.render('pages/ind', { hasil: answer, inputan: question });
        });
})

app.post('/submiten', (req, res) => {
    let question = req.body.question;
    let answer = ''
    simsimi(question, 'en')
        .then(response => {
            answer = response.result
            res.render('pages/eng', { hasil: answer, inputan: question });
        })
        .catch(error => {
            answer = error.result
            res.render('pages/eng', { hasil: answer, inputan: question });
        });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})