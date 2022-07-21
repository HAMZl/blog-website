$(document).ready(function(){

   // put jQuery code here
   $(".quote-extra").hide();
   $("#creative-sole-art").hide();
   $("#thug-rose-art").hide();
   $("#gun-n-rose-art").hide();
   $(".blog-details-1").hide();
   $(".blog-details-2").hide();
   $(".blog-details-3").hide();
   $(".blog-details-4").hide();
   $(".blog-details-5").hide();
   $(".blog-details-6").hide();
   $(".fullName").hide();
   $("#blog-link").mouseenter(function(){
     $("#blog-titles").show();
     $("#blog-link a").css("color", "black");
   });
   $("#blog-titles").mouseenter(function(){
     $("#blog-titles").show();
     $("#blog-link").css("backgroundColor", "white");
     $("#blog-link a").css("color", "black");
   });
   $("#blog-link").mouseleave(function(){
     $("#blog-titles").hide();
     $("#blog-link a").css("color", "white");
   });
   $("#blog-titles").mouseleave(function(){
     $("#blog-titles").hide();
     $("#blog-link").css("backgroundColor", "#1F1F1F");
     $("#blog-link a").css("color", "white");
   });
   $("#more-quotes").on("click", function(){
     $("#more-quotes").hide();
     $(".quote-extra").slideDown();
   });
   $("#red-rose").on("click", function(){
     $("#red-rose-art").fadeIn();
     $("#creative-sole-art").hide();
     $("#thug-rose-art").hide();
     $("#gun-n-rose-art").hide();
   });
   $("#creative-sole").on("click", function(){
     $("#red-rose-art").hide();
     $("#creative-sole-art").fadeIn();
     $("#thug-rose-art").hide();
     $("#gun-n-rose-art").hide();
   });
   $("#thug-rose").on("click", function(){
     $("#red-rose-art").hide();
     $("#creative-sole-art").hide();
     $("#thug-rose-art").fadeIn();
     $("#gun-n-rose-art").hide();
   });
   $("#gun-n-rose").on("click", function(){
     $("#red-rose-art").hide();
     $("#creative-sole-art").hide();
     $("#thug-rose-art").hide();
     $("#gun-n-rose-art").fadeIn();
   });
   $(".details-button-1").on("click", function(){
      $(".blog-details-1").slideToggle();
   });
   $(".details-button-2").on("click", function(){
      $(".blog-details-2").slideToggle();
   });
   $(".details-button-3").on("click", function(){
      $(".blog-details-3").slideToggle();
   });
   $(".details-button-4").on("click", function(){
      $(".blog-details-4").slideToggle();
   });
   $(".details-button-5").on("click", function(){
      $(".blog-details-5").slideToggle();
   });
   $(".details-button-6").on("click", function(){
      $(".blog-details-6").slideToggle();
   });
   $("#response").on("keyup", function(){
     $("#response").focus();
     let remaining = 280 - $("#response").val().length;
     $(".characters").html(remaining);
   });
   $("#special").on("click", function(){
     let fullName = $("#first-name").val() + " " + $("#last-name").val();
     let font = $("#font").val();
     let fontSize = $("#font-size").val() + "PX";
     let fontWeight = $("#font-weight").val();
     $(".fullName").css("font", font);
     $(".fullName").css("font-size", fontSize);
     $(".fullName").css("font-weight", fontWeight);
     $(".fullname").html(fullName);
     $(".fullname").slideDown();
   });
   $("#current-location").on("click", function(){
     $("#current-location").hide();
     $("#location-description").hide();
   });
   $("#text").on("keyup", function(){
     $("#text").focus();
     let remaining = 280 - $("#text").val().length;
     $(".characters-text").html(remaining);
     $("#text-result").html($("#text").val());
   });
   $("#font").on("change", function(){
     $("#text-result").css("font-family", $("#font").val());
   });
   $("#font-size").on("keyup", function(){
     $("#text-result").css("font-size", $("#font-size").val() + "PX");
   });
   $("#font-weight").on("change", function(){
     $("#text-result").css("font-weight", $("#font-weight").val());
   });
});
