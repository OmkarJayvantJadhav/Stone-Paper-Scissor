
    let score = JSON.parse(localStorage.getItem('score')) || {
      won: 0,
      lost: 0,
      tied: 0,
    };

    document.querySelector('#score').innerText =
      `Won: ${score.won} | Lost: ${score.lost} | Tied: ${score.tied}`;

    function GenerateComputerChoice() {
      const choices = ['Stone', 'Paper', 'Scissor'];
      return choices[Math.floor(Math.random() * 3)];
    }

    function playGame(userChoice) {
      const computerChoice = GenerateComputerChoice();
      let result;

      if (userChoice === computerChoice) {
        score.tied++;
        result = `Tie! Both chose ${userChoice}`;
      } else if (
        (userChoice === 'Stone' && computerChoice === 'Scissor') ||
        (userChoice === 'Paper' && computerChoice === 'Stone') ||
        (userChoice === 'Scissor' && computerChoice === 'Paper')
      ) {
        score.won++;
        result = `You Won! Computer chose ${computerChoice}`;
      } else {
        score.lost++;
        result = `You Lost! Computer chose ${computerChoice}`;
      }

      localStorage.setItem('score', JSON.stringify(score));

      document.querySelector('#result').innerText = result;
      document.querySelector('#score').innerText =
        `Won: ${score.won} | Lost: ${score.lost} | Tied: ${score.tied}`;
    }

    function reset() {
      localStorage.clear();
      score = { won: 0, lost: 0, tied: 0 };
      document.querySelector('#result').innerText = "Game Reset!";
      document.querySelector('#score').innerText =
        `Won: 0 | Lost: 0 | Tied: 0`;
    }
  