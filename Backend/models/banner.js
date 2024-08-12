const db = require("../utils/connectDB");

const Banner = {
    getBanner: async (callback) => {
        try {
            const [rows] = await db.query("SELECT * FROM banner WHERE id = 1");
            callback(null, rows);
        } catch (err) {
            callback(err);
        }
    },

    updateBanner: async (data, callback) => {
        try {
            const result = await db.query("UPDATE banner SET ? WHERE id = 1", data);
            callback(null, result);
        } catch (error) {
            callback(error);
        }
    }
}

module.exports = Banner;
