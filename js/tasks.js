$('li').click(function() {
    $(this).fadeOut('slow');
})

// Choose new color scheme
$('#sky_theme').click(
    function() {
        $('h1').css('color', '#363732');
        $('li').css('color', '#363732');
        $('ul').css('background', '#53D8FB');
        $('header').css('background', '#DCE1E9');
        // Show message to user that they switched theme
        alert("You have switched to the Sky theme!");
    });

$('#nat_theme').click(
    function() {
        $('h1').css('color', '#6A7162');
        $('li').css('color', '#6A7162');
        $('ul').css('background', '#CBE9D2');
        $('header').css('background', '#E2DAD0');
        // Show message to user that they switched theme
        alert("You have switched to the Natural theme!")
    }
);


// Animate Header
$("#fade").click(function() {
    if ($('header').hasClass("full")) {
        $('header').fadeTo("slow", .5);
        $('header').removeClass("full");
    } else {
        $('header').addClass("full");
        $('header').fadeTo("slow", 1);

    }
});

// Increase and Decrease Font

$('#text_up').click(function() {
    $('h1, button, li').css('font-size', function() {
        return parseInt($(this).css('font-size')) + 2 + 'px';
    });
});

$('#text_down').click(function() {
    $('h1, button, li').css('font-size', function() {
        return parseInt($(this).css('font-size')) - 2 + 'px';
    });
});

// Enter New Task

$('#new_task').click(function() {
    var newTask = prompt("Please Add the new task");
    if (newTask != null) {
        $('ul').append('<li>' + newTask + '</li>');
    }
});


// $('#new_task').click(function() {
//     $jPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
//         if (r) jAlert('You entered: ' + r, 'Result');
//     });
// })