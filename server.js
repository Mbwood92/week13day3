const express = require('express');
const jsxViewEngine = require('jsx-view-engine');
const pokemons = require('./models/pokemon')


const app = express();

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// ================ Middleware ================
//

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));


app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

// I - INDEX - dsiplays a list of all fruits
app.get('/pokemon/', async (req, res) => {
     res.send(pokemons);
})



app.listen(3000, () => {
    console.log('listening');
});