
module PP.WebPart {
    var $: JQueryStatic = jQuery;

    export interface ListItem {
        Value: string;
        Text: string;
    }

    export class DropdownList {
        private $win: JQuery = $(window);
        private $doc: JQuery = $(document);
        private $body: JQuery = $('body');
        private $ddl: JQuery;
        private _selectedText: string;        
        private _language: string;        
        private _ddlOpen = false;
        private _mainText: string;
        private _selectedIndex: string = "";

        constructor(element: JQuery, mainText: string, language: string) {
            this.$ddl = element;
            this._mainText = mainText;
            this._language = language;
            this._initDdl();
        }


        // PUBLIC METHODS
        public getSelectedText(): string {
            return this._selectedText;
        }
        public getLanguage(): string {
            return this._language.toUpperCase();
        }

        public hideItems(): void {
            this.$ddl.find('ul').hide();
            this._ddlOpen = false;
        }

        public addItems(items: Array<ListItem>): void {
            var _that = this;
            this.removeItems();
            for (var i = 0; i < items.length; i++) {
                _that.$ddl.find('ul').append('<li><a data-id="' + items[i].Value + '">' + items[i].Text + '</a></li>');
            }
            this.$ddl.find('ul li a').bind('click', (event: JQueryEventObject) => {
                this._onClickDdlItem(event);
            });
        }

        public removeItems(): void {
            var _that = this;
            this.$ddl.find('ul').empty();
            this.$ddl.find('ul li a').unbind('click');
        }

        public getSelectedIndex(): string {
            return this._selectedIndex;
        }


        // PRIVATE METHODS
        private _initDdl(): void {
            this.$ddl.find('h6').text(this._mainText);
            this.$ddl.find('h6').bind('click', (event: JQueryEventObject) => {
                this._onClickDdl(event);
            });


            this.$ddl.find('ul li a').bind('click', (event: JQueryEventObject) => {
                this._onClickDdlItem(event);
            });
        }

        // EVENT HANDLERS
        private _onClickDdl(e: JQueryEventObject): void {
            var _that = this,
                $item = $(e.currentTarget),
                _id = $item.parent().data('id');

            // Show dropdownlist
            if (_that._ddlOpen) {
                $item.parent().find('ul').hide();
                _that._ddlOpen = false;
            } else {
                $item.parent().find('ul').show();
                _that._ddlOpen = true;
            }
        }

        private _onClickDdlItem(e: JQueryEventObject): void {
            var _that = this,
                $item = $(e.currentTarget);
            _that._selectedText = $item.text();
            $item.parents('.dll').find('h6').text($item.text());
            $item.parents('ul').hide();
            _that._ddlOpen = false;
            _that._selectedIndex = $item.data('id');
        }
    }
}