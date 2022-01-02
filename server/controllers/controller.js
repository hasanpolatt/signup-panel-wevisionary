const pool = require('../database');
const bcrypt = require("bcrypt");

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, result) => {
    if (error) {
      throw error
    }
    response.status(201).json({ "success": true, "message": "User created successfully!" })
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        response.status(500).json({ "success": false, "message": "Bad Request" })
      }
      response.status(200).json({ "success": true, "message": "User updated successfully!" })
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      response.status(500).json({ "success": false, "message": "Bad Request" })
    }
    response.status(200).json({ "success": true, "message": "User deleted" })
  })
}

const register = async (request, response) => {
  const { username, email, password } = request.body;
  try {
    const data = await pool.query(`SELECT * FROM users WHERE email= $1;`, [email]); //Checking if user already exists
    const arr = data.rows;
    if (arr.length != 0) {
      return response.status(400).json({
        error: "Email already there, No need to register again.",
      });
    }
    if(!username || !email || !password){
      return response.status(500).json({"error": "missing field!"})
    }

    const passwordHash = bcrypt.hashSync(password, 10);
    const insert = await pool.query('INSERT INTO users (name, email, pass) VALUES ($1, $2, $3)', [username, email, passwordHash]);
    if(insert){
      return response.status(201).json({"success": "registration success"})
    }else{
      return response.status(500).json({"error": "someting gone wrong."})
    }
  }
  catch (err) {
    console.log(err);
    response.status(500).json({
      error: "Database error while registring user!", //Database connection error
    });
  };
}

const login = async (request, response) => {
  const { email, password } = request.body;

  try {
    const data = await pool.query(`SELECT * FROM users WHERE email= $1`, [email]) //Verifying if the user exists in the database
    const user = data.rows;
    const user_ = user[0]
    if(!user || !bcrypt.compareSync(password, user_.pass)){
      response.status(200).json({"success": false})
    }else{
      response.status(200).json({"success": true})
    }
  } catch (err) {
    console.log(err);
    response.status(500).json({
      error: "Database error occurred while logging in!", //Database connection error
    });
  };
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  register,
  login
}