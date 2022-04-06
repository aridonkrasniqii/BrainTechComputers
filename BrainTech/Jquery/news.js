




const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

let  date = new Date();

var dataSot = date.getHours() + " " + monthNames[date.getMonth()]+ " " + date.getFullYear();
 


// first hide news 
const hideLastNews = () => $('.last-news-rows').css('display','none');

    hideLastNews();

// storing show news button container

const showNewsContainerButton = document.querySelector('.show-more-button');

console.log(showNewsContainerButton)

showNewsContainerButton.setAttribute('style','display: flex; justify-content: center; margin:0 0 20px 0');

console.log(showNewsContainerButton.innerHTML);


const addAttribute = function (element,atrribute, value) {
    element.setAttribute(atrribute,value);
}

addAttribute(document.querySelector('.first-1'), 'id','show-more-button-text');

console.log(document.querySelector('.first-1'));



$("#news-4-1").click(function(){
    $("#div-2").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
}); 


    
    $("#hide").click(function(){
        $("#row-news-1").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        }); //callback
        $("#row-news-1").hide("slow", function(){
            alert("The article is hidden");
          });
    });
    
   


const showMoreNews = function() {

    if($('#show-more-button-text').text() == 'Show Less News...'){
        document.querySelector('#show-more-button-text').textContent = "Show More News...";

        $('.last-news-rows').fadeOut("slow");
        console.log('If statement executed ');
        return;
    }
    
    $('.last-news-rows').fadeIn("slow");
    
    $('#show-more-button-text').text("Show Less News...");//Set

}
    $('#show-more-button').click(showMoreNews);



const addContentToNewsSection = function(date, title, decription) {

    $("#last-news-date").text(" ");

    $("#last-news-date").append(date);

    $("#last-news-title").text(title);

    $("#last-news-paragraph").prepend(decription);

}

let title = `Lenovo Becomes the Preferred Workstation Innovation Partner for DreamWorks Animation`;

let description = `DreamWorks Animation will use Lenovo’s high-performance ThinkStation and ThinkPad P Series`;

let dataOf = dataSot;

addContentToNewsSection(dataOf, title,description);




