// Choose new color scheme
// $('#sky_theme').click(
//     function() {
//         if ($('section').hasClass("sky_theme")) {
//             // Show message to user that they switched theme
//             alert("You have switched to the Sky theme!");
//         } else {
//             $('section').css(".skytheme");
//             $('section').addClass("sky_theme");
//         }
//     });


// $('#nat_theme').click(function() {
//     if ($('section').hasClass("sky_theme")) {
//         $('section').removeClass('sky_theme');
//         $('section').addClass("nat_theme");

//         // Show message to user that they switched theme
//         alert("You have switched to the Natural theme!");

//         // $('section').css("class", "nat_theme");

//     }
// });

var Shopping = ["Apples", "Hazelnut Milk", "Cherries", "Bananas", "Bread", "Peanut Butter", "Blackberry Jelly", "Frozen Pineapple", "Frozen Strawberries", "Protein Powder", "Spinach", "Cereal", "Waffles", "Ground Beef", "Tortillas"]

$('button').click(function() {
    var thisButton = $(this);
    // alert(thisButton.attr('id'));
    if (thisButton.attr('id') == "sky_theme" || thisButton.attr('id') == "nat_theme") {
        $('section').removeClass('sky_theme nat_theme');
        $('section').addClass(thisButton.attr('id'));
    }
})


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
    var newTask = prompt("Please Add the new task"); {
        // if ($('#sky_theme').hasClass("full"))
        $('ul').append('<li>' + newTask + '</li>');
    }
});