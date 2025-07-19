let lista=[]
        cantidad = parseInt(prompt("Ingresa la cantidad de comidas: "))
        for(i=1;i<=cantidad;i++){
            comida=prompt("Ingresa la comida: ")
            lista.push(comida)
        }
        //addEventListener
const miTitulo = document.querySelector("h1");
miTitulo.textContent = lista;
