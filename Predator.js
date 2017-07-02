var Predator = (function () {
  // Predator should have two private arrays to store carnivores and herbivores.
  let carnivores = [];
  let herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.

      });
    }
  }
})();