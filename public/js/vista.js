var vista = {
    body: document.querySelector("body"),
    usuario: null,
    localUse: false,

    setUsuario: function setUsuario(ref) {
        this.usuario = ref;
        localStorage.setItem("localUser", JSON.stringify(this.usuario));
    },


    getMensaje: function getMensaje() {
        var div = document.createElement("div");
        div.innerHTML = `
                        <h1>Hola</h1>
                        <form class="col-4 col-l-4 col-m-6 col-s-11">
                        <progress class="col-12 col-l-12 col-m-12 col-s-12" value="0" max="100" id="uploader">0%</progress>
                        <input class="col-12 col-l-12 col-m-12 col-s-12" type="file" name="file" value="upload" id="fileButton" required>
                        <input class="col-12 col-l-12 col-m-12 col-s-12" type="submit" value="Publicar" id="publicar">
                        </form>
                        `;

        div.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();
            //this.onUpLoad(div.querySelector("#fileButton").files[0]);
            this.resgis(div.querySelector("#fileButton").files[0]);
        });

        return div;
    },

    getApi: function getApi() {
        var div = document.createElement("div");
        div.innerHTML = `
                        <h1>API</h1>
                        <form class="col-4 col-l-4 col-m-6 col-s-11">
                        <input class="col-12 col-l-12 col-m-12 col-s-12" type="file" name="file" value="upload" id="fileButton" required>
                        <input class="col-12 col-l-12 col-m-12 col-s-12" type="submit" value="Publicar" id="publicar">
                        </form>
                        
                        `;
        /*<form class="col-4 col-l-4 col-m-6 col-s-11">
                                <input class="col-12 col-l-12 col-m-12 col-s-12" type="file" name="file" value="upload" id="fileButton">
                                <input class="col-12 col-l-12 col-m-12 col-s-12" type="submit" value="Publicar" id="publicar">
                                </form>*/
        div.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();
            //this.crearProyecto(div.querySelector("#fileButton").files[0]);
           // this.agregarDocumento(div.querySelector("#fileButton").files[0]);
            // this.agregarEditor(div.querySelector("#fileButton").files[0]);
            //this.resgis(div.querySelector("#fileButton").files[0]);
        });


        return div;
    },

    getImg: function getImg(img) {
        var div = document.createElement("div");
        div.innerHTML = img;
        var image = div.querySelector("img");
        image.setAttribute("width", "200px");
        image.setAttribute("height", "auto");
        return div;
    },
    guardarEnLocal: function guardarEnLocal(parametroParaGuardar) {
        if (this.localUse == false) {
            localStorage.setItem("nombreDelItem", JSON.stringify(localUser));
            this.localUse = true;
        }
    },

    asignaLocal: function asignaLocal() {
        this.usuario = JSON.parse(localStorage.getItem("nombreDelItem"));
    },

    render: function render() {
        this.body.innerHTML = "";
        if (JSON.parse(localStorage.getItem("localUser")) == null) {
            this.body.appendChild(this.getApi());
        } else {
            this.asignaLocal();
        }
    },
    renderImg: function renderImg(m) {
        this.body.appendChild(this.getImg(m));
    },
    renderMensaje: function renderMensaje() {
        this.body.appendChild(this.getMensaje());
    }


};


