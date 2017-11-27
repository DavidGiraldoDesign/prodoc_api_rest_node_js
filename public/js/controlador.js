
function controlador(vista) {

    vista.onRegistro = (parametro) => {

        var params = new FormData();
        params.set("nombreParametro", parametro);


        fetch(`${location.origin}/registro`, {
            method: "POST",
            body: params
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);

            });

    };

    vista.onUpLoad = (file) => {
        console.log("entra a onUpLoad()");
        var params = new FormData();
        params.set('file', file);

        fetch(`${location.origin}/user/upload`, {
            method: 'POST',
            body: params
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                vista.renderImg(res.img);
            });

    };

    vista.info = (file) => {
        console.log("entra a onUpLoad()");

        var params = new FormData();
        params.set('email', "cajomo@gmail.com");
        params.set('psw', "kawaii");

        fetch(`${location.origin}/user/home`, {
            method: 'POST',
            body: params
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);

            });

    };

    vista.crearProyecto = (file) => {
        console.log("entra a crearProyecto");

        var tags = ["art", "architecture", "design"];
        var params = new FormData();
        params.set('author', "Camilo Montoya");
        params.set('email', "cajomo@gmail.com");
        params.set('photo_url', "http://res.cloudinary.com/dpnemhlg6/image/upload/v1511703516/IMG_1064_h4w74c.jpg");
        params.set('psw', "kawaii");
        params.set('title', "El super Proyecto No: " + Math.floor(Math.random() * (1000 - 0) + 0));
        params.set('tags', tags);
        params.set('description', "Esto es una descripcion");
        params.set('file', file);

        fetch(`${location.origin}/user/create/project`, {
            method: 'POST',
            body: params
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);

            });

    };
    vista.agregarDocumento = (file) => {
        console.log("entra a agregarDocumento");

        var params = new FormData();
        params.set('title', "Documento No: " + Math.floor(Math.random() * (1000 - 0) + 0));
        params.set('author', "Jose David");
        params.set('email', "josedavid@gmail.com");
        params.set('description', "Esto es una descripcion");
        params.set('id', "5a1b9ab90c0f3a1814ca01c3");
        params.set('file', file);

        fetch(`${location.origin}/user/add/document`, {
            method: 'POST',
            body: params
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);

            });

    };
    vista.agregarEditor = (file) => {
        console.log("entra a agregarEditor");

        var params = new FormData();
        params.set('email', "cajomo@gmail.com");
        params.set('psw', "kawaii");
        params.set('emailEditor', "josedavid@gmail.com");
        params.set('id', "5a1b9ab90c0f3a1814ca01c3");

        fetch(`${location.origin}/user/add/editor`, {
            method: 'POST',
            body: params
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);

            });

    };

    vista.mesaje = (file) => {
        /* var params = new FormData();
         params.set('msn', "Enviado desde iPhone");
         fetch(`${location.origin}/user/upload`, {
             method: 'POST',
             body: params
         })
 
         var result = fetch(`${location.origin}/mensage`)
         result.then(function (response) {
             console.log('response', response)
             console.log('header', response.headers.get('Content-Type'))
             return response.text()
         }).then(function (text) {
             console.log('got text', text)
             vista.renderMensaje();
         }).catch(function (ex) {
             console.log('failed', ex)
             
         })*/


    };

    vista.resgis = (file) => {
        console.log("entra a la prueba de registro");
        var params = new FormData();
        params.set('email', "josedavid@gmail.com");
        params.set('psw', "1234");
        params.set('name', "Jose David");
        params.set('file', file);

        fetch(`${location.origin}/register`, {
            method: 'POST',
            body: params
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.response);

            });

    };



    vista.render();

}

controlador(vista);
