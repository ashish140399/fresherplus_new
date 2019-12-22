//Pointing to contact START
$('.hb_toggle').css("display","none");
	var jump=function(e)
{
   if (e){
       e.preventDefault();

       var target = $(this).attr("href");
   }else{
       var target = location.hash;
   }

   $('html,body').animate(
   {
       scrollTop: $(target).offset().top
   },9000,function()
   {
       location.hash = target;
       
   });

}

$('html, body').hide();

$(document).ready(function()
{
    $('a[href^="#"]').on("click", jump);


    if (location.hash){
        setTimeout(function(){
            $('html, body').scrollTop(0).show();
            jump();
        }, 5000);
    }else{
        $('html, body').show();
    }
});
//Pointing to contact END


$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});