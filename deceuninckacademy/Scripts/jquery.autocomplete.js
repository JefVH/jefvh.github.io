/**
****************************************************************************
****************************************************************************
*                                13/12/2013                                *
*  DECEUNINCK: CUSTOMIZED VERSION, DO NOT REPLACE WITH NEW ONLINE VERSION  *
****************************************************************************
****************************************************************************
*/

/*jslint  browser: true, white: true, plusplus: true */
/*global define, window, document, jQuery */

// Expose plugin as an AMD module if AMD loader is present:
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    'use strict';

    var
        utils = (function () {
            return {
                escapeRegExChars: function (value) {
                    return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                },
                createNode: function (html) {
                    var div = document.createElement('div');
                    div.innerHTML = html;
                    return div.firstChild;
                }
            };
        }()),

        keys = {
            ESC: 27,
            TAB: 9,
            RETURN: 13,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        };

    function Autocomplete(el, options) {
        var noop = function () { },
            that = this,
            defaults = {
                autoSelectFirst: false,
                appendTo: 'body',
                serviceUrl: null,
                lookup: null,
                onSelect: null,
                width: 'auto',
                minChars: 1,
                maxHeight: 300,
                deferRequestBy: 0,
                params: {},
                formatResult: Autocomplete.formatResult,
                delimiter: null,
                zIndex: 9999,
                type: 'GET',
                noCache: false,
                onSearchStart: noop,
                onSearchComplete: noop,
                onAppendComplete: noop,
                onSuggestComplete: noop,
                containerClass: 'autocomplete-suggestions',
                tabDisabled: false,
                dataType: 'text',
                currentRequest: null,
                lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
                    return suggestion.value.toLowerCase().indexOf(queryLowerCase) !== -1;
                },
                paramName: 'query',
                transformResult: function (response) {
                    return typeof response === 'string' ? $.parseJSON(response) : response;
                }
            };

        // Shared variables:
        that.element = el;
        that.el = $(el);
        that.suggestions = [];
        that.badQueries = [];
        that.selectedIndex = -1;
        that.currentValue = that.element.value;
        that.isDirty = false;
        that.intervalId = 0;
        that.cachedResponse = [];
        that.onChangeInterval = null;
        that.onChange = null;
        that.isLocal = false;
        that.suggestionsContainer = null;
        that.parentContainer = null;
        that.options = $.extend({}, defaults, options);
        that.classes = {
            selected: 'autocomplete-selected',
            suggestion: 'autocomplete-suggestion'
        };
        that.hint = null;
        that.hintValue = '';
        that.selection = null;

        //custom
        that.isLoadingExtra = false;
        that.hasExtraToLoad = false;

        // Initialize and set options:
        that.initialize();
        that.setOptions(options);
    }

    Autocomplete.utils = utils;

    $.Autocomplete = Autocomplete;

    Autocomplete.formatResult = function (suggestion, currentValue) {
        var cur = utils.escapeRegExChars(currentValue);
        var spl = cur.split(' ');
        var res = suggestion.value;
        for (var i = 0; i < spl.length; i++)
        {
            var pattern = '(' + spl[i] + ')';

            res = res.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
        }
        return res;
    };

    Autocomplete.prototype = {

        killerFn: null,

        initialize: function () {
            var that = this,
                suggestionSelector = '.' + that.classes.suggestion,
                selected = that.classes.selected,
                options = that.options,
                container;

            // Remove autocomplete attribute to prevent native suggestions:
            that.element.setAttribute('autocomplete', 'off');

            that.killerFn = function (e) {
                if ($(e.target).closest('.' + that.options.containerClass).length === 0) {
                    that.killSuggestions();
                    that.disableKillerFn();
                }
            };

            //that.suggestionsContainer = Autocomplete.utils.createNode('<div class="' + options.containerClass + '" style="position: absolute; display: none;"></div>');
            that.suggestionsContainer = Autocomplete.utils.createNode('<div class="container"></div>');
            that.parentContainer = Autocomplete.utils.createNode('<div class="' + options.containerClass + '" style="display:none; position: absolute;">');

            container = $(that.suggestionsContainer);
            var parent = $(that.parentContainer);

            parent.appendTo(options.appendTo);
            container.appendTo(parent);
            $("<div class=\"status\">STATUS</div>").appendTo(parent);

            parent.find(".container").bind('mousewheel DOMMouseScroll', function (e) {
                var e0 = e.originalEvent;
                var delta = e0.wheelDelta || -e0.detail;

                this.scrollTop += (delta < 0 ? 1 : -1) * 30;

                e.preventDefault();
            }).scroll(function () {
                if (that.hasExtraToLoad && !that.isLoadingExtra) {
                    if ($(this).scrollTop() + $(this).height() >= $(this)[0].scrollHeight - 50) {
                        var itemCount = parent.find(".container > div").length;
                        parent.find(".status").html("<span><img src=\"/content/images/spinner.gif\" /> Loading...</span>");
                        if (itemCount > 0) {
                            that.isLoadingExtra = true;
                            var q = that.getQuery(that.currentValue);
                            var firstRecord = itemCount;
                            that.getExtraSuggestions(q, firstRecord);
                        }
                    }
                }
            });

            // Only set width if it was provided:
            if (options.width !== 'auto') {
                parent.width(options.width);
            }

            // Listen for mouse over event on suggestions list:
            container.on('mouseover.autocomplete', suggestionSelector, function () {
                that.activate($(this).data('index'));
            });

            // Deselect active element when mouse leaves suggestions container:
            container.on('mouseout.autocomplete', function () {
                that.selectedIndex = -1;
                container.children('.' + selected).removeClass(selected);
            });

            // Listen for click event on suggestions list:
            container.on('click.autocomplete', suggestionSelector, function () {
                that.select($(this).data('index'));
            });

            that.fixPosition();

            that.fixPositionCapture = function () {
                if (that.visible) {
                    that.fixPosition();
                }
            };

            $(window).on('resize', that.fixPositionCapture);

            that.el.on('keydown.autocomplete', function (e) { that.onKeyPress(e); });
            that.el.on('keyup.autocomplete', function (e) { that.onKeyUp(e); });
            that.el.on('blur.autocomplete', function () { that.onBlur(); });
            that.el.on('focus.autocomplete', function () {
                that.isDirty = false;
                
                //Default show list on focus
                var e = jQuery.Event("keydown");
                e.which = keys.DOWN;
                $(that.el).trigger(e);

                that.fixPosition();
            });
            that.el.on('change.autocomplete', function (e) { that.onKeyUp(e); });
        },

        onBlur: function () {
            this.enableKillerFn();
        },

        setOptions: function (suppliedOptions) {
            var that = this,
                options = that.options;

            $.extend(options, suppliedOptions);

            that.isLocal = $.isArray(options.lookup);

            if (that.isLocal) {
                options.lookup = that.verifySuggestionsFormat(options.lookup);
            }

            // Adjust height, width and z-index:
            $(that.parentContainer).css({
                //'max-height': options.maxHeight + 'px',
                'width': options.width + 'px',
                'z-index': options.zIndex
            });
            $(that.suggestionsContainer).css({
                'max-height': (options.maxHeight - 40) + 'px'
            });
        },

        clearCache: function () {
            this.cachedResponse = [];
            this.badQueries = [];
        },

        clear: function () {
            this.clearCache();
            this.currentValue = '';
            this.suggestions = [];
        },

        disable: function () {
            this.disabled = true;
        },

        enable: function () {
            this.disabled = false;
        },

        fixPosition: function () {
            var that = this,
                offset;

            // Don't adjsut position if custom container has been specified:
            if (that.options.appendTo !== 'body') {
                return;
            }

            offset = that.el.offset();

            $(that.parentContainer).css({
                top: (offset.top + that.el.outerHeight()) + 'px',
                left: offset.left + 'px'
            });
        },

        enableKillerFn: function () {
            var that = this;
            $(document).on('click.autocomplete', that.killerFn);
        },

        disableKillerFn: function () {
            var that = this;
            $(document).off('click.autocomplete', that.killerFn);
        },

        killSuggestions: function () {
            var that = this;
            that.stopKillSuggestions();
            that.intervalId = window.setInterval(function () {
                that.hide();
                that.stopKillSuggestions();
            }, 300);
        },

        stopKillSuggestions: function () {
            window.clearInterval(this.intervalId);
        },

        isCursorAtEnd: function () {
            var that = this,
                valLength = that.el.val().length,
                selectionStart = that.element.selectionStart,
                range;

            if (typeof selectionStart === 'number') {
                return selectionStart === valLength;
            }
            if (document.selection) {
                range = document.selection.createRange();
                range.moveStart('character', -valLength);
                return valLength === range.text.length;
            }
            return true;
        },

        onKeyPress: function (e) {
            var that = this;

            // If suggestions are hidden and user presses arrow down, display suggestions:
            if (!that.disabled && !that.visible && e.which === keys.DOWN && !that.currentValue) {
                that.suggest();
                return;
            }

            if (that.disabled || !that.visible) {
                return;
            }

            switch (e.which) {
                case keys.ESC:
                    that.el.val(that.currentValue);
                    that.hide();
                    break;
                case keys.RIGHT:
                    if (that.hint && that.options.onHint && that.isCursorAtEnd()) {
                        that.selectHint();
                        break;
                    }
                    return;
                case keys.TAB:
                    if (that.hint && that.options.onHint) {
                        that.selectHint();
                        return;
                    }
                    if (that.selectedIndex === -1) {
                        if (that.selectEqualValue()) {
                            break;
                        }
                    }
                    // Fall through to RETURN
                case keys.RETURN:
                    if (that.selectedIndex === -1) {
                        that.hide();
                        return;
                    }
                    that.select(that.selectedIndex);
                    if (e.which === keys.TAB && that.options.tabDisabled === false) {
                        return;
                    }
                    break;
                case keys.UP:
                    that.moveUp();
                    break;
                case keys.DOWN:
                    that.moveDown();
                    break;
                default:
                    return;
            }

            // Cancel event if function did not return:
            e.stopImmediatePropagation();
            e.preventDefault();
        },

        onKeyUp: function (e) {
            var that = this;

            if (that.disabled) {
                return;
            }

            switch (e.which) {
                case keys.UP:
                case keys.DOWN:
                    return;
            }

            clearInterval(that.onChangeInterval);

            if (that.currentValue !== that.el.val()) {
                that.isDirty = true;
                that.findBestHint();
                if (that.options.deferRequestBy > 0) {
                    // Defer lookup in case when value changes very quickly:
                    that.onChangeInterval = setInterval(function () {
                        that.onValueChange();
                    }, that.options.deferRequestBy);
                } else {
                    that.onValueChange();
                }
            }
        },

        onValueChange: function () {
            var that = this,
                q;

            if (that.selection) {
                that.selection = null;
                (that.options.onInvalidateSelection || $.noop)();
            }

            clearInterval(that.onChangeInterval);
            that.currentValue = that.el.val();

            q = that.getQuery(that.currentValue);
            that.selectedIndex = -1;

            if (q.length < that.options.minChars) {
                that.hide();
            } else {
                that.getSuggestions(q);
            }
        },

        onValueChangeForce: function () {
            var that = this,
                q;

            if (that.selection) {
                that.selection = null;
                (that.options.onInvalidateSelection || $.noop)();
            }

            clearInterval(that.onChangeInterval);
            that.currentValue = that.el.val();

            q = that.getQuery(that.currentValue);
            that.selectedIndex = -1;

            that.getSuggestions(q);
        },

        getQuery: function (value) {
            var delimiter = this.options.delimiter,
                parts;

            if (!delimiter) {
                return $.trim(value);
            }
            parts = value.split(delimiter);
            return $.trim(parts[parts.length - 1]);
        },

        getSuggestionsLocal: function (query) {
            var that = this,
                queryLowerCase = query.toLowerCase(),
                filter = that.options.lookupFilter;

            return {
                suggestions: $.grep(that.options.lookup, function (suggestion) {
                    return filter(suggestion, query, queryLowerCase);
                })
            };
        },

        getSuggestions: function (q) {
            var response,
                that = this,
                options = that.options,
                serviceUrl = options.serviceUrl;

            response = that.isLocal ? that.getSuggestionsLocal(q) : that.cachedResponse[q];

            if (response && $.isArray(response.suggestions)) {
                that.suggestions = response.suggestions;
                that.suggest();
            } else if (!that.isBadQuery(q)) {
                var params;
                if ($.isFunction(options.params)) {
                    params = options.params(that.element);
                } else {
                    params = options.params;
                }
                params[options.paramName] = q;
                params["firstRecord"] = 0;
                if ($.isFunction(options.serviceUrl)) {
                    serviceUrl = options.serviceUrl.call(that.element, q);
                }
                if(this.currentRequest != null) {
                    this.currentRequest.abort();
                }
                this.currentRequest = $.ajax({
                    url: serviceUrl,
                    data: options.ignoreParams ? null : params,
                    type: options.type,
                    dataType: options.dataType
                }).done(function (data) {
                    var res = that.processResponse(data, q);
                    options.onSearchComplete.call(that.element, q, res);
                    $(that.suggestionsContainer).scrollTop(0)
                }).fail(function () {
                    that.hasExtraToLoad = false;
                });
            }
        },

        getExtraSuggestions: function (q, firstRecord) {
            var response,
                that = this,
                options = that.options,
                serviceUrl = options.serviceUrl;

            response = that.isLocal ? that.getSuggestionsLocal(q) : that.cachedResponse[q];

            if (response && $.isArray(response.suggestions)) {
                that.suggestions = response.suggestions;
                that.suggest();
            } else if (!that.isBadQuery(q)) {
                var params;
                if ($.isFunction(options.params)) {
                    params = options.params(that.element);
                } else {
                    params = options.params;
                }
                params[options.paramName] = q;
                params["firstRecord"] = firstRecord;
                if (options.onSearchStart.call(that.element, params) === false) {
                    return;
                }
                if ($.isFunction(options.serviceUrl)) {
                    serviceUrl = options.serviceUrl.call(that.element, q);
                }
                if(this.currentRequest != null) {
                    this.currentRequest.abort();
                }
                this.currentRequest = $.ajax({
                    url: serviceUrl,
                    data: options.ignoreParams ? null : params,
                    type: options.type,
                    dataType: options.dataType
                }).done(function (data) {
                    var res = that.processResponse(data, q, true);
                    that.isLoadingExtra = false;
                    options.onAppendComplete.call(that.element, q, res);
                }).fail(function () {
                    that.hasExtraToLoad = false;
                    that.isLoadingExtra = false;
                });
            }
        },

        isBadQuery: function (q) {
            var badQueries = this.badQueries,
                i = badQueries.length;

            while (i--) {
                if (q.indexOf(badQueries[i]) === 0) {
                    return true;
                }
            }

            return false;
        },

        hide: function () {
            var that = this;
            that.visible = false;
            that.selectedIndex = -1;
            $(that.parentContainer).hide();
            that.signalHint(null);
        },

        suggest: function (appendList) {
            if (this.suggestions.length === 0) {
                this.hide();
                return;
            }

            var that = this,
                formatResult = that.options.formatResult,
                value = that.getQuery(that.currentValue),
                className = that.classes.suggestion,
                classSelected = that.classes.selected,
                container = $(that.suggestionsContainer),
                html = '',
                width;

            if (appendList === undefined) {
                // Build suggestions inner HTML:
                $.each(that.suggestions, function (i, suggestion) {
                    html += '<div class="' + className + '" data-index="' + i + '">' + formatResult(suggestion, value) + '</div>';
                });

                // If width is auto, adjust width before displaying suggestions,
                // because if instance was created before input had width, it will be zero.
                // Also it adjusts if input width has changed.
                // -2px to account for suggestions border.
                if (that.options.width === 'auto') {
                    width = that.el.outerWidth() - 2;
                    container.width(width > 0 ? width : 300);
                }

                container.empty().html(html).parent().show();
                that.visible = true;
                that.fixPosition();

                
                // Select first value by default:
                var selectFirst = that.options.autoSelectFirst;
                if ($.isFunction(that.options.autoSelectFirst)) {
                    selectFirst = that.options.autoSelectFirst(that.element);
                }
                if (selectFirst) {
                    that.selectedIndex = 0;
                    container.children().first().addClass(classSelected);
                }

                that.findBestHint();
            } else {
                var index = container.children().last().data("index");
                index++;
                $.each(appendList, function (i, suggestion) {
                    html += '<div class="' + className + '" data-index="' + index + '">' + formatResult(suggestion, value) + '</div>';
                    index++;
                });
                container.append(html);
            }

            that.options.onSuggestComplete.call(that.element, container);
        },

        findBestHint: function () {
            var that = this,
                value = that.el.val().toLowerCase(),
                bestMatch = null;

            if (!value) {
                return;
            }

            $.each(that.suggestions, function (i, suggestion) {
                var foundMatch = suggestion.value.toLowerCase().indexOf(value) === 0;
                if (foundMatch) {
                    bestMatch = suggestion;
                }
                return !foundMatch;
            });

            that.signalHint(bestMatch);
        },

        signalHint: function (suggestion) {
            var hintValue = '',
                that = this;
            if (suggestion) {
                hintValue = that.currentValue + suggestion.value.substr(that.currentValue.length);
            }
            if (that.hintValue !== hintValue) {
                that.hintValue = hintValue;
                that.hint = suggestion;
                (this.options.onHint || $.noop)(hintValue);
            }
        },

        verifySuggestionsFormat: function (suggestions) {
            // If suggestions is string array, convert them to supported format:
            if (suggestions.length && typeof suggestions[0] === 'string') {
                return $.map(suggestions, function (value) {
                    return { value: value, data: null };
                });
            }

            return suggestions;
        },

        processResponse: function (response, originalQuery, append) {
            var that = this,
                options = that.options,
                result = options.transformResult(response, originalQuery);

            result.suggestions = that.verifySuggestionsFormat(result.suggestions);
            if (result.statusMessage !== undefined && result.statusMessage !== null) {
                $(that.parentContainer).find(".status").show().html(result.statusMessage);
            } else {
                $(that.parentContainer).find(".status").hide();
            }
            if (result.amount !== undefined && result.total !== undefined) {
                if (result.amount < result.total) {
                    that.hasExtraToLoad = true;
                } else {
                    that.hasExtraToLoad = false;
                }
            }

            // Cache results if cache is not disabled:
            if (!options.noCache) {
                that.cachedResponse[result[options.paramName]] = result;
                if (result.suggestions.length === 0) {
                    that.badQueries.push(result[options.paramName]);
                }
            }

            // Display suggestions only if returned query matches current value:
            if (originalQuery === that.getQuery(that.currentValue)) {
                if (append) {
                    that.suggestions = that.suggestions.concat(result.suggestions);
                    that.suggest(result.suggestions);
                } else {
                    that.suggestions = result.suggestions;
                    that.suggest();
                }
            }

            return result;
        },

        activate: function (index) {
            var that = this,
                activeItem,
                selected = that.classes.selected,
                container = $(that.suggestionsContainer),
                children = container.children();

            container.children('.' + selected).removeClass(selected);

            that.selectedIndex = index;

            if (that.selectedIndex !== -1 && children.length > that.selectedIndex) {
                activeItem = children.get(that.selectedIndex);
                $(activeItem).addClass(selected);
                return activeItem;
            }

            return null;
        },

        selectHint: function () {
            var that = this,
                i = $.inArray(that.hint, that.suggestions);

            that.select(i);
        },

        selectEqualValue: function() {
            var that = this;
            var val = $(that.element).val();
            var i = -1;
            $.each(that.suggestions, function (index, item) {
                if (item.value == val) {
                    i = index;
                }
            });
            that.select(i);

            return i > -1;
        },

        select: function (i) {
            var that = this;
            that.hide();
            that.onSelect(i);
        },

        moveUp: function () {
            var that = this;

            if (that.selectedIndex === -1) {
                return;
            }

            if (that.selectedIndex === 0) {
                $(that.suggestionsContainer).children().first().removeClass(that.classes.selected);
                that.selectedIndex = -1;
                that.el.val(that.currentValue);
                that.findBestHint();
                return;
            }

            that.adjustScroll(that.selectedIndex - 1);
        },

        moveDown: function () {
            var that = this;

            if (that.selectedIndex === (that.suggestions.length - 1)) {
                return;
            }

            that.adjustScroll(that.selectedIndex + 1);
        },

        adjustScroll: function (index) {
            var that = this,
                activeItem = that.activate(index),
                offsetTop,
                upperBound,
                lowerBound,
                heightDelta = 25;

            if (!activeItem) {
                return;
            }

            offsetTop = activeItem.offsetTop;
            upperBound = $(that.suggestionsContainer).scrollTop();
            lowerBound = upperBound + that.options.maxHeight - heightDelta;

            if (offsetTop < upperBound) {
                $(that.suggestionsContainer).scrollTop(offsetTop);
            } else if (offsetTop > lowerBound) {
                $(that.suggestionsContainer).scrollTop(offsetTop - that.options.maxHeight + heightDelta);
            }

            that.el.val(that.getValue(that.suggestions[index].value));
            that.signalHint(null);
        },

        onSelect: function (index) {
            var that = this,
                onSelectCallback = that.options.onSelect,
                suggestion = that.suggestions[index];

            that.currentValue = that.getValue(suggestion.value);

            //if (that.currentValue != $.trim(that.el.val())) {
            //    for (var i = 0; i < that.suggestions.length; i++) {
            //        var sug = that.suggestions[i];
            //        if (that.getValue(sug.value) == $.trim(that.el.val())) {
            //            that.currentValue = that.getValue(sug.value);
            //            suggestion = sug;
            //            break;
            //        }
            //    }
            //}

            //that.el.val(that.currentValue);
            that.signalHint(null);
            that.suggestions = [];
            that.selection = suggestion;

            if ($.isFunction(onSelectCallback)) {
                onSelectCallback.call(that.element, suggestion);
            }
        },

        getValue: function (value) {
            var that = this,
                delimiter = that.options.delimiter,
                currentValue,
                parts;

            if (!delimiter) {
                return value;
            }

            currentValue = that.currentValue;
            parts = currentValue.split(delimiter);

            if (parts.length === 1) {
                return value;
            }

            return currentValue.substr(0, currentValue.length - parts[parts.length - 1].length) + value;
        },

        dispose: function () {
            var that = this;
            that.el.off('.autocomplete').removeData('autocomplete');
            that.disableKillerFn();
            $(window).off('resize', that.fixPositionCapture);
            $(that.parentContainer).remove();
        }
    };

    // Create chainable jQuery plugin:
    $.fn.autocomplete = function (options, args) {
        var dataKey = 'autocomplete';
        // If function invoked without argument return
        // instance of the first matched element:
        if (arguments.length === 0) {
            return this.first().data(dataKey);
        }

        return this.each(function () {
            var inputElement = $(this),
                instance = inputElement.data(dataKey);

            if (typeof options === 'string') {
                if (instance && typeof instance[options] === 'function') {
                    instance[options](args);
                }
            } else {
                // If instance already exists, destroy it:
                if (instance && instance.dispose) {
                    instance.dispose();
                }
                instance = new Autocomplete(this, options);
                inputElement.data(dataKey, instance);
            }
        });
    };
}));
