

//Creacion de Input (SE NECESITA PASAR EL TIPO DE INPUT)
export class Input {
    constructor(types) {
        this.input = document.createElement("input");
        this.div = document.createElement("div");
        this.label = document.createElement("label");
        this.select = document.createElement("select");
        this.type = types;
    }

    //Crea un input donde se pasa el ID, CONTENIDO DE LA ETIQUETA Y LA LISTA DE CLASES QUE SE QUIERAN AGREGAR AL INPUT
    mInputBox(id, content, width, name, clase) {
        let types = this.type;
        let input = this.input
        let div = this.div;
        let label = this.label;
        (clase !== undefined) ? input.className = "form-control " + clase : input.className = "form-control";
        label.setAttribute("for", id);
        label.textContent = content;
        input.setAttribute("id", id);
        input.type = types;
	    input.setAttribute("name", name);
        div.appendChild(label);
        div.appendChild(input);
        div.className = "form-group m-2";
        div.style.width = width;
        label.className = "font-weight-bold"
        return (div);
    }

    // Id: Atributo Id
    // Option: Las opciones que tendra el selector;
    //Content: Nombre de la 
    mSelect(id, options, content, width, name) {
        let div = this.div;
        let label = this.label;
        let select = this.select;
        label.setAttribute("for", id);
        label.textContent = content;
        div.className = "input-group";
	div.style.width = width;
        select.className = "custom-select selectpicker m-2 border-0 ";
        select.id = id;
	    select.setAttribute("name", name);
        options.forEach((element, index) => {
            let option = select.appendChild(document.createElement("option"));
            option.value = index;
            option.textContent = element;
        });
        div.appendChild(label);
        div.appendChild(select);
        return (div)
    }

    mTextarea(form, content) {
        let div = this.div;
        let label = this.label;
        label.textContent = content;
        let text = document.createElement("textarea");
        text.rows = "3"
        div.appendChild(label);
        div.appendChild(text).className = "w-100 form-control";
        form.appendChild(div).className = "w-100 m-2 order-last";
        return (div);
    }

    mSubmit(type, id, color, content, form, value) {
        let btn = document.createElement("button");
        btn.type = type;
        btn.value = value;
        btn.className = `btn ${color} order-last`;
        btn.id = id;
        btn.textContent = content;
        form.appendChild(btn);
        return (btn);
    }

    //ETIQUETA DE TEXTO Y CONTENIDO DEL TITULO
    mTituloH2(etiq, content) {
        let a = document.createElement(etiq);
        let text = content.toUpperCase();
        a.className = "font-weight-bold"
        a.textContent = text;
        return (a);
    }

}

export class Grid {
    constructor() {
        this.div = document.createElement("div");
    }

    //Header: Lista de Cabecera;
    mGrow(header, para, tamano) {
        let container = document.createElement("div");
        container.id = `${para}`;
        let div = this.div;
        let cant = header.length;
        div.className = "order-first";
        div.style.display = "grid";
        div.style.gridTemplateRows = "auto";
        div.style.gridTemplateColumns = `repeat(${cant},${tamano})`;
        div.style.textAlign = "center";
        header.forEach((element, index) => {
            let col = div.appendChild(document.createElement("div"));
            let p = col.appendChild(document.createElement("p"));
            if (index == 0) {
                col.classList = "d-flex justify-content-center flex-column pt-1 rounded-left";
                col.style.cssText = "background-color: #2c2b2a; color:white; font-size:0.8rem";
            }else if(index == cant) {
                col.classList = "d-flex justify-content-center flex-column pt-1 rounded-right";
                col.style.cssText = "background-color: #2c2b2a; color:white; font-size:0.8rem";
            }else{
                col.style.cssText = "background-color: #2c2b2a; color:white; font-size:0.8rem";
                col.classList = "d-flex justify-content-center flex-column pt-1";
            }
            p.className = "p-0 m-0"
            p.textContent = element;
        });
        container.appendChild(div);
        return (container);
    }

    //Para es una variable que se debe asociar al class name del header
    mGolum(body, cant, tamano) {
        let div = document.createElement("div");
        div.style.display = "grid";
        div.style.gridTemplateRows = "auto";
        div.style.gridTemplateColumns = `repeat(${cant},${tamano})`;
        body.forEach(element => {
            let col = div.appendChild(document.createElement("div"));
            let p = col.appendChild(document.createElement("p"));
            col.classList = "d-flex justify-content-center flex-column border-bottom";
            p.className = "p-0 m-0 text-center "
            p.textContent = element;
        });
        return (div);
    }

}
