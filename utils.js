const moment = require('moment')
const fs = require('fs')
function readFromFile(fn, encode="utf-8"){
    return new Promise((resolve, reject)=>{
        fs.readFile(fn, encode, function (err, data){
            if(err){
                reject(err)
            }else{
                resolve(JSON.parse(data))
            }
        })
    })
}
function getNow(){
   return moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
}
module.exports = {
    readFromFile,getNow
}
