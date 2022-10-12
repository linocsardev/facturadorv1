
//variables principales
let clientes = [
    {
        dni: "45783392",
        name: "Efrain",
        lastname: "Morales Vilchez",
        direccion: "av. Circunvalacion 323"
    },
    {
        dni: "73783393",
        name: "Isabella",
        lastname: "Gonzalez Mora",
        direccion: "av. peru 565"
    },
    {
        dni: "78541266",
        name: "Camila Rosa",
        lastname: "Ormeño Champi",
        direccion: "av. las flores 321"
    },
    {
        dni: "45893242",
        name: "Alain",
        lastname: "Condori Nuñez",
        direccion: "av. dolores 03"
    },
    {
        dni: "75438911",
        name: "Luisa",
        lastname: "Sandoval Jimenez",
        direccion: "av. girasoles 903"
    },
    {
        dni: "71269363",
        name: "Miriam Milagros",
        lastname: "Aslla Hermoza",
        direccion: "av. Jose Miguel 323"
    }
]
//lista de productos
let catalogo = [
    {
        id: "741526359874",
        nombre: "Televisor Samsung",
        precio: 1200,
        cantidad: 5
    },
    {
        id: "92526879871",
        nombre: "Regrigeradora LG",
        precio: 2200,
        cantidad: 7
    },
    {
        id: "245896873114",
        nombre: "Moto Yamaha 300",
        precio: 9200,
        cantidad: 2
    },
    {
        id: "20172898219",
        nombre: "Laptop Gamming Asus",
        precio: 8000,
        cantidad: 2
    }
]
let ventas = []
class Venta {
    id
    vendedor
    tipoDocumento
    serie
    numero
    cliente
    productos
    precioTotal
    fecha
    hora
    constructor(id, vendedor, tipoDocumento, serie, numero, cliente, productos, precioTotal, fecha, hora) {
        this.id= id;
        this.vendedor = vendedor;
        this.tipoDocumento = tipoDocumento;
        this.serie = serie;
        this.numero = numero;
        this.cliente = cliente;
        this.productos = productos;
        this.precioTotal = precioTotal;
        this.fecha = fecha;
        this.hora = hora
    }

}

function agregarProducto() {

    let contenedorItem = document.querySelector(".contenedor_item")
    console.log(contenedorItem)
    console.log(document.querySelectorAll(".contenedor_item form"))

    let indexForm = document.querySelectorAll(".contenedor_item form").length;

    let formVenta = document.querySelector(".form_venta")
    let cloneFormVenta = formVenta.cloneNode(true)
    let idForm = "form_" + indexForm;
    cloneFormVenta.setAttribute("id", idForm)
    contenedorItem.appendChild(cloneFormVenta)

    document.querySelector("#" + idForm + " #codigo").value = '' + indexForm
    document.querySelector("#" + idForm + " #producto").value = ''
    document.querySelector("#" + idForm + " #serie").value = ''
    document.querySelector("#" + idForm + " #precio").value = ''
    document.querySelector("#" + idForm + " #cantidad").value = ''
    document.querySelector("#" + idForm + " #total").value = ''

}

function quitarProducto() {

    let contenedorItem = document.querySelector(".contenedor_item")
    contenedorItem.lastChild.remove()
}
//capturar inputs
let serie = document.querySelector("#serie")
let numeral = document.querySelector("#numeral")
let vendedor = document.querySelector("#vendedor")
let documento = document.querySelector("#documento")
let capturarVendedor = vendedor.value
let capturarDocumento = documento.value
let dni = document.querySelector("#dni")
let nombres = document.querySelector("#nombres")
let apellidos = document.querySelector("#apellidos")
let direccion = document.querySelector("#direccion")
//capturando elementos del buscador
let productoBuscar = document.querySelector("#producto-buscado")
let iconSearch = document.querySelector(".icon_search")
let resultadoBusqueda = document.querySelector(".resultados")
// datos de la venta
let codigo = document.querySelector('#codigo')
let producto = document.querySelector('#producto')
let inputPrecio = document.querySelector("#precio")
let inputCantidad = document.querySelector("#cantidad")

let subTotal = document.querySelector("#subTotal")
let precioTotal = document.querySelector(".precio_total")


vendedor.addEventListener("change", function () {
    capturarVendedor = vendedor.value
})

documento.addEventListener("change", () => {
    capturarDocumento = documento.value
})



inputCantidad.addEventListener("input", calcularSubtotal)
function calcularSubtotal(e) {
    subTotal.value = (inputPrecio.value * inputCantidad.value).toFixed(2)
    let subTotalFormated = parseInt(subTotal.value)
    precioTotal.innerHTML = subTotalFormated.toFixed(2)

}
inputPrecio.addEventListener("input", function () {
    subTotal.value = (inputPrecio.value * inputCantidad.value).toFixed(2)
    let subTotalFormated = parseInt(subTotal.value)
    precioTotal.innerHTML = subTotalFormated.toFixed(2)
})

