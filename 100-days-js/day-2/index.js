(function () {
  function initCarousel() {
    let carousel_items = document.querySelectorAll(".image-carousel>div");
    // console.log(carousel_items);
    let current_index = 0;
    setInterval(() => {
      for (item of carousel_items) {
        item.classList.remove("active");
      }
      carousel_items[current_index++].classList.add("active");
      current_index = current_index % carousel_items.length;
    }, 4000);
    // for(const item of carousel_items){

    // }
  }

  initCarousel();
})();
