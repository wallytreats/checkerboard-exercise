var body = document.getElementsByTagName('body')[0];

for (i=0; i < 81; i++){
  var tile = document.createElement('div');
  tile.style.width = '11.1%';
  tile.style.float = 'left';
  tile.style.paddingBottom = '11.1%';
  if (i % 2 === 0){
    tile.style.backgroundColor = "red";
    body.appendChild(tile);
  }else{
    tile.style.backgroundColor = 'blue';
    body.appendChild(tile);
  }
};

// function randomColors () {
//   var color1 = Math.random
//   var
// }
