$(".step").click( function() {
$(this).addClass("active").prevAll().addClass("active");
$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
$("#line-progress").css("width", "2%");
$(".pazdziernik").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
$("#line-progress").css("width", "13.5%");
$(".listopad").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
$("#line-progress").css("width", "28%");
$(".grudzien").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
$("#line-progress").css("width", "41.5%");
$(".styczen").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
$("#line-progress").css("width", "56%");
$(".luty").addClass("active").siblings().removeClass("active");
});

$(".step06").click( function() {
$("#line-progress").css("width", "70.5%");
$(".marzec").addClass("active").siblings().removeClass("active");
});

$(".step07").click( function() {
$("#line-progress").css("width", "85%");
$(".kwiecien").addClass("active").siblings().removeClass("active");
});

$(".step08").click( function() {
$("#line-progress").css("width", "100%");
$(".maj").addClass("active").siblings().removeClass("active");
});
