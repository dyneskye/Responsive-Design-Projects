$.fn.sayHi = function() {
    this.html('Hi');
    return this;
  }

$.fn.visibilityToggle = function() {
        return this.css('opacity', (i, percent) => {
        return (percent == 1) ? 0 : 1;
    })
};

async function toggleSky() {
    $('.blueSky, .stars, .twinkling').css('transition', 'opacity 2000ms');
    $('.twinkling').css('visibility', 'hidden');
    await $('.stars, .twinkling').visibilityToggle();
    await $('.blueSky').visibilityToggle();
    
    /* if ($('.blueSky').css('opacity') == 1) { 
      $('.stars, .twinkling').css('opacity', 1);
      $('.blueSky').css('opacity', 0);
    } else {
      $('.stars, .twinkling').css('opacity', 0);
      $('.blueSky').css('opacity', 1);
    } */
}

$('#welcome-header').on('mouseover', () => {
    document.getElementById('invisible').style.transition="opacity 2000ms";
    document.getElementById('invisible').style.opacity="100%";
    toggleSky();
/*  $('#welcome-header').css('transition', 'ease-in-out');
    $('#welcome-header').css('transition-duration', '1s');
    $('#welcome-header').css('background', '#f5a361'); */
})

$('#aboutButton').on('click', (e) => {
    document.getElementById('invisible').style.transition="opacity 2000ms";
    document.getElementById('invisible').style.opacity="100%";
/*  $('#welcome-header').css('transition', 'ease-in-out');
    $('#welcome-header').css('transition-duration', '1s');
    $('#welcome-header').css('background', '#f5a361'); */
})
