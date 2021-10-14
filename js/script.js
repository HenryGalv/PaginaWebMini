/*Menu*/
((d) => {
  const $btnMenu = d.getElementById("btn-menu"),
    $listMenu = d.getElementById("list-menu"),
    $logo = d.querySelector(".logo"),
    $logoTexto = d.querySelector(".logo-texto"),
    $logoImg = d.querySelector(".logo-img"),
    $body = d.getElementById("body");
  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.classList.toggle("active");
    $listMenu.classList.toggle("is-active");

  });
  d.addEventListener("click", (e) => {
    if (e.target.id !== 'btn-menu' && e.target.id !== 'menu') {
      $btnMenu.classList.remove("active");
      $listMenu.classList.remove("is-active");
    }
  });
  // d.onmousemove = function (e) {
  //   var x = -(e.clientX / 10);
  //   var y = -(e.clientY / 10);
  //   $body.style.backgroundPosition = x + 'px ' + y + 'px';
  // };
})
  (document);
