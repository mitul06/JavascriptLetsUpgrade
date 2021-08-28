let words=
[
    {
        jumbled:"tteryba",
        correct:"battery"
    },
    {
        jumbled:"mputcoer",
        correct:"computer"
    },
    {
        jumbled:"boilem",
        correct:"mobile"
    },
    {
        jumbled:"gerrach",
        correct:"charger"
    },
    {
        jumbled:"arphenoe",
        correct:"earphone"
    },

]



let currentWord=0;
let score=0;


display = () => {
    document.getElementById("j-word").innerText = words[currentWord].jumbled

    document.getElementById("score").innerText = score;
}


display();

checkAns = () => {
    let ans = document.getElementById("inp").value;

    if (ans.toLowerCase() === words[currentWord].correct.toLowerCase()) {
        score++;
    }

    if (currentWord == words.length-1) {
        let msg = "";

        if(score == 5){
            msg = "YOU WIN " + score
        }else if (score == 4){
            msg = "TRY AGAIN FOR WIN " +score
        }else if (score < 4) {
            msg = "LOOSE GAME " +score
        }

        alert(msg);
        location.reload();
    }else {
        currentWord++;
        display();
        document.getElementById("inp").value ="";
    }
}