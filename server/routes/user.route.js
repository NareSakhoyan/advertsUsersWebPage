const user = require('../controllers/user.controller');
const express = require('express')

module.exports = app => {
    let router = express.Router()

    router.post('/', user.insertUser)

    router.get('/', user.getAll)

    router.put('/:id', user.updateUser)

    router.get("/:id", user.getByID);

    router.delete("/:id", user.delete);

    router.delete("/", user.deleteAll);

    app.use('/api/users', router)
}
