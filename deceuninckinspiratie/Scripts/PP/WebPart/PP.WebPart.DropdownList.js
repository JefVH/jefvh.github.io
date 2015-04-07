var PP;
(function (PP) {
    (function (WebPart) {
        var $ = jQuery;

        var DropdownList = (function () {
            function DropdownList(element, mainText, language) {
                this.$win = $(window);
                this.$doc = $(document);
                this.$body = $('body');
                this._ddlOpen = false;
                this._selectedIndex = "";
                this.$ddl = element;
                this._mainText = mainText;
                this._language = language;
                this._initDdl();
            }
            // PUBLIC METHODS
            DropdownList.prototype.getSelectedText = function () {
                return this._selectedText;
            };
            DropdownList.prototype.getLanguage = function () {
                return this._language.toUpperCase();
            };

            DropdownList.prototype.hideItems = function () {
                this.$ddl.find('ul').hide();
                this._ddlOpen = false;
            };

            DropdownList.prototype.addItems = function (items) {
                var _this = this;
                var _that = this;
                this.removeItems();
                for (var i = 0; i < items.length; i++) {
                    _that.$ddl.find('ul').append('<li><a data-id="' + items[i].Value + '">' + items[i].Text + '</a></li>');
                }
                this.$ddl.find('ul li a').bind('click', function (event) {
                    _this._onClickDdlItem(event);
                });
            };

            DropdownList.prototype.removeItems = function () {
                var _that = this;
                this.$ddl.find('ul').empty();
                this.$ddl.find('ul li a').unbind('click');
            };

            DropdownList.prototype.getSelectedIndex = function () {
                return this._selectedIndex;
            };

            // PRIVATE METHODS
            DropdownList.prototype._initDdl = function () {
                var _this = this;
                this.$ddl.find('h6').text(this._mainText);
                this.$ddl.find('h6').bind('click', function (event) {
                    _this._onClickDdl(event);
                });

                this.$ddl.find('ul li a').bind('click', function (event) {
                    _this._onClickDdlItem(event);
                });
            };

            // EVENT HANDLERS
            DropdownList.prototype._onClickDdl = function (e) {
                var _that = this, $item = $(e.currentTarget), _id = $item.parent().data('id');

                // Show dropdownlist
                if (_that._ddlOpen) {
                    $item.parent().find('ul').hide();
                    _that._ddlOpen = false;
                } else {
                    $item.parent().find('ul').show();
                    _that._ddlOpen = true;
                }
            };

            DropdownList.prototype._onClickDdlItem = function (e) {
                var _that = this, $item = $(e.currentTarget);
                _that._selectedText = $item.text();
                $item.parents('.dll').find('h6').text($item.text());
                $item.parents('ul').hide();
                _that._ddlOpen = false;
                _that._selectedIndex = $item.data('id');
            };
            return DropdownList;
        })();
        WebPart.DropdownList = DropdownList;
    })(PP.WebPart || (PP.WebPart = {}));
    var WebPart = PP.WebPart;
})(PP || (PP = {}));
