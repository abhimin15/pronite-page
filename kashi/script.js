$(document).ready(function(){
    $(".comment_div").hide();
   
	$(".comment_btn").click(function(){
		$(".comment_div").toggle();
	});
    
});

$(".read_comments_btn").click(function(){
		$(".previous_comments").toggle();
	});
	$(document).ready(function(){
    $("#reply_reply").hide();
   
	$(".btn_reply").click(function(){
		$("#reply_reply").toggle();
		$(this).hide();
	});
    
});



	$(function(){
	var current=0;
	var x='margin-left';
	var interval;
	function startslider(){
	interval=setInterval(function(){
		if(current < 2){
			$(".slides").animate({'margin-left':'420'}, 4000);//, function(){
			current++;
			console.log(current);
		}else if(current<4)
		{
			$(".slides").animate({'margin-left':'+=420'}, 4000);//, function(){
			current++;
			console.log(current);                
		}
		else
		{
		current=0;
		}
		
		
		
},6000)
}
function stopslider()
{
clearInterval(interval);
}
$('.slides').on('mouseenter',stopslider).on('mouseleave',startslider);
startslider();
});

/*$(document).ready(function(){

	$('#button_left').on('click',function(){
    $('.slides').animate({'margin-left':'-420px'},300);},300);
	});

	$('#button_right').on('click',function(){
    $('.slides').animate({'margin-left':'420px'},300);},300);
	});
});
/*
function leftslide()
  {
  	$('#button_left').on('click',function(){
    $('.slides').animate({'margin-left':'-420px'},300);},300);
	});

  }
 function rightslide()
  {
  	$('#button_left').on('click',function(){
    $('.slides').animate({'margin-left':'-420px'},300);},300);
	});

  } 
  */