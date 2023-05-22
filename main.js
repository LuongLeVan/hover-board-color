const container = document.querySelector('.container');

setColor = () => {
    var colorChar = '0123456789ABCDEF';
    var randomColor = '#';
    for (let i = 0; i < 6; i++) {
        
        randomColor+= colorChar[Math.floor(Math.random() * colorChar.length)];
    }
    return randomColor;
}

for (let i = 0; i < 200; i++) {
   var div = document.createElement('div');
   div.classList.add('square');
   container.appendChild(div);

   /* mouseenter */
   div.addEventListener('mouseenter', function(e){
    const el = e.currentTarget;
    let color = setColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 100px ${color}, 0 0 10px ${color}`
   })

   /* mouseleave */
   div.addEventListener('mouseleave', function(e){
    const el = e.currentTarget;
    el.style.backgroundColor = '#1d1d1d',
    el.style.boxShadow = `0 0 2px #1d1d1d`;
      
   })
}
