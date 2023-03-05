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

chatarea.insertAdjacentHTML("beforeend", `<img class="avatarimg" src="${inpimg.value}" alt=""><div class="username">${inpname.value}</div><div class="comment">${inpcomment.value}</div>`);

});


