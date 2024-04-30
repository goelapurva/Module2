const fs = require('fs');

console.log(process.argv);
// fs.writeFile()
let fileList = [];
const [,,fileName] = process.argv;
fs.writeFile(fileName,"You are awesome", (err) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(fileList);
    console.log(fileName);
    if(fileList.includes(fileName) ){
        console.log("Please give new filename");
        return;
    }
    fileList.push(fileName);
    console.log('success!');
}
);

//console.log(fileList);