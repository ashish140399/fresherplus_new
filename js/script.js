
$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});




$(document).ready(function() {
        
        $('.Returnship_btnfaq').click(function (e) {
          e.preventDefault();
          scrollToElement('FAQ.html#FAQ_Returnship', 5000);
        });

      
    });





