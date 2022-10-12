let ventas = [
    {
        id: id,
        vendedor : 'cajero1',
        tipo_documento : "factura",
        cliente : [ {
            dni : "34567899",
            nombre: "Erica",
            apellido: "Flores"
        }],
        productos : [
            {
                codigo : "RH01",
                producto: "Desarmador",
                serie: "98773",
                precio: 45,
                cantidad: 3,
                total : this.precio * this.cantidad
            }
        ],
        PrecioTotal : 135,
        fecha : new Date()
    }
]
console.lo