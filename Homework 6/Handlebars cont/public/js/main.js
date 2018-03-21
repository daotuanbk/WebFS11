var character = 200;

console.log($("#character"))

$(document).ready(function() {
    $('#questionInput').keydown(function(){
            var $char = $("#character");
            character--;
            $char.html(character);
    })
})