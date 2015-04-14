var $container;
var filters = {};

Isotope.Item.prototype._create = function () {
    this.id = this.layout.itemGUID++;

    this._transn = {
        ingProperties: {},
        clean: {},
        onEnd: {}
    };
    this.sortData = {};
};

Isotope.Item.prototype.layoutPosition = function () {
    this.emitEvent('layout',[this]);
};

Isotope.prototype.arrange = function (opts){
    this.option(opts);
    this._getIsInstant();
    this.filteredItems=this._filter(this.items);
    this._isLayoutInited=true;
}

var NoneMode = Isotope.LayoutMode.create('none');

$(function () {
    $container = $('.project-overview');
    
    $container.isotope({
        itemSelector: '.blocklink',
        layoutMode: 'none'
    });

    $('.filtersSidebar-content').on('change',function(jQEvent){
        var $checkbox = $(jQEvent.target);
        manageCheckbox($checkbox);

        var comboFilter = getComboFilter(filters);

        $container.isotope({ filter: comboFilter });

    });
});

function getComboFilter(filters) {
    var i = 0;
    var comboFilters = [];
    var message = [];

    for (var prop in filters) {
        message.push(filters[prop].join(' '));
        var filterGroup = filters[prop];

        if (!filterGroup.length) {
            continue;
        }
        if (i === 0) {
            comboFilters = filterGroup.slice(0);
        }
        else {
            var filterSelectors = [];
            var groupCombo = comboFilters.slice(0);

            for (var k = 0, len3 = filterGroup.length; k < len3; k++) {
                for (var j = 0, len2 = groupCombo.length; j < len2; j++) {
                    filterSelectors.push(groupCombo[j] + filterGroup[k]);
                }
            }

            comboFilters = filterSelectors;
        }
        i++;
    }
    var comboFilter = comboFilters.join(', ');
    return comboFilter;
}

function manageCheckbox($checkbox){
    var checkbox = $checkbox[0];

    var group = $checkbox.parents('.option-set').attr('data-group');
    
    var filterGroup = filters[group];
    if (!filterGroup) {
        filterGroup = filters[group] = [];
    }

    var isAll = $checkbox.hasClass('all');
    if (isAll) {
        delete filters[group];
        if (!checkbox.checked) {
            checkbox.checked = 'checked';
        }
    }

    var index = $.inArray(checkbox.value, filterGroup);

    if (checkbox.checked) {
        var selector = isAll ? 'input' : 'input.all';
        $checkbox.siblings(selector).removeAttr('checked');

        if (!isAll && index === -1) {
            filters[group].push(checkbox.value);
        }
    }
    else if(!isAll){
        filters[group].splice(index, 1);

        if (!$checkbox.siblings('[checked]').length) {
            $checkbox.siblings('input.all').attr('checked', 'checked');
        }
    }
}