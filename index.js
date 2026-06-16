import express from "express"
import cors from "cors"
import morgan from "morgan"
import { fileURLToPath } from 'url'
import { dirname } from "path"

const app = express()
const PORT = 3000

//todo MIDDLEWARES (funciones que se ejecutan entre la solicitud y la logica, que pueden ser de terceros o propias)
app.use(cors()) //permite conexiones remotas
app.use(express.json()) //permite interpretar los datos que lleguen en la solicitud o request en formato json
app.use(morgan('dev')) //nos muestra cuando nos hacen cualquier tipo de solicitud y el codigo de respuesta
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname + '/public')
// configurar un archivo estatico como pagina principal
app.use(express.static(__dirname + '/public')) //ayuda a cargar un archivo estatico

//todo AREA DE LOGICA
console.log('el primer msj de este backend ')
console.log('el primer msj de este backend ')

//TODO DISEÑAMOS LOS ENDPOINTS
//http://localhost:3000/api/saludo
app.get("/api/saludo", (req,res)=>{
    const vehiculos = ['🏎','🚕','🚓']
    res.json('Bienvenidos a nuestro backend')
})




app.listen(PORT, ()=> {
    console.log(`Servidor activo en el puerto: ${PORT}`)
})