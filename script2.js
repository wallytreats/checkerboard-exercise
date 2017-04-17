var body = document.getElementsByTagName('body')[0];

for (i=0; i < 81; i++){
  var rgba = randomRGB();
  var tile = document.createElement('div');
  tile.style.width = '11.1%';
  tile.style.float = 'left';
  tile.style.paddingBottom = '11.1%';
    tile.style.backgroundColor = rgba;
    body.appendChild(tile);

};

function randomRGB () {
  var results = '';
    var red = getRandomAr(1, 255);
    var green = getRandomAr(1, 255);
    var blue = getRandomAr(1, 255);
    var opacity = getRandomAr(1, 255);
      results = 'rgba' + '(' + Math.ceil(red) + ',' + Math.ceil(green) + ',' + Math.ceil(blue) + ',' + Math.ceil(opacity) + ')';
  return results;
}

function getRandomAr(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
