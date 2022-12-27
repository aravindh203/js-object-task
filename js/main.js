const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];
  var a=[];
    for(i=0;i<passengers.length;i++){
        a[i]=passengers[i].passengerName;
    }
  console.log(a);
  
  var b=[];
  var c=0;
  for(i=0;i<passengers.length;i++){
    if(passengers[i].isVegetarianOrVegan==true){
        b[c]=passengers[c].passengerName;
        c++
    }
}
console.log(b);

    
  
