const imgs = document.getElementById('imgs');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

setTimeout(run,2000);
function run(){
    idx++;
     
    if(idx > img.length-1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}
setInterval(run,5000);

// this carousel has been fixed
