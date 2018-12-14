var express = require("express");
var bodyParser = require("body-parser");
var mysql= require("mysql");
var session= require("express-session");

var app = express();

var credenciales = {
    user: "root",
    password: "",
    port:"3306",
    host:"localhost",
    database:"mydb",
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.use(session({secret:"ASDFE$%#%",resave:true, saveUninitialized:true}));


var publicUsuario= express.static("public_Usuario");
app.use(
    function(req,res,next){
        if (req.session.contrasena){



var publicUsuario= express.static("public_Usuario");

/*var public_Usuario= express.static("public_Usuario");

app.use(
    function(req,res,next){
        if (req.session.nombre_usuario){
            //Significa que el usuario si esta logueado

			publicUsuario(req,res,next);
        }
        else
            return next();
    }

); 



); 

);*/  

//Lgin y Sign out



//Login y Sign out
//var sql = `INSERT INTO tbl_usuarios(nombre, apellido, correo, nombre_usuario, contrasena, imagen_perfil, id_planes) VALUES (?,?,?,?,?,?)`;
app.post("/login", function(req, res){
    var conexion = mysql.createConnection(credenciales);

    conexion.query("SELECT id_usuarios, nombre_usuario FROM tbl_usuarios WHERE usuario=? and contrasena=SHA1(?)",


    conexion.query("SELECT id_usuarios, nombre_usuario FROM tbl_usuarios WHERE usuario=? and contrasena=SHA1(?)",

    conexion.query("SELECT id_usuarios, nombre_usuario FROM mydb.tbl_usuarios WHERE usuario=? and contrasena=SHA1(?)",


        [req.body.usuario, req.body.contrasena],
        function(err, data, fields){
                if (data.length==1){
                    req.session.nombre_usuario = data[0].nombre_usuario;
                    req.session.id_usuarios = data[0].id_usuarios;
                    data[0].estatus = 0;
                    res.send(data[0]); 
                }else{
                    res.send({estatus:1, mensaje: "Login fallido"}); 
                }
         }
    ); 
});
  
app.get("/sign-out", function (req,res) {
    req.session.destroy();
    res.send("Sign out");
    
})


app.post("/login2", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        "SELECT id_usuarios, nombre_usuario FROM tbl_usuarios WHERE contrasena=sha1(?) and usuario=?",
        [req.body.contrasena, req.body.usuario],
        function (err,data,fields) {
            if(err){
                res.send(err);
                res.end();
            }else{
                if(data.length==1){
                    req.session.usuario = data[0].usuario;
                    req.session.idUsuario = data[0].id_usuarios;
                    req.session.contrasena = data[0].contrasena;
                }
                res.send(data);
                res.end();
            }

            
        }
    );
    
});
  
app.get("/sign-out", function (req,res) {
    req.session.destroy();
    res.send("Sign out");
    
})

app.post("/login2", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        "SELECT id_usuarios, nombre_usuario, contrasena FROM tbl_usuarios WHERE contrasena=sha1(?) and nombre_usuario=?",
        [req.body.contrasena, req.body.usuario],
        function (err,data,fields) {
            if(err){
                res.send(err);
                res.end();
            }else{
                if(data.length==1){
                    req.session.nombre_usuario = data[0].nombre_usuario;
                    req.session.idUsuario = data[0].id_usuarios;
                    req.session.contrasena = data[0].contrasena;                   
                }
                res.send(data);
                res.end();
            }


            
        }
    );
    
});
  
app.get("/sign-out", function (req,res) {
    req.session.destroy();
    res.send("Sign out");
    
})

//Registro y obtencion de los usuarios
app.get("/registro", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query(`INSERT INTO tbl_usuarios(nombre,apellido,correo,nombre_usuario,contrasena,imagen_perfil,id_planes) VALUES (?,?,?,?,SHA1(?),"img/perfil/avatar.png",1)`,
                    [req.query.nombre, req.query.apellido, req.query.correo, req.query.nombre_usuario, req.query.contrasena],


//Registro y obtencion de los usuarios
app.post("/registro", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query(`INSERT INTO tbl_usuarios(nombre,apellido,correo,nombre_usuario,contrasena,imagen_perfil,id_planes) VALUES (?,?,?,?,SHA1(?),"img/perfil/avatar.png",1)`,
                    [req.body.nombre, req.body.apellido, req.body.correo, req.body.nombre_usuario, req.body.contrasena],

                    function(err, data, fields){
                        if (err) throw err;
                        res.send(data);
                    }

    );  
});

app.get("/registro2",function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        `INSERT INTO tbl_usuarios (nombre, apellido, correo, nombre_usuario, contrasena, imagen_perfil, id_planes) VALUES (?,?,?,?,sha1(?),"img/usuarios/avatar.png",1)`,
        [req.query.nombre, req.query.apellido, req.query.correo, req.query.nombre_usuario, req.query.contrasena],
        function (err,data,fields) {
            if(err) throw err;
            res.send(data);
            }
    );    
})

    );
    
});

app.post("/obtener-usuario", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    var obtencion = [];
    conexion.query("SELECT id_usuarios, nombre, apellido, correo, nombre_usuario, contrasena, imagen_perfil, id_planes FROM tbl_usuarios WHERE id_usuarios= ?",
                   [req.body.session.id_usuarios]).on("result",function (result) {
                       obtencion.push(result);}).on("end",function() {
                           res.send(obtencion);});
});

