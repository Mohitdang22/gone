const dbConn = require("../databases/sqlite.js"); 

const Us = dbConn.Crud; 

const Pr = dbConn.Product; 

// MainController.js
module.exports = {
    user: user,
    home: home,
    product:product,
    productpage:productpage
  };
  
  function home(req, res) 
  {

      Us.findAll().then(todo=>
        {

      res.send(todo);

      }).catch(err=>
      {
          console.log(err,"err");
          
      })


}

function productpage(req, res) 
{

  Pr.findAll().then(todo=>
      {

    res.send(todo);

    }).catch(err=>
    {
        console.log(err,"err2");
        
    })


}
  
  function user(req, res) {
    
    res.render("user");

  }

  function product(req, res) {
    
    res.render("product");

  }
