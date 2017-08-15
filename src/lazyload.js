!(function(a, e) {

  function f() {
    var d = 0;
    if (e.body && e.body.offsetWidth) {
      d = e.body.offsetHeight;
    }
    if (a.innerWidth && a.innerHeight) {
      d = a.innerHeight;
    }
    return d;
  }

  function b(g) {
    var d = ot = 0;
    if (g.offsetParent) {
      do {
        d += g.offsetLeft;
        ot += g.offsetTop;
      } while (g = g.offsetParent)
    }
    return ot;
  }

  // Image is loaded from data-original attribute
  function doload(image) {
    return new Promise(function(resolve) {
      image.src = image.getAttribute("data-original");
      resolve(image);
    });
  }

  // data-original attribute is deleted to avoid multiple loadings
  function unload(image) {
    return new Promise(function(resolve) {
      image.removeAttribute("data-original");
      resolve(image);
    });
  }

  // Main function that checks if images are on the visible window
  function c() {
    var l = e.querySelectorAll("[data-original]");
    var j = a.pageYOffset || e.documentElement.scrollTop || e.body.scrollTop;
    var d = f();
    for (var k = 0; k < l.length; k++) {
      var h = l[k];
      var g = b(h) - 200;
      if (g < (d + j)) {
        doload(h)
          .then(function(response) {
            unload(response);
          })
      }
    }
  }

  // We attach events to loading and scrolling
  a.addEventListener("DOMContentLoaded", c, false);
  a.addEventListener("scroll", c, false);

})(window, document);
