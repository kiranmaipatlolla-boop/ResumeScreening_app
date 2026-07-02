document.getElementById("uploadForm").addEventListener("submit", function(event){

event.preventDefault();

let progress = 0;

const bar = document.getElementById("progressBar");

const interval = setInterval(function(){

progress += 10;

bar.style.width = progress + "%";

bar.innerHTML = progress + "%";

if(progress >= 100){

clearInterval(interval);

setTimeout(function(){

window.location.href="result.html";

},500);

}

},200);

});