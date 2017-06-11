const
    express = require('express'),
    path = require('path'),
    routes = require('./api/routes')

const app = express()

app.use(express.static(path.join(__dirname, '/client')))

app.use(routes())

app.listen(8080, () => {

    console.log('Server is running.')
})
