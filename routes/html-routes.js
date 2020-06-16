var path = require("path");
const db = require('../models');
module.exports = function(app) {
    app.get("/", async function(req, res) {
      const response = await db.profiles.findAll({})
      const data = response.map(a=>a.dataValues);
      console.log(data.length)
        res.render('index', {data})
      });
};