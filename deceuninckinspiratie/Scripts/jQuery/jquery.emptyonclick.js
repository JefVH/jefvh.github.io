/*
* jQuery emptyonclick plugin
*
* Created by Andreas Creten (andreas@madewithlove.be) on 2008-06-06.
* Copyright (c) 2008 madewithlove. All rights reserved.
*
* Version: 1.2
*
* Changelog :
* Version 1.2 (17 Jun 2008)
*  - Empty the fields onsubmit when they are not changed
*
* Version 1.1 (11 Jun 2008)
*  - Fixed a bug when working with an empty field (no default value)
*
* Version 1.0 (06 Jun 2008):
*  - Original version
*/

jQuery.fn.extend({
    emptyonclick: function(options) {
        return this.each(function() {
            new jQuery.EmptyOnClick(this, options);
        });
    }
});

jQuery.EmptyOnClick = function(element, options) {
    var defaultValue = jQuery(element).val();
    
    // Bind event handlers to the element
    jQuery(element)
    // On Focus: Store the default value if it's not set, empty the field
    .bind("focus", function(e) {
        if(defaultValue == jQuery(this).val())
            jQuery(this).val('');

    })
    // On Blur: if the field is empty, reset the default value
    .bind("blur", function(e) {
        if(!jQuery(this).val()) {
            jQuery(this).val(defaultValue);
        }
    });

    // Search for the form which has the element
    jQuery("form:has(#"+element.id+")")
    // If the form gets resetted, set the default value back
    .bind('reset', function(e) {
        jQuery(element).val(defaultValue);
        jQuery(element).removeClass(options.changeClass);
    }) 
    // If the form gets submitted empty, remove the default values
    .bind('submit', function(e) {
        if(jQuery(element).val() == defaultValue)
            jQuery(element).val('');
    });
};