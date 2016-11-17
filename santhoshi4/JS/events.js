$(document).ready(function(){
    $(".divClick").one({
      click:function(){
      var player1=$("#play1").hasClass("perDiv1");
      console.log(player1);
      var player2=$("#play2").hasClass("perDiv1");
      console.log(player2);
      var id=this.id;
      console.log(id);
      if(player1){
        $("#play1").toggleClass("perDiv1");
        $("#play2").toggleClass("perDiv1");
        $("#"+id).parent().addClass("perDiv2");
        $("#"+id).text("*");
      }
      if(player2){
        $("#play2").toggleClass("perDiv1");
        $("#play1").toggleClass("perDiv1");
        $("#"+id).parents().addClass("perDiv2");
        $("#"+id).text("#");
      }
    },
    mouseenter:function(){
      var id=event.currentTarget.id;
      console.log(id);
      alert("you entered into div having id"+"#"+id);
    },
    mouseleave:function(){
      var id=event.currentTarget.id;
      console.log(id);
      alert("you left from div having id"+"#"+id);
    }
    });

});
