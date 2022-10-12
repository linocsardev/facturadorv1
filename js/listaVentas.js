
let ventas = []
function iniciar() {
    if (localStorage.getItem("ventas")) {
        ventas = JSON.parse(localStorage.getItem("ventas"))
        mostrar()
    }
}
function mostrar() {
    let mostrar = document.querySelector(".mostrar")
    let listaVentas = JSON.parse(window.localStorage.getItem("ventas"))
    console.table(listaVentas)
    let table = `
    <table class="table table-hover">
        <thead>
            <tr class= "table-success">
                <th>#</th>
                <th>Vendedor</th>
                <th>T. Documento</th>
                <th>Numero</th>
                <th>Fecha</th>
                <th>H. Registro</th>
                <th>Total S/.</th>
                <th>Cliente</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
        `
    listaVentas.forEach((element, index) => {
        table += `
                <tr class="table-primary _datos" id="detalle_${index+1}" >
                    <td class="col">${index + 1}</td>
                    <td class="col">${element.vendedor}</td>
                    <td class="col">${element.tipoDocumento}</td>
                    <td class="col">${element.serie}-${element.numero}</td>
                    <td class="col">${element.fecha}</td>
                    <td class="col">${element.hora}</td>
                    <td class="col">${parseInt(element.precioTotal).toFixed(2)}</td>
                    <td class="col">${element.cliente.nombre} ${element.cliente.apellido}</td>
                    <td class="col"><button class="btn btn-primary" onClick="editarVenta()">Editar</button></td>
                    <td class="col"><button class="btn btn-warning" onClick="eliminarVenta(${index})">Eliminar</button></td>
                </tr>
            `
    });

    table += `
        </tbody>
    </table>
    `
    mostrar.innerHTML = table

    let dialog = document.querySelector(".mostrar_detalle")
    let detalles = document.querySelectorAll("._datos")
    detalles.forEach((detalle, index) => {
        detalle.addEventListener("dblclick", function () {
            dialog.showModal()
            console.log(listaVentas[index])
            let vendedor = document.querySelector(".vendedor")
            let cajero = document.querySelector(".cajero")
            let coSerie = document.querySelector(".co_serie")
            let coNumero = document.querySelector(".co_numero")
            let nombreCliente = document.querySelector(".nombre_cliente")
            let apellidosCliente = document.querySelector(".apellido_cliente")
            let documentoTipo = document.querySelector(".documento_tipo")
            let dniCliente = document.querySelector(".dni_cliente")
            let direccionCliente = document.querySelector(".direccion_cliente")
            vendedor.innerHTML = listaVentas[index].vendedor.toUpperCase()
            cajero.innerHTML = listaVentas[index].vendedor.toUpperCase()
            documentoTipo.innerHTML=(listaVentas[index].tipoDocumento + " Electrónica").toUpperCase()
            nombreCliente.innerHTML = listaVentas[index].cliente.nombre
            apellidosCliente.innerHTML = ` ${listaVentas[index].cliente.apellido}`
            dniCliente.innerHTML = listaVentas[index].cliente.dni
            direccionCliente.innerHTML = listaVentas[index].cliente.direccion
            //detalle de Correlativo
            coSerie.textContent = listaVentas[index].serie
            coNumero.textContent = listaVentas[index].numero

            //fecha de emision
            let fecha = listaVentas[index].fecha
            let fecha_arreglo = fecha.split("/")
            let dia = document.querySelector('.dia')
            let mes = document.querySelector('.mes')
            let anio = document.querySelector('.anio')
            dia.innerHTML = fecha_arreglo[0]
            mes.innerHTML = fecha_arreglo[1]
            anio.innerHTML = fecha_arreglo[2]
            
            //mostrar detalle de venta
            let item = document.querySelector(".item")
            let cantidad = document.querySelector(".cantidad")
            let unidad = document.querySelector(".unidad")
            let descripcion = document.querySelector(".descripcion")
            let precioUnitario = document.querySelector(".precio_unitario")
            let descuento = document.querySelector(".descuento")
            let subTotal = document.querySelector(".subtotal")

            let cantidadItem = listaVentas[index].productos.length
            for(let i=0; i<cantidadItem; i++){
                item.innerHTML = i+1;
                cantidad.innerHTML = listaVentas[index].productos[i].cantidad
                unidad.innerHTML = "UND"
                descripcion.innerHTML = listaVentas[index].productos[i].producto
                let precioUnitarioFormatted = parseInt(listaVentas[index].productos[i].precio)
                precioUnitario.innerHTML = precioUnitarioFormatted.toFixed(2)
                descuento.innerHTML = "0.000"
                let subTotalFormatted =  parseInt(listaVentas[index].productos[i].subTotal)
                subTotal.innerHTML = subTotalFormatted.toFixed(2)
            }
            //mostrar Precio Final
            let precioFinal = document.querySelector(".preciofinal_numero")
            let precioFinalFormated= parseInt(listaVentas[index].precioTotal)
            precioFinal.innerHTML = precioFinalFormated.toFixed(2)
            
            
        })
    })
    
}
function vender() {
    window.location = "venta.html"
}

function eliminarVenta(index) {
    let mensaje = confirm(`¿Estás seguro de eliminar ésta venta ${ventas[index].serie}-${ventas[index].numero} ?`)
    if(mensaje){
        ventas.splice(index,1)
        localStorage.setItem("ventas", JSON.stringify(ventas))
        mostrar()
        alert("La venta a sido eliminada!")
    }   
}
function editarVenta () {
    alert("En desarrollo aun :(")
}

