function showCarnivores (carnivores) {
	let domPosition = document.getElementById("carn-container");
	for (let i = 0; i < carnivores.length; i++) {
		domPosition.innerHTML += `<h1>${carnivores[i]}</h1>`;
	}
}

function showHerbivores (herbivores) {
	let domPosition = document.getElementById("herb-container");
	for (let i = 0; i < herbivores.length; i++) {
		domPosition.innerHTML += `<h1>${herbivores[i]}</h1>`;
	}
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);