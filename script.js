let firstlike = 100;
let firstdislike = 10;

let like = document.getElementById('like');
let deslike = document.getElementById('deslike');
let comment = document.getElementById('comment');
let submit = document.getElementById('submit');
let clear = document.getElementById('clear');
let commentlist = document.getElementById('commlist');

like.innerText = "👍 100"
deslike.innerText = "👎 10"
like.addEventListener('click', () => {
    firstlike++;
    like.innerText = "👍 "+firstlike;
    setCookies();
});

deslike.addEventListener('click', () => {
    firstdislike++;
    deslike.innerText = "👎 "+firstdislike;
    setCookies();
});

submit.addEventListener('click', () => {
    let p = document.createElement('p');
    p.innerText = comment.value;
    commentlist.appendChild(p);
    comment.value = "";
    setCookies();

});

clear.addEventListener('click', () => {
   comment.value = "";
   document.cookie = "voted=true; path=/; expires= "+new Date(Date.now() - 1).toUTCString();
});

function setCookies(){
    let expires = new Date(Date.now() + 1*60*1000);
    document.cookie = "voted=true; path=/; expires= "+expires.toUTCString();
}

window.onload = () => {
    if(document.cookie && document.cookie.indexOf("voted")>-1){
        like.disabled = true;
        deslike.disabled = true;
        submit.disabled = true;
    }
}