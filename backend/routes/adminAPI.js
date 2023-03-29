//ท็อป
const express = require("express");
const {
  Getproducts,
  GetproductsByid,
  CreateProduct,
  UpdateProduct,
  loginAdmin,
  Getuser,
  GetuserByid,
  CreateUser,
  UpdateUser,
  DeleteUser,
  Deleteproduct,
  imageInsert
} = require(".././api/adminAPI");
const {} = require("../middleware/authFunc");
const routes = express.Router();
const checkauth = require(".././middleware/authFunc");

// routes.use(checkauth);

routes.post("/login?", loginAdmin);
routes.get("/products", Getproducts);
routes.get("/products/:id", GetproductsByid);
routes.post("/products!", CreateProduct);
routes.put("/products/:id", UpdateProduct);
routes.delete("/products/:id", Deleteproduct);
routes.get("/users", Getuser);
routes.get("/users/:id", GetuserByid);
routes.post("/users!", CreateUser);
routes.put("/users/:id", UpdateUser);
routes.delete("/users/:id", DeleteUser);
routes.post("/pic", imageInsert);
module.exports = routes;
