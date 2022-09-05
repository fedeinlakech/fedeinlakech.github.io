const myDom = document;
console.log(myDom);

const video = myDom.getElementById("video");

const myVideo = `<li class="list-group-item"><video width="320" height="240" controls> <source src="./images/LFC.mp4"></video></li>`;

const cantidad = prompt("¿Cuántas veces querés que aparezca el video?");

for (let i = 1; i <= cantidad; i++) {
  video.innerHTML += myVideo;
}
