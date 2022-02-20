const boton = document.querySelector("#btnCalcular");
const montoCancelar = document.querySelector("#montoCancelar");
const chkExterior = document.querySelector("#chkExterior");
const chkMotor = document.querySelector("#chkMotor");
const txtNombre = document.querySelector("#txtNombre");
const txtApellido = document.querySelector("#txtApellido");

boton.addEventListener("click", function (evento) {
    let pago1 = 0;
    let pago2 = 0;
    let subTotal = 0;
    let iva=0;
    let total=0
    if(chkExterior.checked ||chkMotor.checked)
    {
        if (chkExterior.checked) {
           
            pago1 = 7000;
    
        }
        if (chkMotor.checked) {
            
            pago2 = 5000;
        }
        subTotal = pago1 + pago2;
        iva=subTotal*19/100;
        total=subTotal+iva;
        alert("Nombre "+txtNombre.value+" "+txtApellido.value+"\nTotal sin iva $ "+subTotal+"\nIva $"+iva+"\nTotal a pagar $ "+total);
        //montoCancelar.value = total;
    
    }
    else
    {
        alert("debe seleecionar el servicio");
        //montoCancelar.value = "debe seleccionar un servicio";
    }
    
});