const express = require('express'),
    bodyParser = require("body-parser"),
    mongo = require("mongodb"),
    fileUpload = require("express-fileupload"),
    ObjectID = require("mongodb").ObjectID,
    cloudinary = require('cloudinary');

//==============================================================================
const app = express();
app.use(fileUpload());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

cloudinary.config({
    cloud_name: <YOUT CLOUD_NAME>,
    api_key: <YOUR API KEY>,
    api_secret: <YOUR API SECRET>
});
//==============================================================================
var url = <YOUR MONGODB CLUSTER>;
var mongoClient = mongo.MongoClient;
var db = null // global variable to hold the database
mongoClient.connect(url, (err, database) => {
    if (!err) {
        console.log("MongoDB connected!");
        db = database;

        /*db.createCollection("users", (err, rest) => {
            if (err) throw err;
            console.log("Coleccion -users- creada");
        });
        db.createCollection("proyects", (err, rest) => {
            if (err) throw err;
            console.log("Coleccion -proyects- creada");
        });*/

        /*
                 var usuario = {
                     name: "Camilo Montoya",
                     email: "cajomo@gmail.com",
                     psw: "kawaii",
                     photo_url: "http://res.cloudinary.com/dpnemhlg6/image/upload/v1511703516/IMG_1064_h4w74c.jpg"
                 }
               
         
         
                 var proyecto = {
                     title: "Profetico",
                     date: "Oct 31 2017",
                     thumbnail: "http://res.cloudinary.com/dpnemhlg6/image/upload/v1511703959/IMG_0584_wv48y8.jpg",
                     description: " Nunc orci nunc, tristique eu metus vitae, cursus imperdiet risus. Vestibulum ac tincidunt lorem, at scelerisque ante. Suspendisse a scelerisque urna. Fusce dolor dolor, dignissim vitae enim condimentum, porta cursus lectus. Cras pharetra egestas ipsum in posuere. Nullam dignissim lacinia tellus id lobortis. Maecenas vel eros non magna tempor consequat quis vitae orci. Proin eros orci, porttitor sed odio et, aliquet maximus ante.",
                     tags: ["design", "ux", "ui", "media", "iot"],
                     author: "Camilo Montoya",
                     email: "cajomo@gmail.com",
                     psw: "kawaii",
                     editors: [
                         {
                             name: "Camilo Montoya",
                             email: "cajomo@gmail.com",
                             photo_url: "http://res.cloudinary.com/dpnemhlg6/image/upload/v1511703516/IMG_1064_h4w74c.jpg"
                         },
                         {
                             name: "Jose David",
                             email: "josedavid@gmail.com",
                             photo_url: "http://res.cloudinary.com/dpnemhlg6/image/upload/v1511703736/IMG_0445_rls815.jpg"
                         }, {
                             name: "Arturo Gomez",
                             email: "arturo@gmail.com",
                             photo_url: "http://res.cloudinary.com/dpnemhlg6/image/upload/v1511703692/IMG_0861_w6xudc.jpg"
                         }, {
                             name: "Camila Morales",
                             email: "camila@gmail.com",
                             photo_url: "http://res.cloudinary.com/dpnemhlg6/image/upload/v1511703344/IMG_3106_hj1yzd.jpg"
                         }
                     ],
                     documents: [
                         {
                             title: "Bocetos",
                             date: "Oct 31 2017",
                             author: "Arturo Gomez",
                             type: "jpg",
                             url: "http://res.cloudinary.com/dpnemhlg6/image/upload/v1511637345/ggpu7iztmskxcycpj5qf.jpg",
                             descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum aliquet felis, sed dictum sem rutrum ut. Nam porta ligula eu mollis pharetra."
                         },
                         {
                             title: "Render",
                             date: "Oct 31 2017",
                             author: "Jose David",
                             type: "jpg",
                             url: "http://res.cloudinary.com/dpnemhlg6/image/upload/v1511638205/gfir6omicrpfyomcdsmg.jpg",
                             descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum aliquet felis, sed dictum sem rutrum ut. Nam porta ligula eu mollis pharetra."
                         },
                         {
                             title: "Mecanica",
                             date: "Oct 31 2017",
                             author: "Camila morales",
                             type: "pdf",
                             url: "http://res.cloudinary.com/dpnemhlg6/image/upload/v1511700484/Taller_cinematica-W_y_E-Maquinas_lhnito.pdf",
                             descripcion: "Curabitur non massa maximus, ornare tellus quis, malesuada lectus. Donec arcu nisl, tempor eu nulla et, vulputate malesuada velit. Integer sit amet efficitur est, a feugiat enim. Nunc orci nunc, tristique eu metus vitae, cursus imperdiet risus. Vestibulum ac tincidunt lorem, at scelerisque ante. Suspendisse a scelerisque urna."
                         },
                         {
                             title: "Avance de impresion 3D",
                             date: "Oct 31 2017",
                             author: "Jose David",
                             type: "mov",
                             url: "http://res.cloudinary.com/dpnemhlg6/video/upload/v1511702577/IMG_4741_bsrwx6.mov",
                             descripcion: "Curabitur non massa maximus, ornare tellus quis, malesuada lectus. Donec arcu nisl, tempor eu nulla et, vulputate malesuada velit. Integer sit amet efficitur est, a feugiat enim. Nunc orci nunc, tristique eu metus vitae, cursus imperdiet risus. Vestibulum ac tincidunt lorem, at scelerisque ante. Suspendisse a scelerisque urna."
                         }
                     ]
                 }
         
                 db.collection("users").insertOne(usuario, (err, result) => {
                     if (err) throw err;
                     console.log(result);
                     db.close();
         
                 });
                 db.collection("proyects").insertOne(proyecto, (err, result) => {
                     if (err) throw err;
                     console.log(result);
                     db.close();
                 });
         
         //*/
    }
});

