let nombreProducto = prompt("Ingrese el nombre del producto:");

let stockProducto = 50;
let ventasTotales = 0;

function mostrarInventario() {
  console.log(`Producto: ${nombreProducto}, Stock: ${stockProducto} unidades, Ventas: ${ventasTotales} unidades.`);
}

mostrarInventario();

const registrarVenta = function(cantidadVendida) {
  if (cantidadVendida <= stockProducto) {
    stockProducto -= cantidadVendida;
    ventasTotales += cantidadVendida;
    console.log(`Venta realizada: ${cantidadVendida} unidades de ${nombreProducto}.`);
  } else {
    console.log("Stock insuficiente para esta venta.");
  }
};

mostrarInventario();

const reponerStock = (cantidadRepuesta) => {
  stockProducto += cantidadRepuesta;
  console.log(`Se añadieron ${cantidadRepuesta} unidades. Nuevo stock: ${stockProducto}.`);
};


registrarVenta(10);   
registrarVenta(45);  
reponerStock(20);     
registrarVenta(5);    


mostrarInventario();


