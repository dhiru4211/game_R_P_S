let your_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msgContent = document.querySelector("#msg");
const scoreUser = document.querySelector("#user-score");
const scoreComp = document.querySelector("#comp-score");

const genComputerChoice = () => {
    //rock paper scissor
    const options = ["rock", "paper", "scissor"];

    const idx = Math.floor(Math.random() * 3);
    return options[idx];
};

const drawGame = () => {
    console.log("Game was Draw");
    msgContent.innerText = "OOOPs Game Draw!! Play Again.";
};

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin === true)
    {
        your_score++;
        scoreUser.innerText = your_score;
        msgContent.innerText = `You Win! Your choice ${userChoice} beats ${compChoice}`;
        msgContent.style.backgroundColor = "green";
    }
    else
    {
        comp_score++;
        scoreComp.innerText = comp_score;
        msgContent.innerText = `You Lose! ${compChoice} beats your choice ${userChoice}`;
        msgContent.style.backgroundColor = "red";
    }

};

const playGame = (userChoice) => {
    console.log("users choice = ", userChoice);
    //Generate computer Choice -> Modular way of programming
    const compChoice = genComputerChoice();
    console.log("comp choice = ", compChoice);

    if(compChoice === userChoice)
    {
        drawGame();
        msgContent.style.backgroundColor = "rgb(165, 165, 55)"
    }
    else
    {
        let userwin = true;
        if(userChoice === "rock")
        {
            //scissor, paper
            if(compChoice === "paper")
            {
                userwin = false;
            }
            else
            {
                userwin = true;
            }
        }
        else if(userwin === "paper")
        {
            //rock, scissor
            if(compChoice === "scissor")
            {
                userwin = false;
            }
            else
            {
                userwin = true;
            }
        }
        else
        {
            //rock , paper
            if(compChoice === "rock")
            {
                userwin = false;
            }
            else
            {
                userwin = true;
            }
        }
        showWinner(userwin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
   // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

