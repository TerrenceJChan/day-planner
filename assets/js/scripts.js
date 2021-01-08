// Displays current time
$('#current-time').text(moment().format('MMMM Do YYYY'));

// localStorage loader
for (let i = 0; i < 24; i++) {
    $('.text-input').eq(i).val(localStorage.getItem(JSON.stringify(i)));
}

// localStorage saver
for (let i = 0; i < 24; i++) {
    $('.save').eq(i).click(function () {
        localStorage.setItem(JSON.stringify(i), JSON.stringify($('.text-input').eq(i).val()));
    })
}



