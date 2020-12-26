(function () {
  const posts_container = document.getElementById("posts");
  let post_count = 0;
  let loading = false;

  function loadPosts() {
    if (loading === true) return;
    loading = true;

    const preloader = document.createElement("div");
    preloader.setAttribute("class", "preloader");
    posts_container.appendChild(preloader);
    let post_limit = post_count + 20;
    console.log(post_count);
    let posts = [];
    for (let i = post_count; i <= post_limit; i++) {
      let post = document.createElement("div");
      post.setAttribute("class", "post");
      post.appendChild(document.createTextNode(`POST ${i + 1}`));
      posts = [...posts, post];
    }
    post_count = post_limit + 1;
    setTimeout(() => {
      posts_container.removeChild(preloader);
      for (let p of posts) {
        posts_container.appendChild(p);
      }
      loading = false;
    }, 2000);
  }

  window.addEventListener("scroll", (e) => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 20
    ) {
      loadPosts();
    }
  });
  loadPosts();
})();
