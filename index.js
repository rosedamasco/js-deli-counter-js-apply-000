function takeANumber(currentLine, name){
<<<<<<< HEAD
  //append person to end of the line
  currentLine.push(name);
  //return a welcom message including the new person's position in line
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
=======
  // currentLine.push(name);
  // return `Welcome, ${name}. You are number ${currentLine.length} in line.`
>>>>>>> 991593c6c3ea9e9768ed73b0542ccff5adf3b746
}

function nowServing(katzDeliLine){
<<<<<<< HEAD
  //when line is empty make an announcement
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  //return announcement about person serving and shift the line
  return `Currently serving ${katzDeliLine.shift()}.`;
=======
>>>>>>> 991593c6c3ea9e9768ed73b0542ccff5adf3b746
}

function currentLine(currentLine){
<<<<<<< HEAD
  //if no one is in line, make an announcement
  if(currentLine.length === 0) {
    return 'The line is currently empty.';
  }
  
  //say who is in line when there are people waiting
  let lineStr = 'The line is currently: ';
  //iterate over the line
  for(let i = 0; i < currentLine.length; i++){
    //add each person to line with their number
    lineStr += `${i+1}. ${currentLine[i]}`
    //add a comma between each person
    if(i !== currentLine.length-1){
      lineStr += ', '
    }
  }
  return lineStr;
=======
>>>>>>> 991593c6c3ea9e9768ed73b0542ccff5adf3b746
}