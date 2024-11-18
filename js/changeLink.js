//play with jQuery
$('body').hide().fadeIn(3000);

//hide all images
//$('img').hide();

//hide all links
//$('a').hide();

//test the event
$('h1').click(hidesection);
function hidesection(){
    $(this).text("Hiding....");
    $('body').children('p').slideToggle();
}

// test each
$('a').each(change);
function change(){
    var links = $(this).attr('href');
    console.log(links);
    $(this).attr('href', "http://www.google.com");
}


//get all the images and change all of them
$('img').each(changeImage);
function changeImage(){
    var img = $(this).attr('src');
    $(this).attr('src', "img/Mii.jpg");
}
