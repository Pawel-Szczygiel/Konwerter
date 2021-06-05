const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

let farenheit = 0;
let celsius = 0;

const swap = () => {
  
    if( !(celsius === 0 && farenheit === 0) ){
        if (one.innerText === "°C") {
            one.innerText = "°F";
            two.innerText = "°C";
            result.innerText = `${farenheit}°F to ${celsius.toFixed(1)}°C`; 

        } else {
            one.innerHTML = "°C";
            two.innerText = "°F"; 
            result.innerText = `${celsius.toFixed(1)}°C to ${farenheit}°F`;  
        }
    }
};

const reset = () =>  {
    converter.value = '';
    result.innerText = '';
    celsius = 0;
    farenheit = 0;
}; 

const convert = () => {
        
        if (!isNaN(converter.value) && converter.value !== ''){

            if (one.innerText === '°C') {

            celsius = parseInt(converter.value);
            farenheit = celsius * 1.8 + 32;
            result.innerText = `${celsius}°C to ${farenheit}°F`;      
            converter.value = '';

            } else {

            farenheit = parseInt(converter.value);
            celsius = (farenheit -32) / 1.8;
            result.innerText = `${farenheit}°F to ${celsius.toFixed(1)}°C`;      
            converter.value = '';
        }
        } else {
            result.innerText = '';  
        }
};

changeBtn.addEventListener("click", swap);
resetBtn.addEventListener("click", reset);
convBtn.addEventListener('click', convert);
