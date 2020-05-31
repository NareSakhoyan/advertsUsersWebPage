module.exports = app => {
    const user = require("../controllers/users.controller.js");

    let router = require("express").Router();

    // Create a new User
    router.post("/", user.create);

    // Retrieve all users
    router.get("/", user.findAll);

    // Retrieve a single User with id
    router.get("/:id", user.findOne);

    // Update a User with id

    router.put("/:id", user.update);

    // Delete a User with id
    router.delete("/:id", user.delete);

    // Create a new User
    router.delete("/", user.deleteAll);

    //find user via email
    router.get("/email", user.findByUserEmail);

    app.use('/api/users', router);
};