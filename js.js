const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

let fahrenheit;
let celsius;

const changeCF = () => {
	if (one.textContent == "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
		result.textContent = ""
	} else {
		one.textContent = "°C";
		two.textContent = "°F";
		result.textContent = ""
	}
};

const convertCF = () => {
	fahrenheit = converter.value * 1.8 + 32;
	result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(2)}°F`;
	converter.value = "";
};
const convertFC = () => {
	celsius = (converter.value - 32) / 1.8;
	result.textContent = `${converter.value}°F to ${celsius.toFixed(2)}°C`;
	converter.value = "";
};

const conversion = () => {
	if (converter.value !== "") {
		if (one.textContent == "°C") {
			convertCF();
		} else {
			convertFC();
		}
	} else {
		result.textContent = "Podaj wartość";
	}
};

const reset = () => {
	converter.value=''
	result.textContent=''
	result.textContent=''
}

changeBtn.addEventListener("click", changeCF);
convBtn.addEventListener("click", conversion);
resetBtn.addEventListener("click", reset) 