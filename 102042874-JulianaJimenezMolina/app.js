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


function iniciarGestion() {
  while (true) {
    let opcion = prompt(
      "=== Menú de Inventario ===\n" +
      "1 - Registrar Venta\n" +
      "2 - Reponer Stock\n" +
      "3 - Simular Día de Ventas\n" +
      "4 - Ver Diagnóstico de Inventario\n" +
      "5 - Mostrar Inventario Actual\n" +
      "6 - Cerrar programa\n" +
      "Seleccione una opción:"
    );

    switch (opcion) {
      case "1": // Venta
        let cantidadVenta = parseInt(prompt("Ingrese la cantidad a vender:"));
        registrarVenta(cantidadVenta);
        break;

      case "2": // Reposición
        let cantidadReposicion = parseInt(prompt("Ingrese la cantidad a reponer:"));
        reponerStock(cantidadReposicion);
        break;

      case "3": // Simulación
        simularDiaDeVentas();
        break;

      case "4": // Diagnóstico
        diagnosticoInventario();
        break;

      case "5": // Inventario
        mostrarInventario();
        break;

      case "6": // Salir
        console.log("Programa finalizado. ¡Hasta luego!");
        return; // sale del while y termina la función

      default: // Opción inválida
        console.log("Opción no válida. Intente nuevamente.");
    }
  }
}


iniciarGestion();