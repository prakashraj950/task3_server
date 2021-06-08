import connectDatabase from '../database/db_connection.js';
import {FormData} from '../data/FormData.js';
import {FormSetDb} from "../database/formdb.js";
const con = connectDatabase();
const form_set_db = new FormSetDb(con);

export async function storeFormData(data){
    const form_data = new FormData();
    form_data.copy(data);
    let stmt = "INSERT INTO form_data SET ?";
    con.query(stmt,form_data,(err,res)=>{
        if(err) throw err;
    })
}

export async function Login(email,password){ 
    console.log(email,password);
    const form_data = new FormData();
    form_data.email = email;
    await form_set_db.read_form_data(form_data);
    if(form_data.password===password){
      return {status: "success"};
    }else{
      return {status: "failed"};
    }
  }
  export async function fetchData(email,password){ 
    const login_data = await Login(email, password);
    if(login_data.status === "success"){
      const form_data = new FormData();
      form_data.email = email;
      await form_set_db.read_form_data(form_data);
      console.log(form_data)
      return form_data;
    } else {
      return {};
    }
  }

  export  function getBlog(name){
    let stmt = "SELECT content FROM Blog_data WHERE name= ?";
    return new Promise ( (resolve, reject) => {
      con.query(stmt,[name],(err,r)=>{ 
          if (err) reject(err);
          else if (r.length === 1) resolve(r[0].content);
          else reject();
        
        });
    })
  }
  