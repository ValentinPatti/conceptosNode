import express from "express"

const app = express()
const PORT = 3000


console.log('el primer msj de este backend')

app.listen(PORT, ()=> {
    console.log(`Servidor activo en el puerto: ${PORT}`)
})