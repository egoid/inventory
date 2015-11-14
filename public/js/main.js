'use strict';

$(document).ready(init);

function init() {

  var bed = $.get('rooms/5646917232abdc0328d0e01f').done(function(data,err){
     data.forEach(function(x,i,arr){
      if (x === "5646c39c66a342e22a47ee38"){$('#turt').appendTo($('#bed'))}
      if (x === "5646c44fd1595feb2a84ffbd"){$('#matt').appendTo($('#bed'))}
      if (x === "5646c57c83c5b1f22a78d634"){$('#flat').appendTo($('#bed'))}
      if (x === "5646c59b0620a6f82a5fddf8"){$('#soap').appendTo($('#bed'))}
      if (x === "5646c5c181be31fe2a5a10cb"){$('#dog').appendTo($('#bed'))}
      if (x === "5646c5eca07f4e0d2b89cdc4"){$('#beer').appendTo($('#bed'))}
      if (x === "5646c634af0d911a2b1a77fd"){$('#pan').appendTo($('#bed'))}
      if (x === "5646c65736e64c202bfda079"){$('#race').appendTo($('#bed'))}
     }); 
  })
  var bath = $.get('rooms/56469197365ba20b28d48520').done(function(data,err){
     data.forEach(function(x,i,arr){
      if (x === "5646c39c66a342e22a47ee38"){$('#turt').appendTo($('#bath'))}
      if (x === "5646c44fd1595feb2a84ffbd"){$('#matt').appendTo($('#bath'))}
      if (x === "5646c57c83c5b1f22a78d634"){$('#flat').appendTo($('#bath'))}
      if (x === "5646c59b0620a6f82a5fddf8"){$('#soap').appendTo($('#bath'))}
      if (x === "5646c5c181be31fe2a5a10cb"){$('#dog').appendTo($('#bath'))}
      if (x === "5646c5eca07f4e0d2b89cdc4"){$('#beer').appendTo($('#bath'))}
      if (x === "5646c634af0d911a2b1a77fd"){$('#pan').appendTo($('#bath'))}
      if (x === "5646c65736e64c202bfda079"){$('#race').appendTo($('#bath'))}
     }) 
  })
  var kitchen = $.get('rooms/5646919f365ba20b28d48521').done(function(data,err){
     data.forEach(function(x,i,arr){
      if (x === "5646c39c66a342e22a47ee38"){$('#turt').appendTo($('#kitchen'))}
      if (x === "5646c44fd1595feb2a84ffbd"){$('#matt').appendTo($('#kitchen'))}
      if (x === "5646c57c83c5b1f22a78d634"){$('#flat').appendTo($('#kitchen'))}
      if (x === "5646c59b0620a6f82a5fddf8"){$('#soap').appendTo($('#kitchen'))}
      if (x === "5646c5c181be31fe2a5a10cb"){$('#dog').appendTo($('#kitchen'))}
      if (x === "5646c5eca07f4e0d2b89cdc4"){$('#beer').appendTo($('#kitchen'))}
      if (x === "5646c634af0d911a2b1a77fd"){$('#pan').appendTo($('#kitchen'))}
      if (x === "5646c65736e64c202bfda079"){$('#race').appendTo($('#kitchen'))}
     }) 
  })
  var garage = $.get('rooms/564691cf1024431428d5e3ad').done(function(data,err){
     data.forEach(function(x,i,arr){
      if (x === "5646c39c66a342e22a47ee38"){$('#turt').appendTo($('#garage'))}
      if (x === "5646c44fd1595feb2a84ffbd"){$('#matt').appendTo($('#garage'))}
      if (x === "5646c57c83c5b1f22a78d634"){$('#flat').appendTo($('#garage'))}
      if (x === "5646c59b0620a6f82a5fddf8"){$('#soap').appendTo($('#garage'))}
      if (x === "5646c5c181be31fe2a5a10cb"){$('#dog').appendTo($('#garage'))}
      if (x === "5646c5eca07f4e0d2b89cdc4"){$('#beer').appendTo($('#garage'))}
      if (x === "5646c634af0d911a2b1a77fd"){$('#pan').appendTo($('#garage'))}
      if (x === "5646c65736e64c202bfda079"){$('#race').appendTo($('#garage'))}
     }) 
  })


  

  $('#bathdog').click(bathdog)
  $('#beddog').click(beddog)
  $('#kitchendog').click(kitchendog)
  $('#garagedog').click(garagedog)

  $('#bathrace').click(bathrace)
  $('#bedrace').click(bedrace)
  $('#kitchenrace').click(kitchenrace)
  $('#garagerace').click(garagerace)

  $('#bathpan').click(bathpan)
  $('#bedpan').click(bedpan)
  $('#kitchenpan').click(kitchenpan)
  $('#garagepan').click(garagepan)

  $('#bathbeer').click(bathbeer)
  $('#bedbeer').click(bedbeer)
  $('#kitchenbeer').click(kitchenbeer)
  $('#garagebeer').click(garagebeer)

  $('#bathturt').click(bathturt)
  $('#bedturt').click(bedturt)
  $('#kitchenturt').click(kitchenturt)
  $('#garageturt').click(garageturt)


  $('#bathsoap').click(bathsoap)
  $('#bedsoap').click(bedsoap)
  $('#kitchensoap').click(kitchensoap)
  $('#garagesoap').click(garagesoap)

  $('#bathflat').click(bathflat)
  $('#bedflat').click(bedflat)
  $('#kitchenflat').click(kitchenflat)
  $('#garageflat').click(garageflat)

  $('#bathmatt').click(bathmatt)
  $('#bedmatt').click(bedmatt)
  $('#kitchenmatt').click(kitchenmatt)
  $('#garagematt').click(garagematt)

}


