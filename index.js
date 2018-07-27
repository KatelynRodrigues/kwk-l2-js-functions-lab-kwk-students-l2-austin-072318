// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
  return Math.abs(someValue-42)
}

function distanceFromHqInFeet(someValue){
  return distanceFromHqInBlocks(someValue)*264
}

function distanceTravelledInFeet(startBlock,endBlock){
  return Math.abs(endBlock-startBlock)*264
}

function calculatesFarePrice(start,destination){
  var totalDistance = distanceTravelledInFeet(start,destination)
  totalDistance = totalDistance-400
  var farePrice = 0
  if (totalDistance>400 && totalDistance<2000){
    farePrice = (2*totalDistance)/100
    return farePrice
  }
  else if (totalDistance>2000 && totalDistance<2500){
    return "25 dollars"
  }
  else {
    return "cannot travel that far!"
  }
}