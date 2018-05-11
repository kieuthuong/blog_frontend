

$(document).on('click','.read button',function(){
	$('.read').removeClass('show');
	$('.read-infor').addClass('show');
	
})
$(document).ready(function(event) {
    $('form[name=comment]').submit(function(event){
        event.preventDefault();
    });
});
var a=1;
$(document).on('click','#button-cmt',function(){
	var x1=$('#yourName').val();
	var x2=$('#yourMail').val();
	var x3=$('#yourMessege').val();
	if(x1!='' && x2!='' && x3!=''){
		$('#box-comment').append("<div class='row' style='margin: 30px'><div class='col-xs-2' style='text-align: right;'><img src='images/law.jpg' class='img-circle' width='75px' height='75px'></div><div class='col-xs-10'><span style='font-size: 30px;font-weight: bold;'>"+x1+"</span><span style='float: right;'>Vừa xong  <span style='color: #f03c0b'>Reply</span></span><hr>"+x3+"</div></div>");
		$('#number-comment').html("("+a+")");
		$('#numbers-comment').html(""+a+"");
		a++;
	}
	
})
