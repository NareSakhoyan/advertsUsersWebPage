module.exports = (sequelize, Sequelize) => {
    const Advert = sequelize.define("adverts", {
        userID: {
            type: Sequelize.INTEGER
        },
        imgSrc: {
            type: Sequelize.TEXT
        },
        title: {
            type: Sequelize.TEXT
        },
        shortDescription: {
            type: Sequelize.TEXT
        },
        longDescription: {
            type: Sequelize.TEXT
        },
        price: {
            type: Sequelize.STRING
        },
    });

    return Advert;
};