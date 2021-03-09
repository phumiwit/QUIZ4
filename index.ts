import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { body, query, validationResult } from 'express-validator'

const app = express()
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 3000
const SECRET = "SIMPLE_SECRET"

interface JWTPayload {
  username: string;
  password: string;
}


app.post('/login',
  (req, res) => {
     
    const { username, password ,firstname,lastname,balance} = req.body
    // Use username and password to create token.
    try {
      return res.status(200).json({"message": "Login successfully",
      "token": req.query.token
    })
    
    
      
    }
    catch(e) {
        app.get('/check invaild', (req, res) => {
        {
          return res.status(400).json({"message": "Invalid username or password"})
        }
    })

    return res.status(200).json({
      message: 'Login succesfully',
    })
    })

app.post('/register',
  (req, res) => {

    const { username, password, firstname, lastname, balance } = req.body
    let user={
    "username":req.body.username, 
    "password":req.body.password,
    "firstname":req.body.firstname, 
    "lastname":req.body.lastname,
    "balance":req.body.balance  

    }
     try {
      const token = req.query.token as string
      const { username } = jwt.verify(token, SECRET) as JWTPayload
      
         }
        catch(e){
        app.get('/Username is already in used', (req, res) => {
        return res.status(400).json({"message": "Username is already in used"});
         
        }
        app.get('Register successfully', (req, res) => {
          return res.status(200).json({"message": "Register successfully"})
       
          
       })
  

app.get('/balance',
  (req, res) => {
    const token = req.query.token as string
    try {
      const { username } = jwt.verify(token, SECRET) as JWTPayload
      return res.status(200).json({"message": "name": req.body.username,
      "balance": req.query.token})
    }
    catch(e) {
        app.get('/check token', (req, res) => {
        {
          return res.status(401).json({"message": "Invalid token"})
        }
    })

app.post('/deposit',
  body('amount').isInt({ min: 1 }),
  (req, res) => {
    
    
    //Is amount <= 0 ?
    if (!validationResult(req).isEmpty())
      return res.status(400).json({ message: "Invalid data" })
      switch(token){
            if(req.query.token == token){
            app.get('/check token', (req, res) => {
              {
                return res.status(200).json({"message": "Deposit successfully",
                "balance": 200
                })
              }
            if(req.query.token == 0){
              app.get('/check token', (req, res) => {
              return res.status(400).json({"message": "Invalid token"})
              }
            if(req.query.token != token){
              app.get('/check token', (req, res) => {
              return res.status(401).json({ "message": "Invalid token"})
              }
            
      
    })

app.post('/withdraw',
  (req, res) => {
  })

app.delete('/reset', (req, res) => {

  //code your database reset here
  let user = username.filter((user) => user.username !== parseInt(req.body.username))
        const result = {
            "status":200,
            "data":user
        }
        return res.json(result)
    })    
  return res.status(200).json({
    message: 'Reset database successfully'
  })


app.get('/me', (req, res) => {
  res.send("firstname = phumiwit lastname = promchonid 620612160 gpa = 4.00")
})

app.get('/demo', (req, res) => {
  return res.status(200).json({
    message: 'This message is returned from demo route.'
  })
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
