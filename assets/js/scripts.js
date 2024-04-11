let urlParams = new URLSearchParams(window.location.search);
let urlParamLang = urlParams.get('lang');
let langJson;
if(urlParamLang = "th") {
	if(urlParamLang != 'th' && urlParamLang != 'en' && urlParamLang != 'vn' && urlParamLang != 'inr' && urlParamLang != 'krw' && urlParamLang != 'cn' && urlParamLang != 'mycn' && urlParamLang != 'id' && urlParamLang != 'jpy') {
		urlParamLang = 'en';
	}
	fetchLangJson(urlParamLang);
}
else if (urlParamLang == null || urlParamLang == "") {
	fetchLangJson("en");
}
else {
	$.get("https://ipinfo.io", function(response) {
		let detectedCountry = response.country;
		switch(detectedCountry.toLowerCase()) {
			case 'id':
				langJson = 'id';
				break;
			case 'inr':
				langJson = 'inr';
				break;
			case 'vn':
				langJson = 'vn';
				break;
			case 'th':
				langJson = 'th';
				break;
			case 'cn':
				langJson = 'cn';
				break;
			case 'mycn':
				langJson = 'mycn';
				break;
			case 'krw':
				langJson = 'krw';
				break;
			case 'jpy':
				langJson = 'jpy';
				break;
			default:
				langJson = 'id';
				break;
		}
		fetchLangJson(langJson);
	}, "jsonp");
}

// fetchLangJson("th");

function fetchLangJson(country) {
	$('.header__langs .sel-lang').prepend('<img src="assets/images/flags/'+country+'.svg">');
	$('body').attr('data-lang', country);
	$.ajax({
		url: "assets/js/langcontent/"+country+".json",
		type: 'GET',
		cache: false,
		dataType: 'json',
		success: function(result) {
			Object.entries(result).map(obj => {
				const key   = obj[0];
				const value = obj[1];
				$('[data-txt="'+key+'"]').html(value);
				$('[data-cta="'+key+'"]').attr('href', value);
			});
		},
		error: function() {
			alert("No");
		}
	});
}

// tnc content
const tncContent = document.querySelector('.tnc__content');
setTimeout(function(){
	if ( $('body').attr('data-lang') === 'en' ) {
		tncContent.innerHTML = tncEN;
	}
	if ( $('body').attr('data-lang') === 'id' ) {
		tncContent.innerHTML = tncID;
	}
	if ( $('body').attr('data-lang') === 'cn' ) {
		tncContent.innerHTML = tncCN;
	}
	if ( $('body').attr('data-lang') === 'mycn' ) {
		tncContent.innerHTML = tncMYCN;
	}
	if ( $('body').attr('data-lang') === 'th' ) {
		tncContent.innerHTML = tncTH;
	}
	if ( $('body').attr('data-lang') === 'vn' ) {
		tncContent.innerHTML = tncVN;
	}
	if ( $('body').attr('data-lang') === 'krw' ) {
		tncContent.innerHTML = tncKRW;
	}
	if ( $('body').attr('data-lang') === 'jpy' ) {
		tncContent.innerHTML = tncJPY;
	}
	if ( $('body').attr('data-lang') === 'inr' ) {
		tncContent.innerHTML = tncIN;
	}
}, 1000)

function toggleTnc() {
	$('.tnc__head').toggleClass("active");
	$('.to-top').toggleClass("active");
	$('.tnc__content').slideToggle();
}
$('.content__banner__tnc, .tnc__head').click(function(){
	toggleTnc();
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".tnc").offset().top 
	}, 500);
});
$(".to-top .btn").click(function() {
	toggleTnc();
	$([document.documentElement, document.body]).animate({
			scrollTop: $("body").offset().top 
	}, 500);
});

// slider - swiper
setTimeout(function(){
      
	var sliderSports = new Swiper(".swiper--sports", {
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
		slidesPerView: "auto",
		breakpoints: {
			320: {
				spaceBetween: 8,
			},
			960: {
				spaceBetween: 16
			}
		}
	});
}, 1000);

$(window).on('scroll', function() {
	if ($(window).scrollTop() >= $('.content__tiles').offset().top + $('.content__tiles').
		outerHeight() - window.innerHeight) {
		$(".content__teaser").fadeIn();
	} else {
		$(".content__teaser").fadeOut();
	}
});

// For the accordion
const faqs = document.querySelectorAll('.option-hover');
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("roll-active");
    })
})