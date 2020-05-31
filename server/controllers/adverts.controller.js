const db = require("../models");
const Advert = db.adverts;
const Op = db.Sequelize.Op;

// Create and Save a new Advert
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Please write a title"
        });
        return;
    }

    // Create an Advert
    const advert = {
        userID: req.body.userID,
        imgSrc: req.body.imgSrc,
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        price: req.body.price,
    };

    // Save Advert in the database
    Advert.create(advert)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Advert."
            });
        });
};

// Retrieve all Adverts from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Advert.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Adverts."
            });
        });
};

// Find a single Advert with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Advert.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Advert with id=" + id
            });
        });
};

// Update a Advert by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Advert.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Advert was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Advert with id=${id}. Maybe Advert was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Advert with id=" + id
            });
        });
};

// Delete a Advert with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Advert.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Advert was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Advert with id=${id}. Maybe Advert was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Advert with id=" + id
            });
        });
};

// Delete all Adverts from the database.
exports.deleteAll = (req, res) => {
    Advert.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Adverts were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Adverts."
            });
        });
};

//Find advert by userID
exports.findAdvertByUserID = (req, res) => {
    // const id = req.data.id;
    const {userID} = req.body;
    console.log("finc advert by user id", userID)

    Advert.findAll({ where: { userID: userID } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving adverts."
            });
        });
};