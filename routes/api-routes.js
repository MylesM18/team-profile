var db = require("../models");

module.exports = function(app) {

    app.post('/api/profiles', (req,res)=>{
        console.log('hitting profile route!')
        console.log(req.body)

        db.profiles.create(req.body).then(data=>res.json(data))
      });

      app.delete('/api/profiles/:id', (req, res) =>{
        
        db.profiles.destroy({where: {id:req.params.id}})
    .then(data=> res.json('ok'))

      })
}