document.addEventListener("DOMContentLoaded", () => {
    const popupButton = document.querySelector("button[aria-label='Open Form']");
  
    const targetNode = document.querySelector("[data-exit-intent]");
  
    const config = { attributes: true };
  
    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "attributes") {
          if (mutation.attributeName === "data-exit-intent") {
            const exitIntentValue = targetNode.getAttribute("data-exit-intent");
            if (exitIntentValue === "true") {
              alert("Yessss");
            } else {
              alert("Nooooo");
            }
          }
        }
      }
    };
  
    const observer = new MutationObserver(callback);
  
    observer.observe(targetNode, config);
  });
  