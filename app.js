const  express  =  require ('express');  
const path = require('path')

const  app  =  express();  
const port =3030
app.use(express.static(__dirname + '/public'));


app.listen(3000, () =>{
    console.log('servidor corriendo en el puerto 3000')
})

app.get('/', (req, res) => {res.sendFile(path.resolve(__dirname, './views/home.html'))
})
