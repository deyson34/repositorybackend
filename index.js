require('dotenv').config()
const http= require('http')

function requireController() {
    console.log('Bienvenido al curso')
}

const server=http.createServer(requireController)

const PORT=process.env.PORT

server.listen(PORT, function() {
    console.log("Aplicacion corriendo en: " + PORT)
})