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
((d) => {
  const $form = d.querySelector(".contact-form"),
    $response = d.querySelector("modal-form");
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/henry100w@hotmail.com", {
      method: "POST",
      body: new FormData(e.target)
    }).then(
      res => (res.ok ? res.json() : Promise.reject(res))
    ).then(json => {
      console.log(json);
      location.hash = "#gracias"
      $form.reset();
    }).catch(err => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
      $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
    }).finally(() => {
      setTimeout(() => {
        location.hash = "#cerrar";
      }, 2000);
    });
  })
})(document);
