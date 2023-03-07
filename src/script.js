function accordionInit() {
	const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

		accordionItemHeaders.forEach(accordionItemHeader => {
			accordionItemHeader.addEventListener("click", event => {

				// Uncomment in case you only want to allow for the display of only one collapsed item at a time!

				const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
				if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
					currentlyActiveAccordionItemHeader.classList.toggle("active");
					currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
				}

				accordionItemHeader.classList.toggle("active");
				const accordionItemBody = accordionItemHeader.nextElementSibling;
				if (accordionItemHeader.classList.contains("active")) {
					accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
				}
				else {
					accordionItemBody.style.maxHeight = 0;
				}

			});
		});
}


window.onload = () => {

	if (document.querySelector("#effect")) {
		document.querySelector("main").style = "background : linear-gradient(183deg, #f8f4ff 0%, rgb(209, 244, 250) 25%, rgb(234, 191, 241, 50%) 50%, rgb(0, 232, 147, 30%) 75%, rgba(248,244,255) 100%);"
		// txt-rotate
		var TxtRotate = function (el, toRotate, period) {
			this.toRotate = toRotate;
			this.el = el;
			this.loopNum = 0;
			this.period = parseInt(period, 10) || 2000;
			this.txt = '';
			this.tick();
			this.isDeleting = false;
		};

		TxtRotate.prototype.tick = function () {
			var i = this.loopNum % this.toRotate.length;
			var fullTxt = this.toRotate[i];

			if (this.isDeleting) {
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

			var that = this;
			var delta = 300 - Math.random() * 100;

			if (this.isDeleting) { delta /= 2; }

			if (!this.isDeleting && this.txt === fullTxt) {
				delta = this.period;
				this.isDeleting = true;
			} else if (this.isDeleting && this.txt === '') {
				this.isDeleting = false;
				this.loopNum++;
				delta = 500;
			}

			setTimeout(function () {
				that.tick();

			}, delta);
		};

		var elements = document.getElementsByClassName('txt-rotate');
		for (var i = 0; i < elements.length; i++) {

			var toRotate = elements[i].getAttribute('data-rotate');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtRotate(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
		document.body.appendChild(css);



		// carousel

		$(document).ready(function () {
			$("#news-slider").owlCarousel({
				items: 5,
				itemsDesktop: [1199, 3],
				itemsDesktopSmall: [980, 2],
				itemsMobile: [600, 1],
				navigation: true,
				navigationText: ["", ""],
				pagination: true,
				autoPlay: true,
				stopOnHover: true
			});
			$("#news-slider2").owlCarousel({
				items: 5,
				itemsDesktop: [1199, 3],
				itemsDesktopSmall: [980, 2],
				itemsMobile: [600, 1],
				navigation: true,
				navigationText: ["", ""],
				pagination: true,
				autoPlay: true,
				stopOnHover: true
			});
			$("#news-slider3").owlCarousel({
				items: 5,
				itemsDesktop: [1199, 3],
				itemsDesktopSmall: [980, 2],
				itemsMobile: [600, 1],
				navigation: true,
				navigationText: ["", ""],
				pagination: true,
				autoPlay: true,
				stopOnHover: true
			});
			$("#news-slider4").owlCarousel({
				items: 5,
				itemsDesktop: [1199, 3],
				itemsDesktopSmall: [980, 2],
				itemsMobile: [600, 1],
				autoPlay: true
			});

		});

		// étapes

		(function (exports) {
			'use strict';

			function PinterestGrid(options) {
				this.settings = Object.assign({
					delay: 100,
					shorterFirst: true,
					gutter: 6
				}, options);

				this.loaded = false;
				this.transform = _getTransformProperty();

				this.$container = options.container instanceof Node ?
					options.container :
					document.querySelector(options.container);

				if (!this.$container) {
					return false;
				}

				this.$itemCollection = options.item instanceof NodeList ?
					options.item :
					this.$container.querySelectorAll(options.item);

				if (!this.$itemCollection || this.$itemCollection.length === 0) {
					return false;
				}

				if (!this.loaded) { return this.init(); }
			}

			PinterestGrid.prototype.init = function () {
				this.loaded = true;

				var gutter = parseInt(this.settings.gutter);
				var callback = this.settings.callback;

				this.$container.style.width = '';

				var containerWidth = this.$container.getBoundingClientRect().width;
				var firstChildWidth = this.$itemCollection[0].getBoundingClientRect().width + gutter;
				var cols = Math.max(Math.floor((containerWidth - gutter) / firstChildWidth), 1);

				containerWidth = (firstChildWidth * cols + gutter) + 'px';
				this.$container.style.width = containerWidth;
				this.$container.style.position = 'relative';

				var itemsGutter = [];
				var itemsPosX = [];

				for (var g = 0; g < cols; g++) {
					itemsPosX.push(g * firstChildWidth + gutter);
					itemsGutter.push(gutter);
				}

				Array.from(this.$itemCollection).forEach(function (item, i) {
					if (this.settings.shorterFirst) {
						var itemIndex = itemsGutter.slice(0).sort(function (a, b) { return a - b }).shift();
						itemIndex = itemsGutter.indexOf(itemIndex);
					} else {
						var itemIndex = i % cols;
					}

					var posX = itemsPosX[itemIndex];
					var posY = itemsGutter[itemIndex];

					item.style.position = 'absolute';
					item.style.webkitBackfaceVisibility = item.style.backfaceVisibility = 'hidden';
					item.style[this.transform] = 'translate3D(' + posX + 'px,' + posY + 'px, 0)';

					itemsGutter[itemIndex] += item.getBoundingClientRect().height + gutter;

					if (!/loaded/.test(item.className)) {
						setTimeout(function () {
							item.classList.add(item.className.split(' ')[0] + '--loaded');
						}, (parseInt(this.settings.delay) * i));
					}

				}.bind(this));

				var containerHeight = itemsGutter.slice(0).sort(function (a, b) { return a - b }).pop();
				this.$container.style.height = containerHeight + 'px';

				if (!/loaded/.test(this.$container.className)) {
					this.$container.classList.add(this.$container.className.split(' ')[0] + '--loaded');
				}

				if (typeof callback === 'function') {
					callback(this.$itemCollection);
				}
			}

			function _getTransformProperty() {
				var style = document.createElement('div').style;
				var transform;
				var vendorProp;

				if (undefined !== style[vendorProp = 'webkitTransform']) {
					transform = vendorProp;
				}

				if (undefined !== style[vendorProp = 'msTransform']) {
					transform = vendorProp;
				}

				if (undefined !== style[vendorProp = 'transform']) {
					transform = vendorProp;
				}

				return transform;
			}

			// AMD
			if (typeof define === 'function' && define.amd) {
				define(function () {
					return PinterestGrid
				});
			}

			// CommonJS
			else if (typeof module !== 'undefined' && module.exports) {
				module.exports = PinterestGrid;
			}

			// Global Property
			else {
				exports.PinterestGrid = PinterestGrid;
			}

		}(this));

		(function () {

			var grid = new PinterestGrid({
				delay: 100,
				container: '.cards',
				item: '.card',
				gutter: 10
			});

			window.addEventListener('resize', function () {
				grid.init();
			});

			Array.from(document.querySelectorAll('.card img')).forEach(function (item) {
				console.log(item);
				item.addEventListener('load', function () {
					grid.init();
					item.removeEventListener('load');
				}, false);
			});

		})();


		// Accordeon FAQ
		accordionInit();
	}

	//FAQ.html

	if (document.querySelector('#faq')) {
		accordionInit();
		document.body.style.background = "#f8f4ff";
		var boutonActif;
		document.querySelectorAll('.faqBtn').forEach(btn => {
			if (btn.dataset.category == '3') {
				boutonActif = btn;
			}
			btn.addEventListener('click', () => {
				boutonActif.classList.remove('actif');
				boutonActif = btn;
				boutonActif.classList.add('actif');
				document.querySelectorAll('.accordion-item').forEach(item => {
					if (item.dataset.category == btn.dataset.category) {
						item.style.display = '';
					} else {
						item.style.display = 'none';
					}
				})
			})
		});
	}
}