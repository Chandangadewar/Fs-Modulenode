    const { log } = require('console');
    const http = require('http');
    // import http from 'http'

    const os = require('os')
    const path = require('path') 
    const fs = require('fs')




    const server = http.createServer((req,res)=>{
        res.end("Hello world from my side")
    })
    port = 9000


    console.log(`Memory ${os.totalmem()}`);
    console.log(`PLatform ${os.platform()}`);
    console.log(`Freemem ${os.freemem()}`);

    console.log(__dirname , "Directory Path");

    const file1 = path.join(__dirname, 'batch42.txt')

    const dirpath = path.join(__dirname, 'batch-42folder')
    const filepath = path.join(dirpath , 'Hello.txt')
    const newFilepath = path.join(dirpath , "Heyya.txt");

    fs.mkdir(dirpath ,{recursive:true},(err)=>{
        if(err) throw err;
        console.log('Directory created');
        
                    // Create folder

    fs.writeFile(filepath, 'HEllo from example text', (err) => {
        if(err) throw(err)
            console.log('file Written');
            
       // Written file

    fs.readFile(filepath,'utf-8' ,(err,data)=> {
        if (err) throw(err);
        console.log('Read file' , data);
        
     // read file

    fs.appendFile(filepath, '\nAppend content...' , (err) => {
        if(err) throw(err);
        console.log('Content Append');
        
       // Append Content


    fs.rename(filepath,newFilepath,(err)=>{
        if(err) throw(err);
        console.log('File renamed');
        
     // Rename file

    fs.unlink(newFilepath,(err)=>{
        if(err) throw(err)
            console.log("File deleted");

    fs.rm(dirpath,{recursive:true , force:true},(err) => {
        if (err) throw(err)
            console.log("Delete DIrectory");
            
    
        
    }) 
}) 
}) 
}) 
}) 
}) 
})

    // fs.writeFileSync(file1 , 'This is firstline...', (e)=>{
    //     if(e) throw e;
    //     console.log('file Created');
    // })

    // fs.writeFile(filepath,"Hello from hello.txt" , (err)=>{
    //     if(err) throw err;
    //     console.log("File Written");
        
    // })

    // fs.readFileSync(file1 , 'utf-8',(err,data)=>{
    //     if(err) throw err;
    //     console.log(data);
        
    // })

    // const readData = fs.readFileSync(file1,'utf-8')
    // console.log( '*********' , readData , '**********');


    server.listen(port,()=>{
        console.log(`Server Started.. http://localhost:${port}`);
        
    })