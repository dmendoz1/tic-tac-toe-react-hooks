const CalculateWinner = squares => {
  const winningLines = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
  ]
  for(let i = 0; i < winningLines.length; i = i+1) {
    const [a,b,c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        line: winningLines[i],
        winner: squares[a],
        isDraw: false
      };
    };
  }

  let isDraw = true;

  for(let i=0;i<squares.length; i = i+1) {
    if(squares[i] === null) {
      isDraw = false
    }
  }

  return {
    winner: null,
    line: null,
    isDraw: isDraw
  }
}

export default CalculateWinner;