let btnGuardar = document.querySelector(".btn-guardar")
let dialogClientes = document.querySelector(".dialog-clientes")
let mostrarClientes = document.querySelector(".mostrar-clientes")
let mostrarCatalogo = document.querySelector(".mostrar-catalogo")
let salirClientes = document.querySelector(".btn-salir-clientes")
let salirCatalogo = document.querySelector(".btn-salir-catalogo")
let dialog = document.querySelector("dialog")
let dialogCatalogo = document.querySelector(".dialog-catalogo")
let btnConfirmar = document.querySelector("#confirmar")
let btnCancelar = document.querySelector("#cancelar")

//Accion del boton guardar
btnGuardar.addEventListener("click", () => {
    if (precioTotal.textContent) {
        dialog.showModal()
        let pagoTotal = document.querySelector(".pago_total")
        pagoTotal.innerHTML = `S/. ${precioTotal.textContent}`;
    } else {
        alert("No se Agregó ningun producto")
    }
})


let pagoMonto = document.querySelector("#pago-monto")
let vuelto = document.querySelector(".vuelto")
//  capturando los billetes
let b200 = document.querySelector("#b200")
let b100 = document.querySelector(".btn-100")
let b50 = document.querySelector(".btn-50")
let b20 = document.querySelector(".btn-20")
let b10 = document.querySelector(".btn-10")
let btnIgual = document.querySelector(".btn-igual")
b200.addEventListener('click', function () {
    let pago = 200
    pagoMonto.value =`S/. ${pago}`
    vuelto.innerHTML = `S/. ${pago - precioTotal.textContent}`
})
b100.addEventListener('click', function () {
    let pago = 100
    pagoMonto.value=`S/. ${pago}`
    vuelto.innerHTML = `S/. ${pago - precioTotal.textContent}`
})
b50.addEventListener('click', function () {
    let pago = 50
    pagoMonto.value=`S/. ${pago}`
    vuelto.innerHTML = `S/. ${pago - precioTotal.textContent}`
})
b20.addEventListener('click', function () {
    let pago = 20
    pagoMonto.value = `S/. ${pago}`
    vuelto.innerHTML = `S/. ${pago - precioTotal.textContent}`
})
b10.addEventListener('click', function () {
    let pago = 10
    pagoMonto.value = `S/. ${pago}`
    vuelto.innerHTML = `S/. ${pago - precioTotal.textContent}`
})
btnIgual.addEventListener('click', function () {
    let pago = precioTotal.textContent
    pagoMonto.value = `S/. ${pago}`
    vuelto.innerHTML = `S/. ${pago - precioTotal.textContent}`
})

pagoMonto.addEventListener("input", function () {
    vuelto.innerHTML = pagoMonto.value - precioTotal.textContent
})
document.getElementById("confirmar").addEventListener("click", function () {

    let subTotal = inputPrecio.value * inputCantidad.value
    let data = new Date()
    let mostrarFecha = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    let mostrarHora = `${data.getHours()}:${data.getMinutes()}`
    let id = data - new Date(2020, 02,20)

    let datosVenta = {
        id: id,
        vendedor: capturarVendedor,
        tipo_documento: capturarDocumento,
        serie: serie.value,
        numero : numeral.value,
        cliente: {
            dni: dni.value,
            nombre: nombres.value,
            apellido: apellidos.value,
            direccion: direccion.value
        },
        productos: [
            {
                codigo: codigo.value,
                producto: producto.value,
                cantidad: inputCantidad.value,
                precio: inputPrecio.value,
                subTotal: subTotal
            }
        ],
        precioTotal: precioTotal.textContent,
        fecha: mostrarFecha,
        hora: mostrarHora
    }

    let venta = new Venta(datosVenta.id, datosVenta.vendedor, datosVenta.tipo_documento,
        datosVenta.serie, datosVenta.numero, datosVenta.cliente, datosVenta.productos, datosVenta.precioTotal, datosVenta.fecha, datosVenta.hora)

    if (localStorage.getItem("ventas")) {
        ventas = JSON.parse(localStorage.getItem("ventas"));
    }
    ventas.push(venta)

    // let total = 0;
    // productos.forEach(element => {
    //     total += parseFloat(element.subTotal);
    // });
    // datosVenta.precioTotal = total;
    localStorage.setItem("ventas", JSON.stringify(ventas))
    console.log(ventas)

    alert("Se guardo la venta")

})

btnConfirmar.addEventListener("click", () => {
    dialog.close()
    location.reload()
})
btnCancelar.addEventListener("click", function(){
    dialog.close()
})

let btnPrimary = document.querySelector(".btn-primary")

btnPrimary.addEventListener("click", function () {

    if (localStorage.getItem("ventas")) {
        window.location = "listaVentas.html"
    }
    else {
        alert("no hay ventas registradas")
    }

})


