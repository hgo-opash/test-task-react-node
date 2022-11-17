const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.emp = require("./emp.model")(mongoose);
db.cmp_details = require("./cmp_details.model")(mongoose);

module.exports = db;
