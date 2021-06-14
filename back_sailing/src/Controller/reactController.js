const path = require('path');

function home (req, res){
    res.sendFile(path.join(__dirname, '../../../front_sailing/build/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
}
function profile (req, res) {
    res.sendFile(path.join(__dirname, '../../../front_sailing/build/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
}

function createMatch (req, res) {
    res.sendFile(path.join(__dirname, '../../../front_sailing/build/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
}

function team (req, res) {
    res.sendFile(path.join(__dirname, '../../../front_sailing/build/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
}

function createTeam (req, res) {
    res.sendFile(path.join(__dirname, '../../../front_sailing/build/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
}

function shop (req, res) {
    res.sendFile(path.join(__dirname, '../../../front_sailing/build/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
}
module.exports  = {home, profile, createMatch,team, createTeam, shop}