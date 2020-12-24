window.onload = function () {
	let menuButton = document.querySelector("#menu");
	menuButton.addEventListener("click", function () {
		menuButton.classList.toggle("hamburger-active");
	});

	document.getElementById("menu").onclick = function () {
		open()
	};

	function open() {
		document.getElementById("navigationMenu").classList.toggle("active");
	}

	let swiper = new Swiper('.swiper-container', {
		spaceBetween: 10,
		mousewheel: false,
		clickable: true,
		breakpoints: {
			100: {
				direction: 'vertical',
				slidesPerView: 1,
				slidesPerGroup: 1,
				autoHeight: true,
				loop: true,
			},
			566: {
				direction: 'vertical',
				slidesPerView: 2,
				slidesPerGroup: 1,
				loop: true,

			},

			830: {
				direction: 'horizontal',
				slidesPerGroup: 1,
				slidesPerView: 3,
				autoHeight: true,
				loop: true,
				pagination: {
					dynamicBullets: true,
					el: '.swiper-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						// console.log(index);
						if (index >= 4) {

						} else {
							return '<span class="' + className + '">' + (index + 1) + '</span>';
						}
					},
				},
			},
		}

	});


	let iframeVkApi = document.querySelector("#vkwidget1");
	console.log(iframeVkApi);
	let iframeDocument = iframeVkApi.contentDocument || iframeVkApi.contentWindow.document;
	console.log(iframeDocument);





};
let iframeVkApiKek = async function (iframeVkApi) {
	await console.log(iframeVkApi);
	await console.log(iframeVkApi.contentDocument.querySelector(div));
};
