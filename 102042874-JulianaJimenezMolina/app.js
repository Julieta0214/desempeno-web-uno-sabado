let nombreProducto = prompt("Ingrese el nombre del producto:");

let stockProducto = 50;
let ventasTotales = 0;

function mostrarInventario() {
  console.log(`Producto: ${nombreProducto}, Stock: ${stockProducto} unidades, Ventas: ${ventasTotales} unidades.`);
}


const registrarVenta = function(cantidadVendida) {
  if (cantidadVendida <= stockProducto) {
    stockProducto -= cantidadVendida;
    ventasTotales += cantidadVendida;
    console.log(`Venta realizada: ${cantidadVendida} unidades de ${nombreProducto}.`);
  } else {
    console.log("Stock insuficiente para esta venta.");
  }
};


const reponerStock = (cantidadRepuesta) => {
  stockProducto += cantidadRepuesta;
  console.log(`Se añadieron ${cantidadRepuesta} unidades. Nuevo stock: ${stockProducto}.`);
};


registrarVenta(10);   
registrarVenta(45);  
reponerStock(20);     
registrarVenta(5);    


mostrarInventario();


const simularDiaDeVentas = () => {
  for (let i = 1; i <= 5; i++) {
    console.log(`Cliente ${i}:`);
    registrarVenta(8);
  }
};

function diagnosticoInventario() {
  
  if (stockProducto >= 30) {
    console.log("Nivel de stock óptimo.");
  } else if (stockProducto >= 10) {
    console.log("Stock moderado, considera reponer pronto.");
  } else {
    console.log("¡Alerta! Bajo stock, reposición urgente.");
  }

 
  switch (true) {
    case (ventasTotales >= 40):
      console.log("Producto estrella, alta demanda.");
      break;
    case (ventasTotales >= 20):
      console.log("Ventas moderadas.");
      break;
    default:
      console.log("Baja rotación del producto.");
  }
}

simularDiaDeVentas();
mostrarInventario();
diagnosticoInventario();

