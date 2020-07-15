

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
    setTimeout(() => {
        if ($('.stars').css('opacity') == 1) {
            $('.twinkle').show();
            $('.twinkle').css('opacity', 1);
        }
    }, 2500)
}

async function toggleBlueSky() {
    $('.twinkle').css('opacity', 0);
    $('.twinkle').hide();
    $('.blueSky').opacityToggle();
}

async function toggleSky() {
    let blueSkyOpac = $('.blueSky').css('opacity');
    let starsOpac = $('.stars').css('opacity');
    $('.blueSky, .stars, .twinkle').css('transition', 'opacity 2000ms');
    if (blueSkyOpac == starsOpac) {
        toggleStars();
    } else {
        await toggleBlueSky();
        toggleStars();
    }

}

async function asyncToggle() {
    await toggleSky();
}

$('#bulb').on('mouseenter', () => {
    toggleSky();
    $('#bulb').off('mouseenter');
    setTimeout(() => {
          $('#bulb').on('mouseenter', () => {
            toggleSky();
          })
    }, 500);
})

$('#aboutButton').on('click', (e) => {
    document.getElementById('invisible').style.transition="opacity 2000ms";
    $('#invisible').opacityToggle();
})
