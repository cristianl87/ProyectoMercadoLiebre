const  express  =  require ('express');  
const path = require('path')

const  app  =  express();  
const port =3030
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/login', (req, res) => {res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/register', (req, res) => {res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.listen(process.env.PORT || 4000, () =>{
    console.log('servidor corriendo en el puerto 4000')
})
