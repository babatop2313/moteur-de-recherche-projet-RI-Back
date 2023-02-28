import  { Schema } from "mongoose";

export const userSchema = new Schema({
    prenom : {type : String,  required : true},
    nom : {type : String, required: true},
    email : {type : String, unique: true, required : true},
    password : {type : String, required: true},
    interet : {type : String}
}, {timestamps : true});

// {
//     "query":"gdghgh ttughhdfg"
// }
// http://127.0.0.1:5000/api/recupinfo