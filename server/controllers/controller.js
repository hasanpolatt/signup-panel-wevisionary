const pool = require('../queries');

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

    // TO DO: check if user is not exist return 404

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
    else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err)
          response.status(err).json({
            error: "Server error",
          });
        const user = {
          username,
          email,
          password: hash,
        };
        var flag = 1; //Declaring a flag

        //Inserting data into the database

        pool
          .query(`INSERT INTO users (username, email, password) VALUES ($1,$2,$3,$4);`, [user.username, user.email, user.password], (err) => {

            if (err) {
              flag = 0; //If user is not inserted is not inserted to database assigning flag as 0/false.
              console.error(err);
              return response.status(500).json({
                error: "Database error"
              })
            }
            else {
              flag = 1;
              response.status(200).send({ message: 'User added to database, not verified' });
            }
          })
        if (flag) {
          const token = jwt.sign( //Signing a jwt token
            {
              email: user.email
            },
            process.env.SECRET_KEY
          );
        };
      });
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
    const data = await pool.query(`SELECT * FROM users WHERE email= $1;`, [email]) //Verifying if the user exists in the database
    const user = data.rows;
    if (user.length === 0) {
      response.status(400).json({
        error: "User is not registered, Sign Up first",
      });
    }
    else {
      bcrypt.compare(password, user[0].password, (err, result) => { //Comparing the hashed password
        if (err) {
          response.status(500).json({
            error: "Server error",
          });
        } else if (result === true) { //Checking if credentials match
          const token = jwt.sign(
            {
              email: email,
            },
            process.env.SECRET_KEY
          );
          response.status(200).json({
            message: "User signed in!",
            token: token,
          });
        }
        else {
          //Declaring the errors
          if (result != true)
            response.status(400).json({
              error: "Enter correct password!",
            });
        }
      })
    }
  } catch (err) {
    console.log(err);
    response.status(500).json({
      error: "Database error occurred while signing in!", //Database connection error
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