function calc(){
    let show = document.getElementById("result")
    let score = document.getElementById("inp")

    if (num == "") {
        show.innerHTML = '<p class="alert alert-danger text-center">Invalid Input</p>'
    }
    if(score.value >= 0 && score.value <= 39){
        console.log("F-fail😡 olodo ni ee");
        show.innerHTML="F-fail😡 olodo ni ee"
        F_sing.play()
    } else if (score.value >=40 && score.value<= 44){
        console.log("E-👿 are you proud of yoursef");
        show.innerHTML= "E-👿 are you proud of yoursef"
        E_song.play()
    }
    else if (score.value >=45 && score.value<= 49){
        console.log("D-🤒 hmmm");
        show.innerHTML= "D-🤒 hmmm"
        D_loud.play()
    }
    else if (score.value >=50 && score.value<= 59){
        console.log("C-🥴 Manageable");
        show.innerHTML= "C-🥴 Manageable"
        C_cred.play()
    }
    else if (score.value >=60 && score.value<= 69){
        console.log("B-😎 tried");
        show.innerHTML= "B-😎 tried"
        B_good.play()
    }
    else if (score.value >=70 && score.value<= 100){
        console.log("A-😁😍Excellence");
        show.innerHTML= "A-😁😍Excellence"
        A_bang.play()
    }
}
    



let sing = "Audio/failure.mp3"
let F_sing = new Audio(sing)

let song = "Audio/fail.mp3"
let E_song = new Audio(song)

let loud = "Audio/Average.mp3"
let D_loud = new Audio(loud)

let cred = "Audio/credit.mp3"
let C_cred = new Audio(cred)

let good = "Audio/Good.wav"
let B_good = new Audio(good)

let bang = "Audio/Excellence.wav"
let A_bang = new Audio(bang)