//============================================================================

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    console.log();

});

//app.get('/user/home', (req, res) => {
app.all('/user/home', (req, res) => {

    var target_user = {
        email: req.body.email,
        psw: req.body.psw
    };

    var target_editor = {
        editors: {
            $elemMatch: {
                email: req.body.email,

            }
        }
    };


    db.collection("users").find(target_user).toArray((err, match) => {
        if (err) throw err;
        if (match.length > 0) {

            db.collection("proyects").find(target_editor).toArray((error, matchProyects) => {
                if (error) throw error;
                if (matchProyects.length > 0) {

                    res.json({
                        response: 'valid',
                        users: match,
                        projects: matchProyects
                    });

                } else {
                    res.json({
                        response: 'valid',
                        users: match
                    });
                }
            });

        } else {
            res.json({
                response: 'invalid'
            });
        }
    });

});


app.post('/entry', (req, res) => {

    var target_user = {
        email: req.body.email
    };

    db.collection("users").find(target_user).toArray((err, match) => {

        if (err) throw err;
        if (match.length > 0) {
            res.json({
                response: 'valid',
                user_name: match[0].name,
            });
        } else {
            res.json({
                response: 'invalid'

            });
        }


    });


});

app.post('/login', (req, res) => {

    var target_user = {
        email: req.body.email,
        psw: req.body.psw
    };

    var target_editor = {
        editors: {
            $elemMatch: {
                email: req.body.email,

            }
        }
    };

    db.collection("users").find(target_user).toArray((err, match) => {
        if (err) throw err;
        if (match.length > 0) {

            db.collection("proyects").find(target_editor).toArray((error, matchProyects) => {
                if (error) throw error;
                if (matchProyects.length > 0) {

                    res.json({
                        response: 'valid',
                        user: match[0],
                        projects: matchProyects
                    });

                } else {
                    res.json({
                        response: 'valid',
                        user: match[0]
                    });
                }
            });

        } else {
            res.json({
                response: 'invalid'
            });
        }
    });


});

app.post('/register', (req, res) => {

    var target_user = {
        email: req.body.email,
        psw: req.body.psw
    };

    db.collection("users").find(target_user).toArray((err, match) => {
        if (err) throw err;
        if (match == 0) {

            if (req.files) {
                var file = req.files.file;
                file.mv("./public/temporal_media_storage/" + file.name, (fileError) => {
                    if (fileError) {
                        res.json({
                            response: "cree una cartepa llamada temporal_media_storage donde se encuentre el index.html "
                        });
                    }

                    cloudinary.uploader.upload("./public/temporal_media_storage/" + file.name, function (result) {

                        var new_user = {
                            name: req.body.name,
                            email: req.body.email,
                            psw: req.body.psw,
                            photo_url: result.url
                        };

                        db.collection("users").insertOne(new_user, (insertError, result) => {
                            if (insertError) throw insertError;

                            db.collection("users").find(new_user).toArray((findError, match) => {
                                if (findError) throw findError;
                                res.json({
                                    response: 'valid',
                                    user: match[0]
                                });
                            });


                        });


                    });
                });
            } else {
                res.json({
                    response: 'no ha mandado ningun archivo'
                });
            }



        } else {
            res.json({
                response: 'invalid'
            });
        }

    });



});
app.get('/mensage', (req, res) => {
    console.log("ok");
    res.json({
        response: 'ok'
    });

});

