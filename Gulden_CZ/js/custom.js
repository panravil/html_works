$(document).ready(function(){   
    $('.nav-icon').click(function(e){
           e.stopPropagation();
			$(".nav_bg nav").slideToggle();
			$(".nav-icon").toggleClass('open');
		});
    
     $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
     
/*------Matchheight------------*/
     $('ul li div.coin').matchHeight();  
    	
/*--------Sticky header----------*/
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     var windowWidth=$(window).width();
if (scroll >= 1 && windowWidth>=768) {
         
      $(".main_head").addClass("sticky");
    } else
        {
            $(".main_head").removeClass("sticky");
        }
});	
    
/*----------Slider------------*/   
 $('.slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots:true,
          fade: true,
        });
/*----------Slider with tab------------*/   
$('.komp2 .referans').slick({
		slide : '.referans .komp-item',
		arrows: true,  dots:false,
        infinite: true,
        speed: 300, 
        slidesToShow: 4,
        slidesToScroll: 1,
	});
    
    $(".tab_slider .tab_content").hide();
    $(".tab_slider .tab_content:first").show();

    // start here
	$('.tab_slider ul.tabs li').click(function(){
        
        $('.responsiveOne').resize();
        $('.responsiveTwo').resize();
        
      $(".tab_slider .tab_content").hide();
      var activeTab = $(this).attr("rel");
      $("#"+activeTab).fadeIn();
        
        
		$('.tab_slider ul.tabs li').removeClass('active');// Remove active-title link
		$(this).addClass('active'); // Add Active Clicked element
		var activeIndex = $(this).index(); // Take clicked elemnt's index
		$('.referans').removeClass('active-slider'); // Remove class other elements
		$('.referans').eq(activeIndex).addClass('active-slider'); // Show Slider
		$('.slick-dots').remove(); // reinit cloned slick-dots so remove others
		$('.komp2 .referans').slick('reinit');// Restart Slider
		printActive(); sliderLength();
        
        $(".tab_drawer_heading").removeClass("d_active");
	   $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	});

     // start here
    $(".plan_table .tab_content").hide();
    $(".plan_table .tab_content:first").show();
    
	$('.plan_table ul.tabs li').click(function(){
        
        $('.responsiveOne').resize();
        $('.responsiveTwo').resize();
        
      $(".plan_table .tab_content").hide();
      var activeTab = $(this).attr("rel");
      $("#"+activeTab).fadeIn();
        
        
		$('.plan_table ul.tabs li').removeClass('active');// Remove active-title link
		$(this).addClass('active'); // Add Active Clicked element
		var activeIndex = $(this).index(); // Take clicked elemnt's index
		$('.referans').removeClass('active-slider'); // Remove class other elements
		$('.referans').eq(activeIndex).addClass('active-slider'); // Show Slider
		$('.slick-dots').remove(); // reinit cloned slick-dots so remove others
		$('.komp2 .referans').slick('reinit');// Restart Slider
		printActive(); sliderLength();
        
        $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	});
    
   
    
	// do slider after change
	$('.komp-slider, .referans').on('afterChange', function(e, slick, currentSlide, nextSlide) {
		printActive();
	});

	// Take Slider lentgh
	sliderLength();
	function sliderLength(){
		$('.komp-slider .komp-item:visible').each(function(i){		
			if (i < 9) {
				var dd = i+1;
				$('.max-slide').text('0' + dd)		
			}else if (i >= 9 ){
				$('.max-slide').text(i+1)
			}
		});
	};

	// Take active slide's index nad print
	printActive();
	function printActive (){
		var takeActive = $('.active-slider .slick-active').attr('data-slick-index');
		var converted = parseInt(takeActive) + 1;
		$('.here-slide').text('0' + converted).fadeIn();
		if (takeActive >= 9) {
			$('.here-slide').text(converted);
		}
	}
/*----------DataTable------------*/   
$('#example').DataTable();   
$('#example1').DataTable();
$('#example2').DataTable();
/*----------logo_slider------------*/      
  $('.logo_slider').slick({
          slidesToShow: 8,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,  
          variableWidth: true
        });  
    
  });
	


