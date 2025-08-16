const mongoose = require('mongoose')
function Connection() {
    const mongoURI = "mongodb+srv://nihalmonthri042:6xDokUnoqaEabdPY@nihalcluster.gwyksgh.mongodb.net/chat"
    mongoose.connect(mongoURI)
    .then(() => console.log("connected"))
    .catch(err => console.log(err))
}

module.exports = Connection