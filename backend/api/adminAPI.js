const express = require("express");
const app = express();
const connection = require("../database");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//show production (pass) ท็อปทำ
const Getproducts = async (req, res) => {
  try {
    const conn = await connection;
    const results = await conn.query("SELECT * FROM db_project.product");
    res.send(results[0]);
  } catch (err) {
    res.status(500).send(err);
    return console.log(err);
  }
};


// Get a single product by ID (pass) ท็อปทำ
const GetproductsByid = async (req,res) =>{
  try {
    const conn = await connection;
    const results = await conn.query("SELECT * FROM product WHERE id = ?", [
      req.params.id,
    ]);
    if (results.length > 0) {
      res.send(results[0]);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log(err);
  }
}


// update product by id (pass) ท็อปทำ
const UpdateProduct = async (req, res)  => { 
  const productId = req.params.id;

  if (!productId) {
    return res.status(400).send({ message: 'Missing product ID' });
  }

  const { Pname, stock, price, detail, priceType, caution, warring, type, promotion } = req.body;

  if (!req.body) {
    console.log(Pname,stock,price,detail,priceType,promotion,warring,type,caution)
    return res.status(400).send({ message: 'Missing required fields' });
  }

  try {
    const conn = await connection;
    const query = 'UPDATE product SET product_name = ?, product_stock = ?, product_price = ?, product_type = ?, product_detail = ?, product_pay = ?, product_warring = ?, product_caution = ?, product_promotion = ? WHERE id = ?';
    const values = [Pname, stock, price, priceType, detail, caution, warring, type, promotion, productId];
    const results = await conn.query(query, values);

    if (results.length > 0) {
      res.send({ message: 'Product updated successfully' });
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Server error' });
  }
};


// Create a new product(pass) ท็อปทำ
const CreateProduct = async (req, res) => {
  try {
    const product = req.body;
    const conn = await connection;
    const [results] = await conn.query("INSERT INTO product SET ?", product);
    res.status(201).send({ message: "Product created successfully", id: results.insertId });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  } 
}


//delete product(pass) ท็อปทำ
const Deleteproduct = async (req,res) => {
  try {
    const conn = await connection;
    const results = await conn.query("DELETE FROM product WHERE id = ?", [
      req.params.id,
    ]);
    if (results.length > 0) {
      res.send({ message: "Product deleted successfully" });
    } else {
      res.status(404).send({ message: "not found" });
    }
  } catch (err) {
    console.log("error", err);
  }
}

//loginAdmin (pass) ท็อปทำ
const loginAdmin =  async (req, res) => {
  const name = req.body.username;
  const password = req.body.password;
  try {
    const conn = await connection;
    const user = await conn.query("SELECT * FROM users WHERE username = ?", [name]);
    // console.log(user[0][0].password,password)
    if(user[0].length > 0) {
      const match = await bcrypt.compare(password, user[0][0].password);
      // console.log(match)
      if(match && user[0][0].role === "admin") {
        const token = jwt.sign({ name: user[0][0].username, email: user[0][0].email, role: user[0][0].role }, "secret_key", {
          expiresIn: "1h",
        });
        res.cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 3600000),
        });
        res.status(200).send("OK");
      } else {
        res.status(401).send("การยืนยันตัวตนไม่ถูกต้อง");
      }
    } else {
      res.status(401).send("รหัสผ่านไม่สามารถใช้งานได้");
    }
  } catch (err) {
    console.log(err);
  }
};
//getuser pass ท็อปทำ
const Getuser = async (req, res) => {
  try{
    const conn = await connection;
    const result = await conn.query('select * from db_project.users ')
    res.send(result[0]);
  }catch(err){
    console.log(err)
  }
}
//getuser byid pass ท็อปทำ
const GetuserByid = async (req,res) =>{
  try {
    const conn = await connection;
    const results = await conn.query("SELECT * FROM users WHERE id = ?", [
      req.params.id,
    ]);
    if (results.length > 0) {
      res.send(results[0]);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log(err);
  }
}

//createuser pass ท็อปทำ
const CreateUser = async (req, res) => {
  try {
    const conn = await connection;
    const user = req.body;
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const results = await conn.query("INSERT INTO users (username,password,role,email) values (?,?,?,?)", [
        user.username, hashedPassword, user.role, user.email
      ]);
    if (results.length > 0) {
      res.status(201).send({ message: "Product created successfully" });
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log(err);
  }
}


//update user pass ท็อปทำ
const UpdateUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(12);
    const conn = await connection;
    if (req.body.username === null ){
      res.status(400).send({ message: "username is required" });
    }else{
      const {username,role,email} = req.body;
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const results = await conn.query("UPDATE users SET username = ? , password = ? , role = ? , email = ? WHERE id = ?", [
         username,hashedPassword,role,email, req.params.id
    ]);
    if (results.length > 0) {
      res.send({ message: "Product updated successfully" });
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  }
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log(err);
  }
}

//update user pass ท็อปทำ
const DeleteUser = async (req, res) => {
  try {
    const conn = await connection;
    const results = await conn.query("DELETE FROM users WHERE id = ?", [
      req.params.id,
    ]);
    if (results.length > 0) {
      res.send({ message: "Product deleted successfully" });
    } else {
      res.status(404).send({ message: "not found" });
    }
  } catch (err) {
    console.log("error", err);
  }
};
const imageInsert = async (req, res, next) => {
  try {
    const conn = await connection;
    const user = req.body;
      const results = await conn.query("INSERT INTO product(image_product) values (?)", [
        user.url
      ]);
    if (results.length > 0) {
      res.status(201).send({ message: "Product created successfully" });
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log(err);
  }
}

module.exports = {
  loginAdmin,
  Getproducts,
  GetproductsByid,
  UpdateProduct,
  Deleteproduct,
  CreateProduct,
  Getuser,
  GetuserByid,
  UpdateUser,
  CreateUser,
  DeleteUser,
  imageInsert
}