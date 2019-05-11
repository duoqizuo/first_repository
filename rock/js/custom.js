
 // Calling the function
$(function() {
    $('.toggle-nav').click(function() {
        toggleNav();
    });
}); 


// The toggleNav function itself
function toggleNav() {
    if ($('#container').hasClass('display-nav')) {
        // Close Nav
        $('#container').removeClass('display-nav');
    } else {
        // Open Nav
        $('#container').addClass('display-nav');
    }
}

$(function(){
	//鼠标事件
//背景打开/背景关闭及视频暂停



$(".brand_list_li_show_piture").mouseout(function(){
	$(".brand_list_li_show_piture").css("transform","matrix(1, 0, 0, 1, 0, 0)")
})
//li-1
//#li-1-1的图片展示onmouseover
$("#li-1-1").mouseover(function(){
	onMouseover_1();
})
function onMouseover_1(){
	$("#li-1,#li-1-2").css("display","none");
	$(".hide-1").css("display","block");
}
//onmouseout
$("#li-1-1").mouseout(function(){
	onMouseout_1();
})
function onMouseout_1(){
	$("#li-1,#li-1-2").css("display","block");
	$(".hide-1").css("display","none")
}

$("#li-1-1").mouseover(function(){
	$("#li-1-1").css("transform","matrix(0.983, 0, 0, 0.983, 0, 0)")
})
// #li-1-1的视频播放及背景打开
$("#li-1-1").click(function(){
	click_1();
})
function click_1(){
	$("#bg_black,.block_modal-1").css("display","block");
}

//li-2
//onmouseover
$("#li-2-2").mouseover(function(){
	onMouseover_2();
})
function onMouseover_2(){
	$("#li-2,#li-2-1").css("display","none");
	$(".hide-2").css("display","block");
	
}
//onmouseout
$("#li-2-2").mouseout(function(){
	onMouseout_2();
})
function onMouseout_2(){
	$("#li-2,#li-2-1").css("display","block");
	$(".hide-2").css("display","none");
}

$("#li-2-2").mouseover(function(){
	$("#li-2-2").css("transform","matrix(0.983, 0, 0, 0.983, 0, 0)")
})


//li-3
//onmouseover
$("#li-3-3").mouseover(function(){
	onMouseover_3();
})
function onMouseover_3(){
	$("#li-3,#li-3-1").css("display","none");
	$(".hide-3").css("display","block");
}
//onmouseout
$("#li-3-3").mouseout(function(){
	onMouseout_3();
})
function onMouseout_3(){
	$("#li-3,#li-3-1").css("display","block");
	$(".hide-3").css("display","none");
}

$("#li-3-3").mouseover(function(){
	$("#li-3-3").css("transform","matrix(0.983, 0, 0, 0.983, 0, 0)")
})

////li-4
//onmouseover
$("#li-4-4").mouseover(function(){
	onMouseover_4();
})
function onMouseover_4(){
	$("#li-4,#li-4-1").css("display","none");
	$(".hide-4").css("display","block");
}
//onmouseout
$("#li-4-4").mouseout(function(){
	onMouseout_4();
})
function onMouseout_4(){
	$("#li-4,#li-4-1").css("display","block");
	$(".hide-4").css("display","none");
}
$("#li-4-4").mouseover(function(){
	$("#li-4-4").css("transform","matrix(0.983, 0, 0, 0.983, 0, 0)")
})



// #li-1-1的视频播放及背景打开
$("#li-1-1").click(function(){
	click_1();
})
function click_1(){
	$(".block_modal-1").css("display","block");
}

$("#li-2-2").click(function(){
	click_2();
})
function click_2(){
	$(".block_modal-2").css("display","block");
}

$("#li-3-3").click(function(){
	click_3();
})
function click_3(){
	$(".block_modal-3").css("display","block");
}

$("#li-4-4").click(function(){
	click_4();
})
function click_4(){
	$(".block_modal-4").css("display","block");
}




//背景打开/背景关闭及视频暂停
$(".brand_list_li_show_piture").click(function(){
	$("#bg_black").css("display","block");
})
$("#bg_black-bar").click(function(){
	$("#bg_black,#block_modal").css("display","none");
	$('video').trigger('pause');
})


})


