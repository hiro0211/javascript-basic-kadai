function textContent() {
  setTimeout( function(){
    const text = document.getElementById("text");
    text.textContent="ボタンをクリックしました"
  },2000)};

const btn = document.getElementById("btn");
btn.addEventListener("click",textContent);
