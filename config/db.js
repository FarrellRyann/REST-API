const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("siswa_smk_rpl", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

const connectdb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

module.exports = { sequelize, connectdb };

