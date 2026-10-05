function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) ;
    
    switch(choice){
        case 0: return "Rock"
        case 1: return "Paper"
        case 2: return "Scissors"

    }
}

function getHumanChoice(){
    const choice = Number(window.prompt("Type 0 for Rock ,1 for paper and 2 for scissors", ""));

    switch(choice){
        case 0: return "Rock"
        case 1: return "Paper"
        case 2: return "Scissors"

    }
}