app.post('/user/create/project', (req, res) => {
    console.log(req.body.tags.split(","));
    var target_user = {
        email: req.body.email,
        psw: req.body.psw
    };

    var first_editor = [
        {
            name: req.body.author,
            email: req.body.email,
            photo_url: req.body.photo_url

        }
    ];

    db.collection("users").find(target_user).toArray((err, match) => {
        if (err) throw err;
        if (match.length > 0) {
            if (req.files) {
                var file = req.files.file;
                file.mv("./public/temporal_media_storage/" + file.name, (fileError) => {
                    if (fileError) {
                        res.json({
                            response: "cree una cartepa llamada temporal_media_storage donde se encuentre el index.html "
                        });
                    }
                    cloudinary.uploader.upload("./public/temporal_media_storage/" + file.name, function (result) {
                        var new_project = {
                            title: req.body.title,
                            date: new Date().toString().split(" ").splice(1, 3).join(" "),
                            thumbnail: result.url,
                            description: req.body.description,
                            tags: req.body.tags.split(","),
                            author: req.body.author,
                            email: req.body.email,
                            psw: req.body.psw,
                            editors: first_editor,
                            documents: []
                        };
                        db.collection("proyects").insertOne(new_project, (insertError, result) => {
                            if (insertError) throw insertError;

                            db.collection("proyects").find(new_project).toArray((findError, match) => {
                                if (findError) throw findError;
                                res.json({
                                    response: 'valid',
                                    project: match[0]
                                });
                            });
                        });
                    });
                });
            } else {
                res.json({
                    response: 'no ha mandado ningun archivo'
                });
            }
        } else {
            res.json({
                response: 'invalid'
            });
        }
    });
});

app.post('/user/add/document', (req, res) => {

    console.log(req.body.email);

    var target_project = {
        _id: new ObjectID(req.body.id),//si existe el proyecto
        editors: {//si existe registro de este correo en el proyecto
            $elemMatch: {
                email: req.body.email,
            }
        }
    };

    db.collection("proyects").find(target_project).toArray((error, matchProyects) => {
        if (error) throw error;
        if (matchProyects.length > 0) {
            if (req.files) {
                var file = req.files.file;

                file.mv("./public/temporal_media_storage/" + file.name, (err) => {
                    if (err) throw err;

                    cloudinary.uploader.upload("./public/temporal_media_storage/" + file.name, function (result) {
                        var new_document = {
                            title: req.body.title,
                            date: new Date().toString().split(" ").splice(1, 3).join(" "),
                            author: req.body.author,
                            type: result.url.split(".")[result.url.split(".").length - 1],
                            url: result.url,
                            descripcion: req.body.description,
                        }
                        var document_to_add = {
                            $push: {
                                documents: new_document
                            }
                        }

                        db.collection("proyects").updateOne(target_project, document_to_add, (unpdateErr, updateResult) => {
                            if (unpdateErr) throw unpdateErr;

                            db.collection("proyects").find(target_project).toArray((error, projects) => {
                                if (error) throw error;
                                res.json({
                                    response: 'valid',
                                    projects: projects

                                });
                            });
                        });
                    });
                });
            } else {
                res.json({
                    response: 'no ha mandado ningun archivo'
                });
            }
        } else {
            res.json({
                response: 'invalid terget_proyect',

            });
        }
    });

});

app.post('/user/add/editor', (req, res) => {

    var target_project = {
        _id: new ObjectID(req.body.id),//si existe el proyecto
        email: req.body.email, // si usted es el autor del proyecto
        psw: req.body.psw, // si sabe la contraseña
        editors: {//si existe registro de este correo en el proyecto para no repetir Editores
            $elemMatch: {
                email: req.body.emailEditor,
            }
        }
    };

    var other_user = {
        email: req.body.emailEditor
    }


    db.collection("users").find(other_user).toArray((errOther_user, matchOther_user) => {
        if (errOther_user) throw errOther_user;
        if (matchOther_user.length > 0) { // este usario-correo si exite dentro de Prodoc

            db.collection("proyects").find(target_project).toArray((error, matchProyects) => {
                if (error) throw error;
                if (matchProyects.length == 0) {
                    var new_editor = {
                        name: matchOther_user[0].name,
                        email: matchOther_user[0].email,
                        photo_url: matchOther_user[0].photo_url
                    }
                    var editor_to_add = {
                        $push: {
                            editors: new_editor
                        }
                    }
                    db.collection("proyects").updateOne({ _id: new ObjectID(req.body.id) }, editor_to_add, (unpdateErr, updateResult) => {
                        if (unpdateErr) throw unpdateErr;
                        db.collection("proyects").find({ _id: new ObjectID(req.body.id) }).toArray((errorRes, projects) => {
                            if (errorRes) throw errorRes;
                            res.json({
                                response: 'valid',
                                projects: projects

                            });
                        });

                    });

                } else {
                    res.json({
                        response: 'Este usaurio ya es un editor',

                    });
                }
            });
        } else {
            res.json({
                response: 'Este usuario no existe en Prodoc, debe registralo',
            });
        }

    });

});

app.post('/user/upload', (req, res) => {

    if (req.files) {
        //console.log(req.files);
        var file = req.files.file;
        //console.log(file);

        file.mv("./public/temporal_media_storage/" + file.name, (err) => {
            if (err) throw err;

            cloudinary.uploader.upload("./public/temporal_media_storage/" + file.name, function (result) {
                console.log(result)

                res.json({
                    img: cloudinary.image(result.public_id, { alt: "Image" })
                });
            });

        });



    }


});

app.use("/public", express.static("public"));
app.use("/js", express.static('public/js'));
app.use("/iconos", express.static('public/imgs'));
app.use("/css", express.static('public/css'));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});

//app.listen(process.env.PORT || 5050);
//networksetup -getinfo Ethernet
