$(document).ready(function(){

	// move the page to the center of the window upon resize and reload:
	$(window).load(function(){

		$("body").css({ position: 'absolute' });
		$("body").css({
			left: ($(window).width() - $("body").innerWidth()) / 2
		});
	});

	$(window).resize(function(){

		$("body").css({ position: 'absolute' });
		$("body").css({
			left: ($(window).width() - $("body").innerWidth()) / 2
		});
	});

	$(window).resize();


//------------------------------------------------------------------

	// number of menu tabs
	var menu_tabs = $("#main_menu").children().length;
	console.log(menu_tabs);
	// number of menu tabs with sub-menus
	var menu_w_sub = $("#main_menu li").children().length;
	console.log(menu_w_sub);

	var sub_menu_id = [];
	var sub_menu_len = [];
	// if we have more than one sub-menu, then:
	if (menu_w_sub>0) {
		for (i=0; i<menu_w_sub; i++) {
			// create the appropriate id:
			sub_menu_id[i] = "id"+i;
			console.log(sub_menu_id[i]);

	//		console.log($(".sub").attr("id"));
			// check if there is an id already, if not, assign a new one
			// id gets assigned on the li parent element
	//		if ( $(".sub").attr('id') == undefined ) {
	//			$(".sub").attr("id", sub_menu_id[i]);
	//		} else {break;}

			//sub_menu_len[i] = $(sub_menu_id).children().length;
			//console.log(sub_menu_len[i]);
		}
	}

//------------------------------------------------------------------

	// variable declaration	
	var menu_w_sub_height;	
	var menu_w_sub_width;
	var sub_width;
	var menu_w_sub_pos;

	var sub_left;

	// adjust the positions of each submenu relative to the other menu elements and nav bars position:
	for (i=0; i<menu_w_sub; i++) {
		// get height and width of menu tab
		menu_w_sub_height = $("#id"+i).height();
		menu_w_sub_width = $("#id"+i).width();
		
		// get width of the submenu
		sub_width = $("#id"+i+'-'+0).width();

		// adjust height of submenu
		menu_w_sub_height += 14;
		$("#id"+i+'-'+0).css("top",menu_w_sub_height);

		// get position of menu tab
		menu_w_sub_pos = $("#id"+i).position();

		// get left distance from the edge of menu tab 
		// and then adjust position from the left of submenu
		sub_left = menu_w_sub_pos.left;
		$("#id"+i+'-'+0).css("left",sub_left);
	}

//------------------------------------------------------------------	

	// create a fade-in, fade-out effect for the menu.
	$("#nav ul li.sub").hover(function(){
		$(this).children('ul').fadeIn();
		$(this).css({"opacity":'0.7', "border-color":'#00FFFF'});
	//	$(this).children('ul li').css({"opacity":'0.9'});

	},
		function(){
		$("#nav ul li.sub ul").hide();
		$("#nav ul li.sub").css({"opacity":'1.0', "border-color":'transparent'});
	//	$(this).children('ul li').css({"opacity":'1.0'});

	});

//------------------------------------------------------------------

	// create a fade-in, fade-out effect for the services.
	$(".buttonS").click(function(){
		var clicks = $(this).data('clicks');
		if (clicks) {
			// odd clicks
			$(this).css({"opacity":'1.0', "box-shadow":'3px 3px 5px grey'});
			$(this).next().fadeOut(1000);
		} else {
			// even clicks
			$(this).css({"opacity":'0.7', "box-shadow":'3px 3px 5px grey inset'});
			$(this).next().fadeIn(1000);
		}
		$(this).data("clicks", !clicks);
	});
	
}); 


//------------------------------------------------------------------	



function center() {
	//center the page both vertically and horizontally:
	// vertically:
	var window_height = window.innerHeight;
	var page_height = document.body.offsetHeight;
	var offset = (window_height - page_height )/ 2;
	console.log(offset);
	document.body.offsetTop = offset;
	
	// horizontally:
	var window_width = window.innerWidth;
	var page_width = document.body.offsetWidth;
	var offset2 = (window_width - page_width )/ 2;
	console.log(offset2);
	document.body.offsetLeft = offset2;

	}


// Facebook API
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];

	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
 	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

