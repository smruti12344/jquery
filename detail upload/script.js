$('body').height(window.innerHeight-10);

var items = $('#items');

$('form button').click(function(e){

    let roll = $('#roll');
    let name = $('#name');
    let mark = $('#mark');

    let rollval = roll.val();
    // console.log(rollval);
    let nameval = name.val();
    let markval = mark.val();

    e.preventDefault();

    if(rollval=="" || nameval=="" || markval==""){
        alert("please fill all the box");
    }
    else{
        let item = '<div class="item">Roll no - <span class="highlight">'+ rollval + '</span> , <span class="highlight">'+nameval+'</span> has score<span class="highlight">'+markval+ '</span> marks</div>';
       console.log(rollval)
        console.log(item);
        items.append(item);

        roll.val("");
        name.val("");
        mark.val("");

    }
});
