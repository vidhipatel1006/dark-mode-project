// NIGHT SCENE :
// root.style.setProperty('--bodyMain', '#1A1A1A');
//         root.style.setProperty('--shadow-nav', 'rgba(0,0,0,.8)');
//         root.style.setProperty('--black', 'white');
//         root.style.setProperty('--grey', 'white');

// DAY SCENE :
// root.style.setProperty('--bodyMain', 'white');
// root.style.setProperty('--shadow-nav', '#E2E1E1');
// root.style.setProperty('--black', 'black');
// root.style.setProperty('--grey', 'rgb(105, 105, 105)');

var isDarkModeActivated = false;
var checkbox = document.querySelector('#checkbox');
var root = document.documentElement;    
checkbox.addEventListener('click',function(){

      if(isDarkModeActivated === false){

             root.style.setProperty('--bodyMain', '#1A1A1A');
             root.style.setProperty('--shadow-nav', 'rgba(0,0,0,.8)');
             root.style.setProperty('--black', 'white');
             root.style.setProperty('--grey', 'white');
             isDarkModeActivated = true;
      }

      else{
         root.style.setProperty('--bodyMain', 'white');
         root.style.setProperty('--shadow-nav', '#E2E1E1');
         root.style.setProperty('--black', 'black');
         root.style.setProperty('--grey', 'rgb(105, 105, 105)');
         isDarkModeActivated = false;
      }
})