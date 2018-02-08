const express=require('express');
const hbs=require('hbs');
const app=express();
const fs=require('fs');

const port=process.env.PORT || 3000;

app.set('view engine',hbs);
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
    const log=`${new Date().toTimeString()} => ${req.method} ${req.url}`;
    fs.appendFile('server.txt',log+'\n',(err)=>{
        console.log('error occurred: '+err);
    });

    next();
});

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        msg:'Welcome to home'
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs');
});

app.get('/wlc',(req,res)=>{
    res.render('wlc.hbs');
});

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});
