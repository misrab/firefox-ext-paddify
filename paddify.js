browser.browserAction.onClicked.addListener((tab) => {
  
  //console.log("hi");
  browser.tabs.insertCSS({code: "body { padding: 5% 20%; }"}); 
  //document.body.style.padding = "5% 20%";

});

/* (function() {
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  


})();
 */