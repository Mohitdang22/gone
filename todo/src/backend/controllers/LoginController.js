const session = require("express-session");
const dbConn = require("../databases/sqlite.js");

const Us = dbConn.Crud; 
const Pr = dbConn.Product; 

function user(req, res) {

          const { name, phone_number } = req.body;                 
          if (!(name && phone_number)){                   
            return res.render("user", {               
              msg: "Please enter all the required details"
            });
           }

          else {
             Us.create({         
              name,
             phone_number
            })
              .then(user => {       
                if (user) {
                  console.log(user);
                  
                 req.session.userId = user.id
                 req.session.userName = user.name;
                 return res.redirect("/");
                  

                }

              })
              .catch(err => {
          console.log(err);
                return res.render("user", { msg: "Error in creating user" });
              });
          }
        }


    function product(req, res) {

        const { name, cost } = req.body;                 
        if (!(name && cost)){                   
          return res.render("product", {               
            msg: "Please enter all the required details"
          });
          }

        else {
          Pr.create({         
            name,
            cost
          })
            .then(item => {       
              if (item) {
                console.log(item);
                
                req.session.userId = item.id
                req.session.userName = item.name;
                return res.redirect("/productpage");

              }

            })
            .catch(err => {
        console.log(err);
              return res.render("product", { msg: "Error in creating user" });
            });
        }
      }
        
        
module.exports = {
    user: user,
    product:product
    };
