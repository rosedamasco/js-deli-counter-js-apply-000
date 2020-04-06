//store how many people are in line
let currentNumber = 0;

function takeANumber(){
  currentNumber++;
  return `Order number: ${currentNumber}`;
  // //append person to end of the line
  // currentLine.push(name);
  // //return a welcome message including the new person's position in line
  // return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
  //starts at 0 , first customer = 1
  //no use of an Array
  //no paramaters
}
console.log(takeANumber());
console.log(takeANumber());
console.log(takeANumber());

function nowServing(katzDeliLine){
  //when line is empty make an announcement
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  //return announcement about person serving and shift the line
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(currentLine){
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
}