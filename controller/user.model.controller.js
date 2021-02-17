const db = require("../models");
const response = require('../helpers/response.helper');
const { user } = require("../models");
require('../node_modules/dotenv');
const User = db.user;
 
exports.create = (req, res) => {
  const firstname=req.body.firstname;
  const lastname=req.body.lastname;
  const email=req.body.email;
  const username=req.body.username;
  const password=req.body.password;

  if (firstname == null || lastname == null || email == null ||username === "" || password == null) {
        return response.responseHelper(res, false, "All fields required", "Failed to create User");
    }
    User.create({
        user_id:user,
        firstname,
        lastname,
        email,
        username,
        password,
    }).then(result => {
        return response.responseHelper(res, true, result, "Address created successful");
    })
        .catch(err => {
            console.log(err)
            return response.responseHelper(res, false, "Address create fail", "Failed to create address");
        })
}
exports.GetUsers = (req, res) => {
    User.findAll(
        console.log("All users:", JSON.stringify())
    ).then(result=>{
        return response.responseHelper(res, true, result, "All records fetched successfully");
    }).catch(err => {
        console.log(err)
        return response.responseHelper(res, false, "Error !!");
    })
    
}
    // const user = req.userId

    // User.findOne({
    //     where: {
    //         id: '*',
    //         is_deleted: 0
    //     },
    //     attributes: ['id','first_name', 'last_name', 'email','username','password'],
    // }).then(result => {
    //     if (!result) {
    //         return response.responseHelper(res, false, "User not found", "Login failed")
    //     }

    //     User.findAll({
    //         where: {
    //             user_id: user,
    //             is_deleted: 0
    //         }
    //     }).then(User => {
    //         const data = {
    //             user: result,
    //             level: "premium"
    //         }
    //         return response.responseHelper(res, true, data, "Profile fetch successful")
    //     })
    // }).catch(err => {
    //     return response.responseHelper(res, false, err.message, "Failed to fetch profile")
    // })