function bathmatt(){
  var $bath = $('#bath');
  $('#matt').appendTo($bath);

  $.get("rooms/56469197365ba20b28d48520/addItem/5646c44fd1595feb2a84ffbd")
};

function bedmatt(){
  var $bed = $('#bed');
  $('#matt').appendTo($bed);
  $.get("rooms/5646917232abdc0328d0e01f/addItem/5646c44fd1595feb2a84ffbd")
}
function kitchenmatt(){
  var $kitchen = $('#kitchen');
  $('#matt').appendTo($kitchen);
   $.get("rooms/5646919f365ba20b28d48521/addItem/5646c44fd1595feb2a84ffbd")
}
function garagematt(){
  var $garage = $('#garage');
  $('#matt').appendTo($garage);
  $.get("rooms/564691cf1024431428d5e3ad/addItem/5646c44fd1595feb2a84ffbd")
}




function bathturt(){
  var $bath = $('#bath');
  $('#turt').appendTo($bath);
  $.get("rooms/56469197365ba20b28d48520/addItem/5646c39c66a342e22a47ee38")
}
function bedturt(){
  var $bed = $('#bed');
  $('#turt').appendTo($bed);
   $.get("rooms/5646917232abdc0328d0e01f/addItem/5646c39c66a342e22a47ee38")
}
function kitchenturt(){
  var $kitchen = $('#kitchen');
  $('#turt').appendTo($kitchen);
  $.get("rooms/5646919f365ba20b28d48521/addItem/5646c39c66a342e22a47ee38")
}
function garageturt(){
  var $garage = $('#garage');
  $('#turt').appendTo($garage);
   $.get("rooms/564691cf1024431428d5e3ad/addItem/5646c39c66a342e22a47ee38")
}
 


function bathflat(){
  var $bath = $('#bath');
  $('#flat').appendTo($bath);
  $.get("rooms/56469197365ba20b28d48520/addItem/5646c57c83c5b1f22a78d634")
}
function bedflat(){
  var $bed = $('#bed');
  $('#flat').appendTo($bed);
  $.get("rooms/5646917232abdc0328d0e01f/addItem/5646c57c83c5b1f22a78d634")
}
function kitchenflat(){
  var $kitchen = $('#kitchen');
  $('#flat').appendTo($kitchen);
   $.get("rooms/5646919f365ba20b28d48521/addItem/5646c57c83c5b1f22a78d634")
}
function garageflat(){
  var $garage = $('#garage');
  $('#soap').appendTo($garage);
  $.get("rooms/564691cf1024431428d5e3ad/addItem/5646c57c83c5b1f22a78d634")
}


function bathsoap(){
  var $bath = $('#bath');
  $('#soap').appendTo($bath);
  $.get("rooms/56469197365ba20b28d48520/addItem/5646c59b0620a6f82a5fddf8")
}
function bedsoap(){
  var $bed = $('#bed');
  $('#soap').appendTo($bed);
  $.get("rooms/5646917232abdc0328d0e01f/addItem/5646c59b0620a6f82a5fddf8")
}
function kitchensoap(){
  var $kitchen = $('#kitchen');
  $('#soap').appendTo($kitchen);
   $.get("rooms/5646919f365ba20b28d48521/addItem/5646c59b0620a6f82a5fddf8")
}
function garagesoap(){
  var $garage = $('#garage');
  $('#soap').appendTo($garage);
  $.get("rooms/564691cf1024431428d5e3ad/addItem/5646c59b0620a6f82a5fddf8")
}


