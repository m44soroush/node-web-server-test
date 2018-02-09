const express=require('express');
const hbs=require('hbs');
const fs=require('fs');

const app=express();

const port=process.env.PORT || 3000;

// app.set('view engine',hbs);

app.use(express.static(__dirname+'/public'));

// app.use((req,res,next)=>{
//     const log=`${new Date().toTimeString()} => ${req.method} ${req.url}`;
//     fs.appendFile('server.txt',log+'\n',(err)=>{
//         console.log('error occurred: '+err);
//     });
//
//     next();
// });

// app.get('/about',(req,res)=>{
//     res.render('about.hbs');
// });



app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});


app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});
