var domReady = function (callback) {
  document.readyState === "interactive" || document.readyState === "complete"
    ? callback()
    : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function () {
  var loader = new PxLoader();

  loader.addImage("assets/logo.png"),
    loader.addImage("assets/f0-title-1.png"),
    loader.addImage("assets/f1-title-1.png"),
    loader.addImage("assets/f2-title-1.png"),
    loader.addImage("assets/hero.png"),
    loader.addCompletionListener(function () {
      addClass("grid", "start");
      addClass("f0", "animate");
    });

  setTimeout(function () {
    addClass("frame-0", "animate");
    addClass("f1", "animate");
  }, 2200);

  setTimeout(function () {
    removeClass("f1", "animate");
  }, 5000);

  setTimeout(function () {
    addClass("f2", "animate");
  }, 5300);
  
  setTimeout(function () {
    addClass("frame-2", "animate");
    addClass("f3", "animate");
  }, 7000);

  loader.start();
});

function addClass(elementSelector, className) {
  var el = document.getElementsByClassName(elementSelector),
    arrLength = el.length;
  for (var i = 0; i < arrLength; i++) {
    if (el[i].classList) el[i].classList.add(className);
    else el[i].className += " " + className;
  }
}

function removeClass(elementSelector, className) {
  var el = document.getElementsByClassName(elementSelector),
    arrLength = el.length;
  for (var i = 0; i < arrLength; i++) {
    if (el[i].classList) el[i].classList.remove(className);
    else
      el[i].className = el[i].className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
  }
}
