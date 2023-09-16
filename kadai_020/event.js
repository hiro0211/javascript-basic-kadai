const btn = document.getElementById("btn");

function fn() {btn.addEventListener("click", () => {
  text.textContent = "ボタンをクリックしました";
})};

setTimeout(function(){fn()}, 2000);
