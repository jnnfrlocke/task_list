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
    });

$('#nat_theme').click(
    function() {
        $('h1').css('color', '#6A7162');
        $('li').css('color', '#6A7162');
        $('ul').css('background', '#CBE9D2');
        $('header').css('background', '#E2DAD0');
    }
);

// Animate Header
$('#fade_out').click(
    function() {
        $("header").fadeTo("slow", 0.50);
    }
)

$('#fade_in').click(
    function() {
        $("header").fadeTo("slow", 1);
    }
)