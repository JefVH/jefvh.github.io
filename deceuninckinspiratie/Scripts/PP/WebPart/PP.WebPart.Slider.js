var PP;
(function (PP) {
    (function (WebPart) {
        var $ = jQuery;
        var Slider = (function () {
            function Slider(element) {
                this.$win = $(window);
                this.$doc = $(document);
                this.$body = $('body');
                this._interval = null;
                this.$slider = element;
                this.$btnPrevious = this.$slider.find('.prev');
                this.$btnNext = this.$slider.find('.next');
                this._init();
            }
            // PUBLIC METHODS
            // PRIVATE METHODS
            Slider.prototype._init = function () {
                var _this = this;
                this.$btnPrevious.unbind('click');
                this.$btnPrevious.bind('click', function (event) {
                    _this._onClickBtnPrevious(event);
                });
                this.$btnNext.unbind('click');
                this.$btnNext.bind('click', function (event) {
                    _this._onClickBtnNext(event);
                });
            };

            Slider.prototype._nextPicture = function () {
                var now = this.$slider.find('.items').children(':visible'), first = this.$slider.find('.items').children(':first'), next = now.next();
                next = next.index() == -1 ? first : next;
                now.fadeOut(PP.Main.SPEED, function () {
                    next.fadeIn(PP.Main.SPEED);
                });
            };

            Slider.prototype._previousPicture = function () {
                var now = this.$slider.find('.items').children(":visible"), last = this.$slider.find('.items').children(":last"), prev = now.prev();
                prev = prev.index() == -1 ? last : prev;
                now.fadeOut(PP.Main.SPEED, function () {
                    prev.fadeIn(PP.Main.SPEED);
                });
            };

            // EVENT HANDLERS
            Slider.prototype._onClickBtnPrevious = function (e) {
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
            };

            Slider.prototype._onClickBtnNext = function (e) {
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
            };
            return Slider;
        })();
        WebPart.Slider = Slider;
    })(PP.WebPart || (PP.WebPart = {}));
    var WebPart = PP.WebPart;
})(PP || (PP = {}));
//# sourceMappingURL=PP.WebPart.Slider.js.map
