module.exports = app => {
    const advert = require("../controllers/adverts.controller.js");

    let router = require("express").Router();

    // Create a new advert
    router.post("/", advert.create);

    // Retrieve all adverts
    router.get("/", advert.findAll);

    // Retrieve a single advert with id
    router.get("/:id", advert.findOne);

    // Update an advert with id
    router.put("/:id", advert.update);

    // Delete an advert with id
    router.delete("/:id", advert.delete);

    // Create a new advert
    router.delete("/", advert.deleteAll);

    //Find advert by userID
    router.get("/?userID/?smth", advert.findAdvertByUserID);

    app.use('/api/adverts', router);
};