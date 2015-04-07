/// <reference path="../../typings/google/google.maps.d.ts" />
var PP;
(function (PP) {
    (function (Page) {
        var $ = jQuery;
        var Home = (function () {
            function Home() {
                var _this = this;
                this.$win = $(window);
                this.$doc = $(document);
                this.$body = $('body');
                this.$products = $('#products');
                this.$menu = $('#header .menu');
                this.$actionButtons = $('#header .action-buttons');
                this._isVisibleActionButtons = false;
                this.$menuHover = $('#header .menu-hover');
                this.$dealerLocator = $('#dealer-locator');
                this.$render = $('#render');
                this._currentPointer = 0;
                this.$links = $('#links');
                this.$slider = $('#slider');
                this.$news = $('#news');
                this.$footer = $('#footer');
                // Bind event handlers
                this.$win.bind('resize', function (event) {
                    _this._onResize(event);
                });
                this.$win.bind('scroll', function (event) {
                    _this._onScroll(event);
                });

                this._initLayout();

                if (!Modernizr.svg) {
                    this._initIE8();
                }
            }
            // PUBLIC METHODS
            // PRIVATE METHODS
            Home.prototype._initLayout = function () {
                this._initProducts();
                this._initMenu();
                this._initRender();
                this._initDealerLocator();
                this._initSlider();
            };

            Home.prototype._initMenu = function () {
                var _this = this;
                this.$menuHover.find('.extra').height(this.$menuHover.height());
                this.$menu.bind('click', function (event) {
                    _this._onMenuClick(event);
                });
                this.$menuHover.find('.main-menu h4').bind('click', function (event) {
                    _this._onMenuItemClick(event);
                });

                this.$menuHover.find('.close a').bind('click', function (event) {
                    _this._onMenuCloseClick(event);
                });
            };

            Home.prototype._initRender = function () {
                var _this = this;
                var widthRender = 2000, widthCanvas = $(document).innerWidth(), ratio = widthCanvas / widthRender;
                this.$render.find('.pointer').each(function (i, item) {
                    var _$item = $(item);
                    _$item.css('top', (_$item.data('top') * ratio));
                    _$item.css('left', (_$item.data('left') * ratio));
                });

                this.$render.find('.pointer').unbind('click');
                this.$render.find('.pointer').bind('click', function (event) {
                    _this._onPointerClick(event);
                });

                this.$render.bind('click', function (event) {
                    _this._onRenderClick(event);
                });
            };

            Home.prototype._initProducts = function () {
                this.$products.find('article').each(function (i, item) {
                    var $item = $(item);

                    $item.height($item.find('img.image').height());
                });
            };

            Home.prototype._initDealerLocator = function () {
                var _this = this;
                this._dealerLocatorDdl = new PP.WebPart.DropdownList(this.$dealerLocator.find('.dll'), 'Selecteer uw product');
                if (window.location.pathname.substr(0, 4).toUpperCase() == "/FR/") {
                    this._dealerLocatorDdl.addItems([{ Value: 'WD', Text: 'Fenêtres et portes' }, { Value: 'GA', Text: 'Aménagement exterieur' }, { Value: 'EX', Text: 'Bardage et sous-toitures' }, { Value: 'IN', Text: 'Décoration interieure' }]);
                    this._dealerLocatorDdl = new PP.WebPart.DropdownList(this.$dealerLocator.find('.dll'), 'Choisissez votre gamme de produits', 'FR');
                } else {
                    this._dealerLocatorDdl.addItems([{ Value: 'WD', Text: 'Ramen & deuren' }, { Value: 'GA', Text: 'Tuintoepassingen' }, { Value: 'EX', Text: 'Dak & gevel' }, { Value: 'IN', Text: 'Interieurtoepassingen' }]);
                    this._dealerLocatorDdl = new PP.WebPart.DropdownList(this.$dealerLocator.find('.dll'), 'Selecteer uw product', 'NL');
                }

                this.$dealerLocator.find('.find').bind('click', function (event) {
                    _this._onDealerSearch(event);
                });

                google.maps.event.addDomListener(window, 'load', this._initializeGoogleMaps());
            };

            Home.prototype._initializeGoogleMaps = function () {
                var options = {
                    types: ['geocode'],
                    componentRestrictions: { country: 'be' }
                };
                new google.maps.places.Autocomplete((document.getElementById('txtDLAddress')), options);
            };

            Home.prototype._initIE8 = function () {
                // Change SVG files
                $("img[src$='.svg']").each(function () {
                    var newSrc = $(this).attr("src").replace("svg", "png");
                    $(this).attr("src", newSrc);
                });

                // MENU
                this.$menuHover.find('.main-item').each(function (i, item) {
                    var _item = $(item);
                    _item.find('div ul').each(function (j, subitem) {
                        var _subitem = $(subitem);
                        _subitem.css('left', (400 + (j * 200)) + 'px');
                        _subitem.css('top', '0px');
                    });
                });

                // RENDER
                this.$render.find('.quote').css('background', 'url(/Content/Images/quote.png) no-repeat 0 -1px');

                // DEALER LOCATOR
                this.$dealerLocator.find('input[type=text]').width('80%');
                this.$dealerLocator.find('input[type=text]').placeholder();

                // LINKS
                this.$links.find('article').first().css('padding-right', '50px');
                this.$links.find('article').last().css('padding-left', '50px');

                // NEWS
                this.$news.find('article').last().css('margin-right', '0');

                // FOOTER
                this.$footer.find('.item').last().css('margin-right', '0');
            };

            Home.prototype._initSlider = function () {
                var slider = new PP.WebPart.Slider(this.$slider);
            };

            // EVENT HANDLERS
            Home.prototype._onResize = function (e) {
                var mod = this;
                mod._initProducts();
                mod._initRender();
                var loop = setInterval(function () {
                    mod._initProducts();
                    mod._initRender();
                }, 20);

                setTimeout(function () { clearInterval(loop); }, 1000);


            };

            Home.prototype._onDealerSearch = function (e) {
                e.preventDefault();
                if (this._dealerLocatorDdl.getSelectedIndex() != "" && $("#txtDLAddress").val() != "") {
                    if (this._dealerLocatorDdl.getLanguage() == "FR")
                        window.location.href = "/fr/votre-distributeur.aspx?adresse=" + $("#txtDLAddress").val() + "&categorie=" + this._dealerLocatorDdl.getSelectedIndex();
                    else
                        window.location.href = "/nl/vind-een-verdeler.aspx?adres=" + $("#txtDLAddress").val() + "&categorie=" + this._dealerLocatorDdl.getSelectedIndex();
                }
            };

            Home.prototype._onScroll = function (e) {
                var top = this.$doc.scrollTop();
                if (top > 500 && !this._isVisibleActionButtons) {
                    this._isVisibleActionButtons = true;
                    this.$actionButtons.fadeIn(200, function () {
                    });
                } else if (top < 500 && this._isVisibleActionButtons) {
                    this._isVisibleActionButtons = false;
                    this.$actionButtons.fadeOut(200, function () {
                    });
                }
            };

            Home.prototype._onMenuClick = function (e) {
                this.$menuHover.toggle({
                    duration: 200,
                    specialEasing: {
                        height: 'easeInExpo'
                    }
                });
            };

            Home.prototype._onMenuItemClick = function (e) {
                this.$menuHover.find('.main-menu ul').removeClass('show');
                this.$menuHover.find('h4').removeClass('active');
                var _$this = $(e.currentTarget);

                _$this.parent().find('ul').addClass('show');
                _$this.addClass('active');
            };

            Home.prototype._onMenuCloseClick = function (e) {
                this.$menuHover.toggle({
                    duration: 200,
                    specialEasing: {
                        height: 'easeInExpo'
                    }
                });
            };

            Home.prototype._onPointerClick = function (e) {
                if ($(e.target).prop('tagName') != 'A') {
                    var _$this = $(e.currentTarget);

                    this.$render.find('.overlay').hide(200);
                    if (this._currentPointer != _$this.data('id')) {
                        _$this.find('.overlay').show(200);
                        this._currentPointer = _$this.data('id');
                    } else {
                        this._currentPointer = 0;
                    }
                } else {
                    //e.preventDefault();
                }
            };

            Home.prototype._onRenderClick = function (e) {
                this.$menuHover.hide({
                    duration: 200,
                    specialEasing: {
                        height: 'easeInExpo'
                    }
                });
            };
            return Home;
        })();
        Page.Home = Home;
    })(PP.Page || (PP.Page = {}));
    var Page = PP.Page;
})(PP || (PP = {}));

(function ($) {
    $(window).load(function () {
        new PP.Page.Home();
    });
})(jQuery);
