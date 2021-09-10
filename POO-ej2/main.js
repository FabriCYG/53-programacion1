import Area from "./area.js"

const mostrar = () => {

    const bi = document.getElementById("inp_bi").value
    const ds = document.getElementById("inp_ds").value
    const a = document.getElementById("inp_a").value

const instancia = new Area (bi,ds,a)

const respuesta = instancia.calcularSuma()



document.getElementById("r1").textContent = respuesta







}

const boton1 = document.getElementById("btn_calcular")
boton1.addEventListener("click",mostrar)


