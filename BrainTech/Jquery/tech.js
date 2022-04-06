






// styling reinvet search 

$("#reinvent-search").text("Can't find what you're looking for ?");

$("#reinvent-search").css('fontSize','30px');

$("#reinvent-search").css('color','white');

$("#reinvent-search").css('backgroundColor','black');




// Clicking the image  

// is an event that is sent to an element when the pointer is over the element 
// and the mouse button is pressed
$("#myDiv").mousedown(function() {
    $(this).css('backgroundColor','#000080');
})

   // is an event that is sent to an element when the pointer is over the element 
// and the mouse button is released
$("#myDiv").mouseup(function() {
    $(this).css('backgroundColor','#483d8b ')
});



const $firstImage = $('.col-3-picture-1');

const $secondImage = $('.col-3-picture-2');

// Body backgroundColor 
$(document.body).css('backgroundColor','black');


// Image styling 

$firstImage.click(function() {
    $firstImage.css('border' ,'1px solid aqua');
    console.log('You selected first image !');
});

$secondImage.click(function() {
   $secondImage.css('border','1px solid red');
   console.log('Hi');
});

console.log($firstImage);







// Hide text under logo
$('.show-logo').css('display','none');
console.log($('.show-logo'));

// Hide logo with jquery
function hideLogo() {
    $('.footer-image-logo').hide(); 
    $('.show-logo').css('display','block');
}
$('.footer-image-logo').click(hideLogo);

// Show logo with jquery
function showLogo() {
    $('.footer-image-logo').show();
    $('.show-logo').css('display','none');
}
// calling the function show logo when text is clicked 
$('.show-logo').click(showLogo);



// Press enter to hide offer

var ImageTrigger = false;

$(".offer").hide(function(){

    $(document).keypress(function(e){

        if(ImageTrigger === false){
            $('.offer').fadeIn(500);
            ImageTrigger = true;

        }
        else if(ImageTrigger === true){
            $('.offer').fadeOut(500);
            ImageTrigger = false;
        }
    
})});


