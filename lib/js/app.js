function hola(){
	console.log("Hola Beto")
}

hola();
var swiper= new Swiper('.swiper-container',{
	loop:true,
	autoplay:3000
});

//****************** Boton sing up ********************
$('#btn-signup').click(function(){
	$('.Popup').css({
		'z-index':'100',
		'background':'rgba(0,0,0,0.85)'
	})
})

$('.Popup').click(function(e){
	if(e.target != this) return;
	$('.Popup').css({
		'z-index':'-1',
		'background':'transparent'
	})
});

//****************** Boton login ********************
$('#btn-login').click(function(){
	$('.Popup-login').css({
		'z-index':'100',
		'background':'rgba(0,0,0,0.85)'
	})
})

$('.Popup-login').click(function(e){
	if(e.target != this) return;
	$('.Popup-login').css({
		'z-index':'-1',
		'background':'transparent'
	})
});