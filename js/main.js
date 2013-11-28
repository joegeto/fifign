!function() {

    // Item on click
    $("body").on("click", ".item", function() {
    
       $("#" + $(this).attr("id") + "-large")
            .css("display", "block")
            .animate({width: "686px"}, 250);
       
    });
    
    // Close button on click
    $("body").on("click", ".close-button", function() {
    
        $(".item-large").animate({width: "0px"}, 250, function () {
            
            $(this).css("display", "none");
             
        });
        
    });
    
}();
