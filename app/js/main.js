$(function () {
	$('.blog-publication__slider').slick({
		prevArrow: '<button type="button" class="blog-publication__slick-prev"><svg><use xlink:href="images/sprite.svg#icon-angle-left"></use></svg></button>',
		nextArrow: '<button type="button" class="blog-publication__slick-next"><svg><use xlink:href="images/sprite.svg#icon-angle-left"></use></svg></button>',
		infinite: false,

	});

	$('.product-tabs__top-item').on('click', function (e) {   //ТАБЫ//
		e.preventDefault();  //Отключаем нажатие (переход) по ссылке//
		$('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
		$(this).addClass('product-tabs__top-item--active');

		$('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
		$($(this).attr('href')).addClass('product-tabs__content-item--active');
	});

	$('.product-slide__thumb').slick({
		asNavFor: '.product-slide__big',    //соединить 2 слайдера между собой//
		focusOnSelect: true,
		slidesToScroll: 1,
		slidesToShow: 4,
		vertical: true,
		draggable: false
	});

	$('.product-slide__big').slick({
		asNavFor: '.product-slide__thumb',  //соединить 2 слайдера между собой//
		draggable: false,
		fade: true,
		arrows: false,

		responsive: [
			{
				breakpoint: 1230,
				settings: {
					draggable: true
				}
			},
		]
	});



	$('.shop-content__btn').on('click', function () {
		$('.shop-content__btn').removeClass('shop-content__btn--active');
		$(this).addClass('shop-content__btn--active');
	});

	$('.btn-list').on('click', function () {
		$('.main-card').addClass('main-card--list');
		$('.shop-content__item').addClass('shop-content__item--list')
		$('.shop-content__products').addClass('shop-content__nogrid')
	});

	$('.btn-grid').on('click', function () {
		$('.main-card').removeClass('main-card--list');
		$('.shop-content__item').removeClass('shop-content__item--list')
		$('.shop-content__products').removeClass('shop-content__nogrid')
	});

	$('.btn--filter').on('click', function () {
		$('.shop__filters').slideToggle();
	});

	$('.select-style, .product-one__num').styler();

	$('.filter-price__input').ionRangeSlider({
		type: "double",
		prefix: "$",
		onStart: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
		onChange: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
	});

	$('.main-slider__wrapper').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000
	});

	$('.star').rateYo({
		starWidth: "17px",
		normalFill: "#ccccce",
		ratedFill: "#ffc35b",
		readOnly: true,
		"starSvg": `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		viewBox="0 0 329.942 329.942" style="enable-background:new 0 0 329.942 329.942;" xml:space="preserve">
 <path id="XMLID_16_" d="M329.208,126.666c-1.765-5.431-6.459-9.389-12.109-10.209l-95.822-13.922l-42.854-86.837
	 c-2.527-5.12-7.742-8.362-13.451-8.362c-5.71,0-10.925,3.242-13.451,8.362l-42.851,86.836l-95.825,13.922
	 c-5.65,0.821-10.345,4.779-12.109,10.209c-1.764,5.431-0.293,11.392,3.796,15.377l69.339,67.582L57.496,305.07
	 c-0.965,5.628,1.348,11.315,5.967,14.671c2.613,1.899,5.708,2.865,8.818,2.865c2.387,0,4.784-0.569,6.979-1.723l85.711-45.059
	 l85.71,45.059c2.208,1.161,4.626,1.714,7.021,1.723c8.275-0.012,14.979-6.723,14.979-15c0-1.152-0.13-2.275-0.376-3.352
	 l-16.233-94.629l69.339-67.583C329.501,138.057,330.972,132.096,329.208,126.666z"/>
 </svg>`,


	});

	$('.comment-form__star').rateYo({
		fullStar: true,
		starWidth: "19px",
		normalFill: "#ccccce",
		ratedFill: "#ffc35b",
		rating: 1,
		"starSvg": `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		viewBox="0 0 329.942 329.942" style="enable-background:new 0 0 329.942 329.942;" xml:space="preserve">
 <path id="XMLID_16_" d="M329.208,126.666c-1.765-5.431-6.459-9.389-12.109-10.209l-95.822-13.922l-42.854-86.837
	 c-2.527-5.12-7.742-8.362-13.451-8.362c-5.71,0-10.925,3.242-13.451,8.362l-42.851,86.836l-95.825,13.922
	 c-5.65,0.821-10.345,4.779-12.109,10.209c-1.764,5.431-0.293,11.392,3.796,15.377l69.339,67.582L57.496,305.07
	 c-0.965,5.628,1.348,11.315,5.967,14.671c2.613,1.899,5.708,2.865,8.818,2.865c2.387,0,4.784-0.569,6.979-1.723l85.711-45.059
	 l85.71,45.059c2.208,1.161,4.626,1.714,7.021,1.723c8.275-0.012,14.979-6.723,14.979-15c0-1.152-0.13-2.275-0.376-3.352
	 l-16.233-94.629l69.339-67.583C329.501,138.057,330.972,132.096,329.208,126.666z"/>
 </svg>`,
	});

	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const days = Math.floor(total / (1000 * 60 * 60 * 24));

		return {
			total,
			days,
			hours,
			minutes,
			seconds
		};
	}

	function initializeClock(id, endtime) {
		const clock = document.querySelector('.promo-clock');
		const daysSpan = clock.querySelector('.promo__days');
		const hoursSpan = clock.querySelector('.promo__hours');
		const minutesSpan = clock.querySelector('.promo__minutes');
		const secondsSpan = clock.querySelector('.promo__seconds');

		function updateClock() {
			const t = getTimeRemaining(endtime);

			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}

		updateClock();
		const timeinterval = setInterval(updateClock, 1000);
	}

	const deadline = $('.promo-clock').attr('data-time');
	initializeClock('promo-clock', deadline);

	let map;

	function initMap() {
		map = new google.maps.Map(document.getElementById("map"), {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 8,
		});
	}

	window.initMap = initMap;



});


let buttonClose = document.querySelector('.btn-close');
let menuActive = document.querySelector('.menu');

buttonClose.onclick = function () {
	menuActive.classList.toggle('menu--active');
	buttonClose.classList.toggle('btn-close--active');
}