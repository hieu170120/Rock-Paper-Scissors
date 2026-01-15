function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.33) {
        return "rock";
    } else if (randomValue < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getHumanChoice() { 
    let choice = prompt("Enter rock, paper, or scissors:");
    return choice;
}
function playGame() {
   
    let humanScore = 0;
    let computerScore = 0;

  
    function playRound(humanChoice, computerChoice) {
        console.log(`Bạn chọn: ${humanChoice} - Máy chọn: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("Hòa rồi!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`Bạn thắng hiệp này! ${humanChoice} thắng ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`Bạn thua hiệp này! ${computerChoice} thắng ${humanChoice}`);
        }
        
        console.log(`Tỉ số hiện tại - Người: ${humanScore} | Máy: ${computerScore}`);
        console.log("-----------------------");
    }

   
    
    for (let i = 1; i <= 5; i++) {
        console.log(`Hiệp ${i}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

   
    console.log("KẾT QUẢ CHUNG CUỘC:");
    if (humanScore > computerScore) {
        console.log("CHÚC MỪNG! Bạn là người chiến thắng cuối cùng!");
    } else if (humanScore < computerScore) {
        console.log("TIẾC QUÁ! Máy tính đã thắng chung cuộc.");
    } else {
        console.log("KẾT QUẢ HÒA!");
    }
}


playGame();
