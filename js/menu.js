(function init(){
    let menu = document.getElementById('menu');
    let drawer = document.querySelector('nav');

    menu.addEventListener('click', function(e) {
        drawer.classList.toggle('open');
        e.stopPropagation();
      });
})();