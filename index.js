
        function distanceFromHqInBlocks(someValue){
        someValue = someValue - 42;
         return Math.abs(someValue)
       

   }
   function distanceFromHqInFeet(someValue) {
   return  distanceFromHqInBlocks(someValue) *264;
   }

   function distanceTravelledInFeet(start, destination) {
    return distanceFromHqInFeet (destination)-distanceFromHqInFeet (start);
  }
  
  
  
  function calculatesFarePrice(start, destination) {
    
    var dist = distanceTravelledInFeet(start, destination)
    if (dist < 400) {
      return 0
    }
    else if (dist >= 400 && dist<= 2000) {
      return (dist -  400)* 0.02
    }
    else if(dist> 2000 && dist< 2500) {
      return 25
    }
    else if(dist > 2500){
      return 'cannot travel that far';
    }
  
  }
  