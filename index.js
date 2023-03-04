const inpname = document.getElementById('inpname');
const inpimg = document.getElementById('inpimg');
const inpcomment = document.getElementById('inpcomment');
const button = document.getElementById('button');
const avatarimg = document.querySelector('.avatarimg');
const username = document.querySelector('.username');
const comment = document.querySelector('.comment');

button.addEventListener("click", function() {
    avatarimg.src;
avatarimg.src = inpimg.value;
    username.textContent = inpname.value;
comment.textContent = inpcomment.value;
});