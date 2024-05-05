let random = 700+Math.floor(Math.random()*1000)+1;

setTimeout(()=>{
   let lights =  document.getElementsByClassName("lights");
    for(let i = 0 ; i<3 ; i++){
        lights[i].classList.add("bg-green-500");
    }

    document.getElementById("clickArea").addEventListener('click',()=>{
        clicked = true;
        for(let i = 0 ; i<3 ; i++){
            lights[i].classList.remove("bg-green-500");
        }
        setTimeout(()=>{
            showmodal();
        },400)
        
    })
    starttimer();
},random);

let clicked = false;
let x = 0;

const starttimer = ()=>{

    document.getElementById("time").innerText = x.toFixed(3);
    x = x + 0.001;
    
    if(clicked)return;

    setTimeout(()=>{
        starttimer()
    },0.1);
}


function showmodal(){
    let body = document.getElementsByTagName("body")[0];

    div = document.createElement('div');

    div.classList.add("fixed","top-0", "h-screen", "w-screen", "flex", "items-center", "justify-center", "bg-gray-400", "bg-opacity-50");

    div.innerHTML = `
    <div class="bg-gray-100 mx-4 p-10 flex flex-col items-center gap-5 rounded-lg shadow-lg">
    <h1 class="text-xl">Your Reaction time was : </h1>
    <p class="text-3xl">${document.getElementById("time").innerText}</p>

    <div>
    <button class="bg-green-400 p-3 text-white rounded-lg shadow-md transform hover:bg-green-500" onclick="tryagain()">Try Again</button>
    <button class="bg-red-400 p-3 text-white rounded-lg shadow-md transform hover:bg-red-500" onclick="returnback()">Return</button>
    </div>
    </div>
    `

    body.appendChild(div);
}

function tryagain(){
    window.location.reload();
}

function returnback(){
    window.location.href = "index.html";
}





