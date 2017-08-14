!(function(a, e) {
 function f() {
  var d = 0;
  if (e.body && e.body.offsetWidth) {
   d = e.body.offsetHeight
  }
  if (a.innerWidth && a.innerHeight) {
   d = a.innerHeight
  }
  return d
 }

 function b(g) {
  var d = ot = 0;
  if (g.offsetParent) {
   do {
    d += g.offsetLeft;
    ot += g.offsetTop
   } while (g = g.offsetParent)
  }
  return {
   left: d,
   top: ot
  }
 }

 function doload(image){
   return new Promise(function(resolve) {
     image.src = image.getAttribute("data-original");
     resolve(image);
   });
 }

 function dounload(image){
   return new Promise(function(resolve) {
     image.removeAttribute("data-original");
     resolve(image);
   });
 }

 function c() {
  var l = e.querySelectorAll("[data-original]");
  var j = a.pageYOffset || e.documentElement.scrollTop || e.body.scrollTop;
  var d = f();
  for (var k = 0; k < l.length; k++) {
   var h = l[k];
   var g = b(h).top - 200;
   if (g < (d + j)) {
    doload(h)
    .then(function(response){dounload(response)})
   }
  }
 }
  a.addEventListener("DOMContentLoaded", c, false);
  a.addEventListener("scroll", c, false)
})(window, document);
