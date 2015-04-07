/// <reference path="../../typings/modernizr/modernizr.d.ts" />
/// <reference path="../../typings/jquery.placeholder/jquery.placeholder.d.ts" />
/// <reference path="../../typings/google/google.maps.d.ts" />


module PP.Page {
    var $: JQueryStatic = jQuery;
    export class Home {
        private $win: JQuery = $(window);
        private $doc: JQuery = $(document);
        private $body: JQuery = $('body');
        private $products: JQuery = $('#products');
        private $menu: JQuery = $('#header .menu');
        private $actionButtons: JQuery = $('#header .action-buttons');
        private _isVisibleActionButtons = false;
        private $menuHover: JQuery = $('#header .menu-hover');
        private $dealerLocator: JQuery = $('#dealer-locator');
        private _dealerLocatorDdl: PP.WebPart.DropdownList;

        private $render: JQuery = $('#render');
        private _currentPointer: number = 0;
        private $links: JQuery = $('#links');
        private $slider: JQuery = $('#slider');
        private $news: JQuery = $('#news');
        private $footer: JQuery = $('#footer');

        constructor() {
            // Bind event handlers
            this.$win.bind('resize', (event: JQueryEventObject) => {
                this._onResize(event);
            });
            this.$win.bind('scroll', (event: JQueryEventObject) => {
                this._onScroll(event);
            });

            this._initLayout();


            if (!Modernizr.svg) {
                this._initIE8();
            }
        }

        // PUBLIC METHODS

        // PRIVATE METHODS
        private _initLayout(): void {
            this._initProducts();
            this._initMenu();
            this._initRender();
            this._initDealerLocator();
            this._initSlider();
        }

        private _initMenu(): void {
            this.$menuHover.find('.extra').height(this.$menuHover.height());
            this.$menu.bind('click', (event: JQueryEventObject) => {
                this._onMenuClick(event);
            });
            this.$menuHover.find('.main-menu h4').bind('click', (event: JQueryEventObject) => {
                this._onMenuItemClick(event);
            });

            this.$menuHover.find('.close a').bind('click', (event: JQueryEventObject) => {
                this._onMenuCloseClick(event);
            });
        }

        private _initRender(): void {
            var widthRender = 2000,
                widthCanvas = this.$doc.innerWidth(),
                ratio = widthCanvas / widthRender;


            this.$render.find('.pointer').each(function (i, item) {
                var _$item = $(item);
                _$item.css('top', (_$item.data('top') * ratio));
                _$item.css('left', (_$item.data('left') * ratio));
            });

            this.$render.find('.pointer').unbind('click');
            this.$render.find('.pointer').bind('click', (event: JQueryEventObject) => {
                this._onPointerClick(event);
            });


            this.$render.bind('click', (event: JQueryEventObject) => {
                this._onRenderClick(event);
            });
        }

        private _initProducts(): void {
            this.$products.find('article').each(function (i, item) {
                var $item = $(item);

                $item.height($item.find('img.image').height());
            });
        }

        private _initDealerLocator(): void {
            this._dealerLocatorDdl = new PP.WebPart.DropdownList(this.$dealerLocator.find('.dll'), 'Selecteer uw product');
            if (window.location.pathname.substr(0, 4).toUpperCase() == "/FR/") {
                this._dealerLocatorDdl.addItems([{ Value: 'WD', Text: 'Fenêtres et portes' }, { Value: 'GA', Text: 'Aménagement exterieur' }, { Value: 'EX', Text: 'Bardage et sous-toitures' }, { Value: 'IN', Text: 'Décoration interieure' }]);
                this._dealerLocatorDdl = new PP.WebPart.DropdownList(this.$dealerLocator.find('.dll'), 'Choisissez votre gamme de produits', 'FR');
            }
            else {
                this._dealerLocatorDdl.addItems([{ Value: 'WD', Text: 'Ramen & deuren' }, { Value: 'GA', Text: 'Tuintoepassingen' }, { Value: 'EX', Text: 'Dak & gevel' }, { Value: 'IN', Text: 'Interieurtoepassingen' }]);
                this._dealerLocatorDdl = new PP.WebPart.DropdownList(this.$dealerLocator.find('.dll'), 'Selecteer uw product', 'NL');
            }

            this.$dealerLocator.find('.find').bind('click', (event: JQueryEventObject) => {
                this._onDealerSearch(event);
            });

            google.maps.event.addDomListener(window, 'load', this._initializeGoogleMaps());
        }

        private _initializeGoogleMaps(): void {
            var options = {
                types: ['geocode'],
                componentRestrictions: { country: 'be' }
            };
            new google.maps.places.Autocomplete((document.getElementById('txtDLAddress')), options);
        }


        private _initIE8(): void {
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
        }

        private _initSlider(): void {
            var slider = new PP.WebPart.Slider(this.$slider);
        }

        // EVENT HANDLERS
        private _onResize(e: JQueryEventObject): void {
            var mod = this;
            mod._initProducts();
            mod._initRender();
            var loop = setInterval(function () {
                mod._initProducts();
                mod._initRender();
            }, 20);

            setTimeout(function () { clearInterval(loop); }, 1000);
        }



        private _onDealerSearch(e: JQueryEventObject): void {
            e.preventDefault();
            if (this._dealerLocatorDdl.getSelectedIndex() != "" && $("#txtDLAddress").val() != "") {
                if (this._dealerLocatorDdl.getLanguage() == "FR")
                    window.location.href = "/fr/votre-distributeur.aspx?adresse=" + $("#txtDLAddress").val() + "&categorie=" + this._dealerLocatorDdl.getSelectedIndex();
                else
                    window.location.href = "/nl/vind-een-verdeler.aspx?adres=" + $("#txtDLAddress").val() + "&categorie=" + this._dealerLocatorDdl.getSelectedIndex();
            }
        }

        private _onScroll(e: JQueryEventObject): void {
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
        }

        private _onMenuClick(e: JQueryEventObject): void {
            this.$menuHover.toggle({
                duration: 200,
                specialEasing: {
                    height: 'easeInExpo'
                }
            });
        }

        private _onMenuItemClick(e: JQueryEventObject): void {
            this.$menuHover.find('.main-menu ul').removeClass('show');
            this.$menuHover.find('h4').removeClass('active');
            var _$this = $(e.currentTarget);

            _$this.parent().find('ul').addClass('show');
            _$this.addClass('active');

        }

        private _onMenuCloseClick(e: JQueryEventObject): void {
            this.$menuHover.toggle({
                duration: 200,
                specialEasing: {
                    height: 'easeInExpo'
                }
            });
        }

        private _onPointerClick(e: JQueryEventObject): void {
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
        }

        private _onRenderClick(e: JQueryEventObject): void {
            this.$menuHover.hide({
                duration: 200,
                specialEasing: {
                    height: 'easeInExpo'
                }
            });
        }
    }
}

(function ($) {
    $(window).load(function () {
        new PP.Page.Home();
    });
})(jQuery);