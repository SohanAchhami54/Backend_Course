import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use((err,req,res,next)=>{
    res.status(500).json({
        message:err.message,
    })
})
app.use((req,res,next)=>{
    console.log('Request created')
    next()
})


    const isLoggedIn=(req,res,next)=>{
        //console.log('Checking if user is logged in ')
        const loggedIn=true;
        if(!loggedIn) throw new Error('No user created')
        next()
    }

    app.post('/user',isLoggedIn,(req,res)=>{
        console.log('User data:',req.body) //hami pathauney data haru aauxa
        res.send('User created')

    })

app.get('/',(req,res)=>{

    res.send('This is from backend and Hello my name is sohan achhami.')
})

// app.post('/user',(req,res)=>{
//     console.log('User is created.')
//     res.send('User created')
// })
// app.get('/user/:id',(req,res)=>{
//     console.log('Getting user with ID:',req.params.id)
//     res.send(`User is  ${req.params.id}`)
// })

// app.get('/user',(req,res)=>{
//     console.log('Getting users by',req.query)
//     //res.send('Users fetched')
//     res.status(200).json({id:1,name:'test'})
// })






const port=process.env.PORT 

app.listen(port || 4500 ,()=>{
    console.log(`Server is running at the port ${port}`)
})
// express is resource based 