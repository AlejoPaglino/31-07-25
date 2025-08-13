//1

let edades = [15, 16, 17, 15, 18, 16, 17, 15, 18, 16, 17];
let sumaEdades = 0;
for (let i = 0; i < edades.length; i++) {
    sumaEdades +=edades[i]
   let promedio = sumaEdades / edades.length;
   console.log("El promedio es", promedio) 
}



//2
let i = 0

while (i <= 50) {
    i[i] * 5
        console.log(i[i] * 5);     
    i++;  
}

//3

let colores = ['rojo', 'verde', 'azul', 'amarillo', 'violeta', 'naranja'];
for (let i = 0; i < colores.length; i++) {
   if (colores[i] === "violeta")
    alert('El color se encuentra en el listado en la posición 4')
}
    

//4

let stock = [4, 7, 2, 9, 3];
for (let i = 0; i < stock.length; i++) {
    stock[i] += 5
    console.log(stock[i])
}