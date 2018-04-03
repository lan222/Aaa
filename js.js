const express=require('express')
const bodyparser=require('body-parser')
const mysql=require('mysql')
const app=express()
app.listen(1000,function(){
    console.log('ok')
}) 

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'biao',
    port:'3306'
})

app.get('/',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    pool.getConnection((err,con)=>{
        if(err) throw err
        var sql='SELECT * FROM loupan LIMIT 0,3'
        con.query(sql,(err,rows)=>{
            if(err) throw err
            res.send(rows);
            con.release()
        })
    })
}) 