const express=require('express')
const app=express()
const cors=require('cors');
const loginRoute=require('./routes/auth')
const SignupRoute=require('./routes/users')
const studentRoute=require('./routes/student')

require('./connection');

//middleware
app.use(express.json())
app.use(cors())

//routes
app.use('api/login',loginRoute)
app.use('/api/signup',SignupRoute)
app.use('api/student',studentRoute)

const server=require('http').createServer(app);
PORT=8080;

server.listen(PORT,()=>{
   console.log('listening on port',PORT)
})