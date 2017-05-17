$(document).ready(function(){


$('.zSign').click(function(){
	var sign = undefined;
	var sign2 = undefined;
	var self = this;
	$(this).addClass('selected');
	if ($('.selected').length==1) {
		sign = $('.selected')[0].id;
		sign2 = undefined;
		getHoroscope(sign);
		$('#instructions')[0].innerHTML = 'Select another sign';
		$('#reset').css('display', 'block');
	} else if ($('.selected').length==2) {
		sign = $('.selected')[0].id;
		sign2 = $('.selected')[1].id;
		getCompatibility(sign, sign2, self)
	}
})

$('#reset').click(function(){
	$('.compatibility').css('display', 'none');
	$('#reset').css('display', 'none');
	$('#innerCircle img').css('display', 'block');
	$('#innerCircle h3').css('display', 'none');
	$('#innerCircle p').css('display', 'none');
	$('#instructions').css('display', 'block');
	$('#instructions')[0].innerHTML = 'Select your Zodiac sign';
	$('.selected').removeClass('selected');
})

function getHoroscope(sign){
	$.ajax({
		url: 'https://node-horoscopes.herokuapp.com/api/horoscopes/today/'+sign,
		success: function(response){
			$('#innerCircle img').css('display', 'none');
			$('#innerCircle h3').css('display', 'block');
			$('#innerCircle p').css('display', 'block');
			$('#innerCircle p')[0].innerHTML = response.horoscope;
		},
		error: function(error){
			alert(error);
		}
	})
}

function getCompatibility(sign, sign2, title){
	$.ajax({
		url: 'https://node-horoscopes.herokuapp.com/api/horoscopes//dating/'+sign+'/'+sign2,
		success: function(response){
			$('#instructions').css('display', 'none');
			$('.compatibility').css('display', 'block');
			$('.compatibility span')[0].innerHTML = title.id[0].toUpperCase()+title.id.slice(1);
			$('.compatibility')[1].innerHTML = response.text;
		},
		error: function(error){
			alert(error);
		}
	})
}










































});