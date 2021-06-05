function superbowlWin (objectArray) {
  // each object has a year and a result
  const wonGame = objectArray.find( function(g) { return g.result === 'W' });
  return !!wonGame ? wonGame.year : undefined;
}