//Rutas para la creacion de carpetas y archivos
app.post("/carpeta", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query(`INSERT INTO tbl_carpetas(nombre_carpeta, id_usuarios) VALUES(?,?)`,
                    [req.body.nombre_carpeta, req.session.id_usuarios],
                    function (err,data,fields) {
                        if(err) throw err;
                        res.send(data);
                        
                    });
    
});

app.post("/archivo", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query(`INSERT INTO tbl_archivos(nombre_archivo, id_lenguajes, id_carpetas,id_usuarios) VALUES(?,?,?,?)`,
                   [req.body.nombre_archivo, req.body.id_lenguajes,req.body.id_carpetas,req.session.id_usuarios],
                   function (err,data,fields) {
                       if(err) throw err;
                       res.send(data);
                       
                   });
    
});


//Rutas para las actualizaciones
app.post("/actualizar-imagen", function(req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query("UPDATE tbl_usuarios SET imagen_perfil = ? WHERE tbl_usuarios.id_usuarios = ?",
                    [req.body.imagen_perfil, req.session.id_usuarios],
                    function (err,data,fields) {
                        if (err)  throw err;
                        res.send(data);                       
                    });
});


app.post("/actualizar-plan", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query("UPDATE tbl_usuarios SET id_planes = ? WHERE tbl_usuarios.id_usuarios = ?",
                    [req.body.id_planes, req.session.id_usuarios],
                    function (err,data,fields) {
                        if(err) throw err;
                        res.send(data);
                        
                    });
});

app.get("/actualizar-usuario", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query("UPDATE tbl_usuarios SET nombre_usuario= ? WHERE tbl_usuarios.id_usuarios = ?",
                    [req.query.nombre_usuario, req.session.id_usuarios],
                    function (err,data,fields){
                        if (err) throw err;
                        res.send(data);
                        res.end();
                          });
});



//Rutas para las actualizaciones
app.post("/actualizar-imagen", function(req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query("UPDATE tbl_usuarios SET imagen_perfil = ? WHERE tbl_usuarios.id_usuarios = ?",
                    [req.body.imagen_perfil, req.session.id_usuarios],
                    function (err,data,fields) {
                        if (err)  throw err;
                        res.send(data);                       
                    });
});


app.post("/actualizar-plan", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query("UPDATE tbl_usuarios SET id_planes = ? WHERE tbl_usuarios.id_usuarios = ?",
                    [req.body.id_planes, req.session.id_usuarios],
                    function (err,data,fields) {
                        if(err) throw err;
                        res.send(data);
                        
                    });
});

app.get("/actualizar-usuario", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query("UPDATE tbl_usuarios SET nombre_usuario= ? WHERE tbl_usuarios.id_usuarios = ?",
                    [req.query.nombre_usuario, req.session.id_usuarios],
                    function (err,data,fields){
                        if (err) throw err;
                        res.send(data);
                        res.end();
                          });
});




app.post("/obtener-usuario", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    var obtencion = [];
    conexion.query("SELECT id_usuarios, nombre, apellido, correo, nombre_usuario, contrasena, imagen_perfil, id_planes FROM tbl_usuarios WHERE id_usuarios= ?",
                   [req.body.session.id_usuarios]).on("result",function (result) {
                       obtencion.push(result);}).on("end",function() {
                           res.send(obtencion);});
});

//Rutas para la creacion de carpetas y archivos
app.post("/carpeta", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query(`INSERT INTO tbl_carpetas(nombre_carpeta, id_usuarios) VALUES(?,?)`,
                    [req.body.nombre_carpeta, req.session.id_usuarios],
                    function (err,data,fields) {
                        if(err) throw err;
                        res.send(data);
                        
                    });
    
});

app.post("/archivo", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query(`INSERT INTO tbl_archivos(nombre_archivo, id_lenguajes, id_carpetas,id_usuarios) VALUES(?,?,?,?)`,
                   [req.body.nombre_archivo, req.body.id_lenguajes,req.body.id_carpetas,req.session.id_usuarios],
                   function (err,data,fields) {
                       if(err) throw err;
                       res.send(data);
                       
                   });
    
});


//Rutas para las actualizaciones
app.post("/actualizar-imagen", function(req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query("UPDATE tbl_usuarios SET imagen_perfil = ? WHERE tbl_usuarios.id_usuarios = ?",
                    [req.body.imagen_perfil, req.session.id_usuarios],
                    function (err,data,fields) {
                        if (err)  throw err;
                        res.send(data);                       
                    });
});


app.post("/actualizar-plan", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query("UPDATE tbl_usuarios SET id_planes = ? WHERE tbl_usuarios.id_usuarios = ?",
                    [req.body.id_planes, req.session.id_usuarios],
                    function (err,data,fields) {
                        if(err) throw err;
                        res.send(data);
                        
                    });
});

app.get("/actualizar-usuario", function (req,res) {
    var conexion = mysql.createConnection(credenciales);
    conexion.query("UPDATE tbl_usuarios SET nombre_usuario= ? WHERE tbl_usuarios.id_usuarios = ?",
                    [req.query.nombre_usuario, req.session.id_usuarios],
                    function (err,data,fields){
                        if (err) throw err;
                        res.send(data);
                        res.end();
                          });
});


app.listen(3000);
console.log("Servidor levantado, esperando conexiones"); 