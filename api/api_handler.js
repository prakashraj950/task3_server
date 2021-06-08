import express from 'express';
import{storeFormData,Login,fetchData, getBlog} from '../control/formcnt.js'
export default async function installHandler(app){

    app.use(express.json())
    
    app.get('/Blog/:name',async(req,res)=>{
       const result = await getBlog(req.params.name);
       res.send(result)
        
    })


    app.post('/register', async (req,res)=>{
        console.log(req.body)
        await storeFormData(req.body)
        res.send("registered")

    })

    app.post('/login',async(req,res)=>{
        const result = await Login(req.body.email,req.body.password)
        res.send(result)
        console.log(result)
    
    })
    app.post('/data', async(req, res)=>{
        const result = await fetchData(req.body.email, req.body.password);
        res.send(result);
      });
}