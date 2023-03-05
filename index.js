const inpname = document.getElementById('inpname');
const inpimg = document.getElementById('inpimg');
const inpcomment = document.getElementById('inpcomment');
const form = document.querySelector('form');
const avatarimg = document.querySelector('.avatarimg');
const username = document.querySelector('.username');
const comment = document.querySelector('.comment');


form.addEventListener("submit", (event) => {
event.preventDefault();
avatarimg.src;
avatarimg.src = inpimg.value;
username.innerHTML = inpname.value;
comment.innerHTML = inpcomment.value;
});


