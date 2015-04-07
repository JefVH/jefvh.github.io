
module PP.WebPart {
	var $: JQueryStatic = jQuery;
	export class Slider {
		private $win: JQuery = $(window);
		private $doc: JQuery = $(document);
		private $body: JQuery = $('body');
		private $slider: JQuery;
		private $btnPrevious: JQuery;
		private $btnNext: JQuery;
		private _interval = null;

		constructor(element: JQuery) {
			this.$slider = element;
			this.$btnPrevious = this.$slider.find('.prev');
			this.$btnNext = this.$slider.find('.next');
			this._init();
		}

		// PUBLIC METHODS


		// PRIVATE METHODS
		private _init(): void {
			this.$btnPrevious.unbind('click');
			this.$btnPrevious.bind('click', (event: JQueryEventObject) => {
				this._onClickBtnPrevious(event);
			});
			this.$btnNext.unbind('click');
			this.$btnNext.bind('click', (event: JQueryEventObject) => {
				this._onClickBtnNext(event);
			});
		}

		private _nextPicture(): void {
			var now = this.$slider.find('.items').children(':visible'),
				first = this.$slider.find('.items').children(':first'),
				next = now.next();
			next = next.index() == -1 ? first : next;
			now.fadeOut(PP.Main.SPEED, function () {
				next.fadeIn(PP.Main.SPEED);
			});
		}

		private _previousPicture(): void {
			var now = this.$slider.find('.items').children(":visible"),
				last = this.$slider.find('.items').children(":last"),
				prev = now.prev();
			prev = prev.index() == -1 ? last : prev;
			now.fadeOut(PP.Main.SPEED, function () {
				prev.fadeIn(PP.Main.SPEED);
			});
        }

		// EVENT HANDLERS

		private _onClickBtnPrevious(e: JQueryEventObject) {
			var _that = this;

			// Handle event
			e.preventDefault();

			// Stop timer
			clearInterval(this._interval);

			// Next picture
			this._previousPicture();

			// Start timer
			this._interval = setInterval(function () {
				_that._nextPicture();
			}, PP.Main.INTERVAL);
		}

		private _onClickBtnNext(e: JQueryEventObject) {
			var _that = this;

			e.preventDefault();

			// Stop timer
			clearInterval(this._interval);

			// Next picture
			this._nextPicture();

			// Start timer
			this._interval = setInterval(function () {
				_that._nextPicture();
			}, PP.Main.INTERVAL);
		}
	}
}