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


	let iframeVkApi = document.querySelector("#vkwidget1");
	console.log(iframeVkApi);
	let iframeDocument = iframeVkApi.contentDocument || iframeVkApi.contentWindow.document;
	console.log(iframeDocument);
	let iframeVkApiKek = async function (iframeVkApi) {
		await console.log(iframeVkApi);
		await console.log(iframeVkApi.contentDocument.querySelector(div));
	};

	let template = {
		article :`<article class="oldSingleArticle">
<img class="oldArticleImg" src="./img/ `${}`" alt="">
<div>
<a href="" class="oldSingleArticle_title"></a>
<p class="oldSingleArticle_description"></p>
</div>
</article> `
	}

};


