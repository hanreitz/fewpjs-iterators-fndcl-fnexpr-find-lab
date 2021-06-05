function superbowlWin (objectArray) {
  // each object has a year and a result
  const wonGame = objectArray.find( function(g) { return g.result === 'W' });
  if (wonGame) {
    return wonGame.year;
  } else {
    return undefined;
  };
}