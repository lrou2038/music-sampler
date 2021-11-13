// assign variables
let infoDivs = document.querySelectorAll('.info-div');
let albums = document.querySelectorAll('.album-covers');
let players = document.querySelectorAll('audio');

// function to hide all divs
function hideAll() {
  infoDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

// run that function right away
hideAll();

// when any animal is clicked, make the suitable div appear
albums.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'figures':
        document.querySelector('#kiddoAlbum')
        	.style.display = 'block';
        break;
      case 'appleJuice':
        document.querySelector('#humanAlbum')
        	.style.display = 'block';
        break;
      case 'beforeLove':
        document.querySelector('#beforeLoveAlbum')
        .style.display = 'block';
        break;
      case 'bodyCount':
        document.querySelector('#bodyCountAlbum')
        .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()
