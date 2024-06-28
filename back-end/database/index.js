
const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "chilabila",
}).promise()
connection.connect()
.then(() => {
 console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error to connect to database", err);
  })


  const getAllAnnounces = ()=>{
    const sql = `select * from announces`
    return connection.query(sql)
  }
  const getAllusers = ()=>{
    const sql = `select * from user`
    return connection.query(sql)
  }
  const saveAnnounceinDB = (announce)=>{
    const sql = "INSERT INTO `announces` SET ?";
    return connection.query(sql,announce)

  }
 const addUser = (user)=>{
  const sql = "INSERT INTO `user` SET ?";
    return connection.query(sql,user)
 }

  const removeAnnounc = (id)=>{
 const sql = "DELETE FROM announces WHERE id=?"
 return connection.query(sql,id)
  }

  const updateAnnounce = (announce,id)=>{
 const sql = " UPDATE announces SET ? WHERE id=?"
 return connection.query(sql,[announce,id])
  }

  module.exports = {getAllAnnounces , saveAnnounceinDB , removeAnnounc , updateAnnounce , addUser , getAllusers}