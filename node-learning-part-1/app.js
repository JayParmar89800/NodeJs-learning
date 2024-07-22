// 1

// const http = require ('http');
// const data = require('./data')
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application\json'});
// resp.write(JSON.stringify(data));
// resp.end()
// }).listen(3000);


// 2

// const fs = require("fs");
// const input = process.argv;
// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// }
// else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// }
// else {
//   console.log("invalid output");
// }

// 3

// const fs=require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'files')

// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/apple${i}.txt`,"a simple text file")
// } 

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//             console.log("file name is",item)
//     })
// })



// 4

// const fs=require('fs');
// const path=require('path')
// const  dirPath=path.join(__dirname,'files');
// const filePath= `${dirPath}/apple.txt`

// fs.writeFileSync(filePath,"this isn apple.txt file")

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath,'and file name is jay parmar',(err)=>{
//     if(!err) console.log("file is updated ")
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated")
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)


// 5



// let a=10
// let b=5
// console.log("first")

// setTimeout(()=>{
//     // console.log("second")
//     b=20
// },2000)


// let waitingdata= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })

// console.log("third")

// waitingdata.then((data)=>{
//     console.log(a+data)
// })
 