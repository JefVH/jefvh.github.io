(function ($, window, document) {
    var ie6 = false; if ($.browser.msie && $.browser.version.substr(0, $.browser.version.indexOf('.')) < 7) { ie6 = true; } else { document.documentElement.className = document.documentElement.className + ' dk_fouc'; }
    var 
methods = {}, lists = [], keyMap = { 'left': 37, 'up': 38, 'right': 39, 'down': 40, 'enter': 13 }, dropdownTemplate = ['<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">', '<a class="dk_toggle">', '<span class="dk_label">{{ label }}</span>', '</a>', '<div class="dk_options">', '<ul class="dk_options_inner">', '</ul>', '</div>', '</div>'].join(''), optionTemplate = '<li class="{{ current }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>', defaults = { startSpeed: 1000, theme: false, change: false }, keysBound = false; methods.init = function (settings) {
    settings = $.extend({}, defaults, settings); return this.each(function () {
        var 
$select = $(this), $original = $select.find(':selected').first(), $options = $select.find('option'), data = $select.data('dropkick') || {}, id = $select.attr('id') || $select.attr('name'), width = settings.width || $select.outerWidth(), tabindex = $select.attr('tabindex') ? $select.attr('tabindex') : '', $dk = false, theme; if (data.id) { return $select; } else { data.settings = settings; data.tabindex = tabindex; data.id = id; data.$original = $original; data.$select = $select; data.value = _notBlank($select.val()) || _notBlank($original.attr('value')); data.label = $original.text(); data.options = $options; }
        $dk = _build(dropdownTemplate, data); $dk.find('.dk_toggle').css({ 'width': width + 'px' }); $select.before($dk); $dk = $('#dk_container_' + id).fadeIn(settings.startSpeed); theme = settings.theme ? settings.theme : 'default'; $dk.addClass('dk_theme_' + theme); data.theme = theme; data.$dk = $dk; $select.data('dropkick', data); $dk.data('dropkick', data); lists[lists.length] = $select; $dk.bind('focus.dropkick', function (e) { $dk.addClass('dk_focus'); }).bind('blur.dropkick', function (e) { $dk.removeClass('dk_open dk_focus'); }); setTimeout(function () { $select.hide(); }, 0);
    });
}; methods.theme = function (newTheme) {
    var 
$select = $(this), list = $select.data('dropkick'), $dk = list.$dk, oldtheme = 'dk_theme_' + list.theme; $dk.removeClass(oldtheme).addClass('dk_theme_' + newTheme); list.theme = newTheme;
}; methods.reset = function () {
    for (var i = 0, l = lists.length; i < l; i++) {
        var 
listData = lists[i].data('dropkick'), $dk = listData.$dk, $current = $dk.find('li').first(); $dk.find('.dk_label').text(listData.label); $dk.find('.dk_options_inner').animate({ scrollTop: 0 }, 0); _setCurrent($current, $dk); _updateFields($current, $dk, true);
    } 
}; $.fn.dropkick = function (method) { if (!ie6) { if (methods[method]) { return methods[method].apply(this, Array.prototype.slice.call(arguments, 1)); } else if (typeof method === 'object' || !method) { return methods.init.apply(this, arguments); } } }; function _handleKeyBoardNav(e, $dk) {
    var 
code = e.keyCode, data = $dk.data('dropkick'), options = $dk.find('.dk_options'), open = $dk.hasClass('dk_open'), current = $dk.find('.dk_option_current'), first = options.find('li').first(), last = options.find('li').last(), next, prev; switch (code) {
        case keyMap.enter: if (open) { _updateFields(current.find('a'), $dk); _closeDropdown($dk); } else { _openDropdown($dk); }
            e.preventDefault(); break; case keyMap.up: prev = current.prev('li'); if (open) { if (prev.length) { _setCurrent(prev, $dk); } else { _setCurrent(last, $dk); } } else { _openDropdown($dk); }
            e.preventDefault(); break; case keyMap.down: if (open) { next = current.next('li').first(); if (next.length) { _setCurrent(next, $dk); } else { _setCurrent(first, $dk); } } else { _openDropdown($dk); }
            e.preventDefault(); break; default: break;
    } 
}
    function _updateFields(option, $dk, reset) { var value, label, data; value = option.attr('data-dk-dropdown-value'); label = option.text(); data = $dk.data('dropkick'); $select = data.$select; $select.val(value); $dk.find('.dk_label').text(label); reset = reset || false; if (data.settings.change && !reset) { data.settings.change.call($select, value, label); } }
    function _setCurrent($current, $dk) { $dk.find('.dk_option_current').removeClass('dk_option_current'); $current.addClass('dk_option_current'); _setScrollPos($dk, $current); }
    function _setScrollPos($dk, anchor) { var height = anchor.prevAll('li').outerHeight() * anchor.prevAll('li').length; $dk.find('.dk_options_inner').animate({ scrollTop: height + 'px' }, 0); }
    function _closeDropdown($dk) { $dk.removeClass('dk_open'); }
    function _openDropdown($dk) { var data = $dk.data('dropkick'); $dk.find('.dk_options').css({ top: $dk.find('.dk_toggle').outerHeight() - 1 }); $dk.toggleClass('dk_open'); }
    function _build(tpl, view) {
        var 
template = tpl, options = [], $dk; template = template.replace('{{ id }}', view.id); template = template.replace('{{ label }}', view.label); template = template.replace('{{ tabindex }}', view.tabindex); if (view.options && view.options.length) {
            for (var i = 0, l = view.options.length; i < l; i++) {
                var 
$option = $(view.options[i]), current = 'dk_option_current', oTemplate = optionTemplate; oTemplate = oTemplate.replace('{{ value }}', $option.val()); oTemplate = oTemplate.replace('{{ current }}', (_notBlank($option.val()) === view.value) ? current : ''); oTemplate = oTemplate.replace('{{ text }}', $option.text()); options[options.length] = oTemplate;
            } 
        }
        $dk = $(template); $dk.find('.dk_options_inner').html(options.join('')); return $dk;
    }
    function _notBlank(text) { return ($.trim(text).length > 0) ? text : false; }
    $(function () {
        $('.dk_toggle').live('click', function (e) {
            var $dk = $(this).parents('.dk_container').first(); _openDropdown($dk); if ("ontouchstart" in window) { $dk.addClass('dk_touch'); $dk.find('.dk_options_inner').addClass('scrollable vertical'); }
            e.preventDefault(); return false;
        }); $('.dk_options a').live(($.browser.msie ? 'mousedown' : 'click'), function (e) {
            var 
$option = $(this), $dk = $option.parents('.dk_container').first(), data = $dk.data('dropkick'); _closeDropdown($dk); _updateFields($option, $dk); _setCurrent($option.parent(), $dk); e.preventDefault(); return false;
        }); $(document).bind('keydown.dk_nav', function (e) {
            var 
$open = $('.dk_container.dk_open'), $focused = $('.dk_container.dk_focus'), $dk = null; if ($open.length) { $dk = $open; } else if ($focused.length && !$open.length) { $dk = $focused; }
            if ($dk) { _handleKeyBoardNav(e, $dk); } 
        });
    });
})(jQuery, window, document);