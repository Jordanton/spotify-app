const
    express = require('express'),
    path = require('path'),
    superagent = require('superagent')

const router = express.Router()

module.exports = () => {

    router.get('/api/search', (req, res) => {

        const { artist } = req.query

        superagent
            .get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist')
            .end((err, response) => {

                if (err) {
                    res.send(err)
                } else {
                    res.json(response.body)
                }
            })
    })

    router.get('/api/detail', (req, res) => {

        const { artistID } = req.query

        superagent
            .get('https://api.spotify.com/v1/artists/' + artistID + '/albums?market=US&album_type=album')
            .end((err, response) => {

                if (err) {
                    res.send(err)
                } else {
                    res.json(response.body)
                }
            })
    })

    router.get('*', (req, res) => {

        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}
