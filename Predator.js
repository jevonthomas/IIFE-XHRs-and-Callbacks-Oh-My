let Predator = (function () {
  // Predator should have two private arrays to store carnivores and herbivores.
  let carnivores = [];
  let herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText).carnivore;
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.
        callbackToInvoke(carnivores);
      });
      //Tell which HTTP verb to use: GET, POST, PUT, DELETE, PATCH
      loader.open("GET", "carnivore.json");
      //Get request
      loader.send();
    },
    loadHerbivores: function (callbackFunction) {
      let loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText).herbivore;
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.
        callbackFunction(herbivores);
      });
      //Tell which HTTP verb to use: GET, POST, PUT, DELETE, PATCH
      loader.open("GET", "herbivore.json");
      //Get request
      loader.send();
    }
  };
})();