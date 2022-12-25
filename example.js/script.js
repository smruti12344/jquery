// to change the text
$('#para2').text('pupun');
// hide element
// $('id name').hide(); used to hide element
// $('#para2').hide();

// to increase width
// $('#para1').width('50px');

// to edit css tag using object ways
$('#para1').css({
    fontSize:"30px",
    color:"red",
    fontWeight:"bold",
    textAlign:"center"

});
$('div').css({
    width:"100px",
    height:"100px",
    backgroundColor:"cyan"
});
// to increase the width of box using jquery
$('div').click(function(){
    // alert("box clicked");
    var element= $(this);
    element.width(element.width()+10+"px");
});
// $('div').hover(function(){
//     backgroundColor:"orange"
// })

// edit using tag
$('h1').text('lipu');

// $('h1').hide(5000);
// $('p').html("hello<i> <b>world!</b></i>");
// $('p').remove();

// // process to add class
// $('p').addClass('class');
// $('.class').css({
//     backgroundColor:"blue"
// });
// $('p').removeClass("class");


// $('.class').css({
//     backgroundColor:"orange"
// });
('p').toggleClass("class");

$('.class').css({
        backgroundColor:"orange"
    });
