$(function()
{

    $('li')
        .click(function()
        {
            alert(1);
        });
});

function TodoEnd(arg){

    alert("タスク完了おめでとうございます！！");
    arg = document.getElementById(arg);
    $(arg).remove();
     
}

function add()
{
    var addDetail = $('#addText')
        .val();
    myNavigator.popPage('ToDoMain.html');
    $("ul")
        .append('<li id="'+ addDetail  +'"  class="list__item list__item--tappable" onclick="TodoEnd(id)">' + addDetail + '</li>')
}