const answer = document.getElementById("answer")
const result = document.getElementById("result")
const trial = document.getElementById("try")
const button = document.getElementById("button")
const trybutton = document.getElementById("trybutton")
const image = document.getElementById("image")

const amino = ["glycine", "alanine", "proline", "valine", "leucine", "isoleucine", "methionine", "phenylalanine", "tyrosine"
    , "tryptophan", "serine", "threonine", "cysteine", "asparagine", "glutamine", "lysine", "arginine", "histidine"
    , "aspartate", "glutamate"
]
const aminoimg = ["./images/glycine.png", "./images/alanine.png", "./images/proline.png", "./images/valine.png", "./images/leucine.png"
    , "./images/isoleucine.png", "./images/methionine.png", "./images/phenylalanine.png", "./images/tyrosine.png", "./images/tryptophan.png"
    , "./images/serine.png", "./images/threonine.png", "./images/cysteine.png", "./images/asparagine.png", "./images/glutamine.png"
    , "./images/lysine.png", "./images/arginine.png", "./images/histidine.png", "./images/aspartate.png", "./images/glutamate.png"
]
let random = 1
let last

trybutton.style.visibility = "hidden"

button.onclick = function(){
    trybutton.style.visibility = "hidden"
    trial.textContent = ""
    if(answer.value === amino[random]){
        answer.value = ""
        result.textContent = "Correct!"
        last = random
        while(last === random){
            random = (Math.floor(Math.random() * amino.length)) 
        }
    image.src = aminoimg[random]
    return random
    }
    else{
        result.textContent = "Wrong! Try Again!"
        trial.textContent = "Pass"
        trybutton.style.visibility = "visible"
    }
}
trybutton.onclick = function(){
    trybutton.style.visibility = "hidden"
    trial.textContent = ""
    result.textContent = "Good Luck!"
    answer.value = ""
    last = random
    while(last === random){
        random = (Math.floor(Math.random() * amino.length)) 
    }
    image.src = aminoimg[random]
    return random
}

