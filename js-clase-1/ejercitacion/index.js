/*******************************************************************************

Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: "Laptop""), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

Ejemplo:
calculatePrice("play", 30000)

output : "el costo de envio de una play es de 500 pesos y el precio total seria de 30500 pesos"
*******************************************************************************/
//Tu código acá
function calculatePrice(prod, price){

let ship = 0;

if(price < 1){
	return "Error";

}else if(!prod || !price){
	return "ingresar ambos parámetros";
}else if(typeof prod != "string"){
	return "ingresar un nombre válido"
}else if(price > 4000){
	ship = 700;
}else if(price > 2000 && price < 4001){
	ship = 500;
}else {
	ship = 300;
}

return `El producto ${prod} cuesta ${price}. Su costo de envío es de ${ship}. Por lo tanto, el precio final es de ${price + ship}`

}

module.exports = {
	calculatePrice,
};