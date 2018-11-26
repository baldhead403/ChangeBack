$(document).ready(function () {
    $("#red").on("click",function () {
        $("body").removeClass()
        $("body").addClass("red")
    });
    $("#lightgrey").on("click",function () {
        $("body").removeClass()
        $("body").addClass("lightgrey")
    });
    $("#green").on("click",function () {
        $("body").removeClass()       
       $("body").addClass("green")
    });
    $("#yellow").on("click",function () {
        $("body").removeClass()
        $("body").addClass("yellow")
    });
    $("#purple").on("click",function () {
        $("body").removeClass()
        $("body").addClass("purple")
        
    });
    $("#orange").on("click",function () {
        $("body").removeClass()
        $("body").addClass("orange")
        
    });
    $("#goldenrod").on("click",function () {
        $("body").removeClass()
        $("body").addClass("goldenrod")
        
    });
    
    $("#textColor").on("click",function () {
        
        $("p").css("color", "chartreuse")
        $("p").css("font-size", "42px")
        
    });
    $("#textColor").dblclick(function () {
        $("p").css("color", "black")
        $("p").css("font-size", "18px")

    });

    
});