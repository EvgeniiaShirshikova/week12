const inpname = document.getElementById('inpname');
const inpimg = document.getElementById('inpimg');
const inpcomment = document.getElementById('inpcomment');
const form = document.querySelector('form');
/* const avatarimg = document.querySelector('.avatarimg');
const username = document.querySelector('.username');
const comment = document.querySelector('.comment'); */
const chatarea = document.querySelector('.chatarea');



form.addEventListener("submit", (event) => {
event.preventDefault();
let comment = inpcomment.value;
let checkedComment = comment.replace(/viagra|xxx/gi, '***');

chatarea.insertAdjacentHTML("beforeend", `<img class="avatarimg" src="${inpimg.value}" alt=""><div class="username">${inpname.value}</div><div class="comment">${checkedComment}</div>`);

});