function inicioFacturador() {
    if(localStorage.getItem("ventas")){
        //==> aqui para hablitar el boton de edicion de documents
        ventas = JSON.parse(localStorage.getItem("ventas"))
        console.log(ventas)
        //cuantos tipo boleta y cuantos tipo factura
        let cantidadBoletas = ventas.filter(e=> e.tipoDocumento==="boleta")
        let cantidadFacturas = ventas.filter(e=> e.tipoDocumento=='factura')
        serie.value = "B001"
        numeral.value = (cantidadBoletas.length + 1).toString().padStart(6,"0")
    
        documento.addEventListener("change", function(){
            if(documento.value ==="factura"){
                
                serie.value="F001"
                numeral.value= (cantidadFacturas.length + 1).toString().padStart(6,"0")
            } if(documento.value === "boleta"){
                serie.value = "B001"
                numeral.value = (cantidadBoletas.length +1).toString().padStart(6,"0")
                
            }
        })

    }else {
        console.log(ventas)
        serie.value = "B001"
        numeral.value = (ventas.length +1).toString().padStart(6,"0")
        documento.addEventListener("change", function () {
            if(documento.value ==="factura"){
                serie.value="F001"
                numeral.value= (ventas.length +1).toString().padStart(6,"0")
            } if(documento.value === "boleta"){
                serie.value = "B001"
                numeral.value = (ventas.length +1).toString().padStart(6,"0")
                
            }
        })
    }
}

//MOstrar CLientes
function verClientes () {
    dialogClientes.showModal()
    let table = `
        <table class="table table-hover table-dark">
            <thead>
                <tr>
                    <th>Nro</th>
                    <th>DNI</th>
                    <th>Nombre(s)</th>
                    <th>Apellidos</th>
                    <th>Direccion</th>
                </tr>
            </thead>
            <tbody>
                `
            clientes.forEach((e, index)=>{
                    table += ` 
                        <tr class="datosCliente" id="selectCliente${index+1}">
                            <td>${index+1}</td>
                            <td>${e.dni}</td>
                            <td>${e.name}</td>
                            <td>${e.lastname}</td>
                            <td>${e.direccion}</td>
                        </tr>
                    `
                })
            table +=
                `
            </tbody>
        </table>
    `
    mostrarClientes.innerHTML = table
    let datosClientes = document.querySelectorAll(".datosCliente")
    datosClientes.forEach((e,i)=>{
        e.addEventListener("dblclick", function (){
            dni.value= clientes[i].dni
            nombres.value= clientes[i].name
            apellidos.value= clientes[i].lastname
            direccion.value= clientes[i].direccion
            dialogClientes.close()
        })
    })

}
salirClientes.addEventListener("click", function () {
    dialogClientes.close()
})

const filtrar = () => {
    
    resultadoBusqueda.innerHTML= ''
    if(productoBuscar.value){
        const texto = productoBuscar.value.toLowerCase();
        for(let producto of catalogo) {
            let nombre = producto.nombre.toLowerCase();
            let codigo = producto.id
            if(nombre.indexOf(texto) !== -1) {
                resultadoBusqueda.innerHTML += `
                <li class="prod-encontrado" onClick="agregarProducto(${producto.id})" id="${producto.id}">${producto.id} | ${producto.nombre} | ${producto.cantidad} | ${producto.precio}</li>
                `
            }
            if(codigo.indexOf(texto) !== -1) {
                resultadoBusqueda.innerHTML += `
                <li class="prod-encontrado" onClick="agregarProducto(${producto.id})" id="${producto.id}">${producto.id} | ${producto.nombre} | ${producto.cantidad} | ${producto.precio}</li>                
                `
            }
        }

    }else {
        // alert("Escriba el producto")
    }
}
function buscarProducto (){
    filtrar()
}
iconSearch.addEventListener('click', filtrar)
productoBuscar.addEventListener('keyup', filtrar)
productoBuscar.addEventListener("onselect", buscarProducto)

function agregarProducto(a){
    resultadoBusqueda.innerHTML=''
    let miProducto = catalogo.filter(e=>e.id==a)
   
    codigo.value = miProducto[0].id
    producto.value = miProducto[0].nombre
    inputPrecio.value = miProducto[0].precio
}

//Ver Catalogo
function verCatalogo () {
    dialogCatalogo.showModal()
    let table = `
    <table class="table table-hover table-dark">
        <thead>
            <tr>
                <th>Nro.</th>
                <th>ID</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio s/.</th>
            </tr>
        </thead>
        <tbody>
            `
        catalogo.forEach((e, index)=>{
                table += ` 
                    <tr class="datosProducto" id="selectProducto${index+1}">
                        <td>${index+1}</td>
                        <td>${e.id}</td>
                        <td>${e.nombre}</td>
                        <td>${e.cantidad}</td>
                        <td>${e.precio}</td>
                    </tr>
                `
            })
        table +=
            `
        </tbody>
    </table>
`
    mostrarCatalogo.innerHTML = table

}
salirCatalogo.addEventListener('click', function(){
    dialogCatalogo.close()
})