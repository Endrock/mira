document.addEventListener("DOMContentLoaded", function () {
  const pdmVariantItems = document.querySelectorAll(".pdm-variant__item input");

  pdmVariantItems.forEach(function (pdmVariantItem) {
    pdmVariantItem.addEventListener("change", function () {
      // add selected class to clicked element
      pdmVariantItems.forEach(function (variantItem) {
        variantItem.parentNode.classList.remove("selected");
      });
      pdmVariantItem.parentNode.classList.add("selected");

      // set the value to the default select element and trigger the change
      console.log(pdmVariantItem, pdmVariantItem.value);
      document.querySelector("variant-selects select").value =
        pdmVariantItem.value;

      document.querySelector("variant-selects").onVariantChange();
    });
  });
});
