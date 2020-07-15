

$.fn.opacityToggle = function() {
        return this.css('opacity', (i, percent) => {
        return (percent == 1) ? 0 : 1;
    })
};

$(document).ready(setTimeout(() => {
    document.getElementById('invisible').style.transition="opacity 2000ms";
    document.getElementById('invisible').style.opacity="100%";
}, 1500))


async function toggleStars() {
    $('.stars').opacityToggle();
    var set = setTimeout(() => {
        if ($('.stars').css('opacity') == 1) {
            console.log('showing');
            $('.twinkling').show();
        }
    }, 2000)
}

async function toggleBlueSky() {
    $('.twinkling').hide();
    $('.blueSky').opacityToggle();
}

async function toggleSky() {
    $('#invisible').css('transition', "opacity 2000ms");
    $('#invisible').css('transition', 1);
    let blueSkyOpac = $('.blueSky').css('opacity');
    let starsOpac = $('.stars').css('opacity');
    /* set inMotion to 1? */
    $('.blueSky, .stars, .twinkling').css('transition', 'opacity 2000ms');

    if (blueSkyOpac == starsOpac) {
        toggleStars();
    } else {
        await toggleBlueSky();
        await toggleStars();
    }

}

async function asyncToggle() {
    await toggleSky();
}

$('#bulb').on('mouseover', () => {
    toggleSky();
    $('#bulb').off('mouseover');
    setTimeout(() => {
          $('#bulb').on('mouseover', () => {
            toggleSky();
          })
    }, 500);


/*  $('#bulb').css('transition', 'ease-in-out');
    $('#bulb').css('transition-duration', '1s');
    $('#bulb').css('background', '#f5a361'); */
})

$('#aboutButton').on('click', (e) => {
    document.getElementById('invisible').style.transition="opacity 2000ms";
    document.getElementById('invisible').style.opacity="100%";
/*  $('#bulb').css('transition', 'ease-in-out');
    $('#bulb').css('transition-duration', '1s');
    $('#bulb').css('background', '#f5a361'); */
})
