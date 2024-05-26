class tamperature{
    #Celsius
    #Fahrenheit
    constructor(){
        this.#Celsius = 0;
        this.#Fahrenheit = 32;
    }
    get getCelsius(){
        return this.#Celsius
    }
    get getFahrenheit(){
        return this.#Fahrenheit
    }
    
    set setCelsius(value){
        if (typeof value ===  "number") {
            this.#Celsius = value;
            this.#Fahrenheit = value * (9/5) + 32
        } else {
            console.log(`Please input valide tamprature Number.`);
        }
    }
    set setFahrenheit(value){
        if (typeof value ===  "number") {
            this.#Celsius = (value - 32) * (5/9)
            this.#Fahrenheit = value; 
        } else {
            console.log(`Please input valide tamprature Number.`);
        }
    }
}



const temprature = new tamperature();

console.log(`Initial celsius: ${temprature.getCelsius}°C`);
console.log(`Initial celsius: ${temprature.getFahrenheit}°F`);


temprature.setCelsius = 25;
console.log(`Celsius:${temprature.getCelsius}°C`);
console.log(`Fahrenheit:${temprature.getFahrenheit}°F`);



temprature.setFahrenheit = 68;
console.log(`Celsius:${temprature.getCelsius}°C`);
console.log(`Fahrenheit:${temprature.getFahrenheit}°F`);


