const decrement = require("./index.js");

const control = decrement({min:0, max:255});

const rnd = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

control.insert ( { kind: 'red'   , value: 255 } ) ;
control.insert ( { kind: 'green' , value: 255 } ) ;
control.insert ( { kind: 'blue'  , value: 255 } ) ;

while( control.total() > 0){

  control.change({kind: 'blue'},  rnd(-4,1));
  control.change({kind: 'green'}, rnd(-3,1));
  control.change({kind: 'red'},   rnd(-5,1));

  console.log( '<div style="background: rgb(' + control.data().map(i=>i.value).join() + '); height:1px;"></div>' );

}