function bathdog(){
  var $bath = $('#bath');
  $('#dog').appendTo($bath);
  $.get("rooms/56469197365ba20b28d48520/addItem/5646c5c181be31fe2a5a10cb")
}
function beddog(){
  var $bed = $('#bed');
  $('#dog').appendTo($bed);
   $.get("rooms/5646917232abdc0328d0e01f/addItem/5646c5c181be31fe2a5a10cb")
}
function kitchendog(){
  var $kitchen = $('#kitchen');
  $('#dog').appendTo($kitchen);
   $.get("rooms/5646919f365ba20b28d48521/addItem/5646c5c181be31fe2a5a10cb")
}
function garagedog(){
  var $garage = $('#garage');
  $('#dog').appendTo($garage);
  $.get("rooms/564691cf1024431428d5e3ad/addItem/5646c5c181be31fe2a5a10cb")

}


function bathbeer(){
  var $bath = $('#bath');
  $('#beer').appendTo($bath);
    $.get("rooms/56469197365ba20b28d48520/addItem/5646c5eca07f4e0d2b89cdc4")
}
function bedbeer(){
  var $bed = $('#bed');
  $('#beer').appendTo($bed);
  $.get("rooms/5646917232abdc0328d0e01f/addItem/5646c5eca07f4e0d2b89cdc4")
}
function kitchenbeer(){
  var $kitchen = $('#kitchen');
  $('#beer').appendTo($kitchen);
  $.get("rooms/5646919f365ba20b28d48521/addItem/5646c5eca07f4e0d2b89cdc4")
}
function garagebeer(){
  var $garage = $('#garage');
  $('#beer').appendTo($garage);
  $.get("rooms/564691cf1024431428d5e3ad/addItem/5646c5eca07f4e0d2b89cdc4")
}



function bathpan(){
  var $bath = $('#bath');
  $('#pan').appendTo($bath);
  $.get("rooms/56469197365ba20b28d48520/addItem/5646c634af0d911a2b1a77fd")

}
function bedpan(){
  var $bed = $('#bed');
  $('#pan').appendTo($bed);
  $.get("rooms/5646917232abdc0328d0e01f/addItem/5646c634af0d911a2b1a77fd")

}
function kitchenpan(){
  var $kitchen = $('#kitchen');
  $('#pan').appendTo($kitchen);
  $.get("rooms/5646919f365ba20b28d48521/addItem/5646c634af0d911a2b1a77fd")

}
function garagepan(){
  var $garage = $('#garage');
  $('#pan').appendTo($garage);
  $.get("rooms/564691cf1024431428d5e3ad/addItem/5646c634af0d911a2b1a77fd")

}


function bathrace(){
  var $bath = $('#bath');
  $('#race').appendTo($bath);
  $.get("rooms/56469197365ba20b28d48520/addItem/5646c65736e64c202bfda079")
}
function bedrace(){
  var $bed = $('#bed');
  $('#race').appendTo($bed);
   $.get("rooms/5646917232abdc0328d0e01f/addItem/5646c65736e64c202bfda079")
}
function kitchenrace(){
  var $kitchen = $('#kitchen');
  $('#race').appendTo($kitchen);
  $.get("rooms/5646919f365ba20b28d48521/addItem/5646c65736e64c202bfda079")
}
function garagerace(){
  var $garage = $('#garage');
  $('#race').appendTo($garage);
  $.get("rooms/564691cf1024431428d5e3ad/addItem/5646c65736e64c202bfda079")
}






// {
//     "_id" : ObjectId("5646917232abdc0328d0e01f"),
//     "name" : "bedroom",
//     "items" : [],
//     "createdAt" : ISODate("2015-11-14T01:42:10.000Z"),
//     "__v" : 0
// }


// {
//     "_id" : ObjectId("56469197365ba20b28d48520"),
//     "name" : "bathroom",
//     "items" : [],
//     "createdAt" : ISODate("2015-11-14T01:42:47.000Z"),
//     "__v" : 0
// }




// {
//     "_id" : ObjectId("5646919f365ba20b28d48521"),
//     "name" : "kitchen",
//     "items" : [],
//     "createdAt" : ISODate("2015-11-14T01:42:55.000Z"),
//     "__v" : 0
// }



// {
//     "_id" : ObjectId("564691cf1024431428d5e3ad"),
//     "name" : "garage",
//     "items" : [],
//     "createdAt" : ISODate("2015-11-14T01:43:43.000Z"),
//     "__v" : 0
// }