$(function() {

    $("#wrap>#header>#gnb>#mainMenu>li:nth-child(2)>span")
    .siblings("ul")
    .children("li")
    .first()
    .children("span")
    .css({"color":"#f00"})
    .end()

    .parent("#mainMenu")
    .find("span")
    .css({"color":"08f"})

});
