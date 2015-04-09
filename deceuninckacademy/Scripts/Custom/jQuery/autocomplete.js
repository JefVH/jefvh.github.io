$(function () {
    SetAutocomplete($(".productReferenceAutocomplete:visible"));
});

var lazyLoadingInstances = [];

function SetAutocomplete($selector, onSelectCallback) {
    $selector.autocomplete({
        serviceUrl: "/api/DirectOrder/SKU",
        paramName: "searchKey",
        params: function (item) { return GetData($(item)) },
        minChars: 0,
        width: '400px',
        noCache: true,
        autoSelectFirst: function (element) {
            return !$(element).hasClass("noErrorFieldValidation");
        },
        deferRequestBy: 500,
        tabDisabled: true,
        onSelect: function (suggestion) {
            if (true || $(this).val() !== suggestion.value) {
                $(this).val($.trim(suggestion.value));
                if (onSelectCallback !== undefined && $.isFunction(onSelectCallback)) {
                    onSelectCallback(this, suggestion);
                }
                $(this).autocomplete().currentValue = suggestion.value;
                if ($(this).nextAll("input[type=text]:visible:not(:disabled)").length > 0) {
                    $(this).nextAll("input[type=text]:visible:not(:disabled)").first().focus();
                    $(this).nextAll("input[type=text]:visible:not(:disabled)").first().select();
                    if ($(this).nextAll("input[type=text]:visible:not(:disabled)").first().autocomplete() !== undefined) {
                        $(this).nextAll("input[type=text]:visible:not(:disabled)").first().autocomplete().onValueChangeForce();
                    }
                }
            }
        },
        onSearchComplete: function (response, data) {
            var thisVal = $(this).val();
            if (data.suggestions.length == 1
                && (data.suggestions[0].value == thisVal || (thisVal.length == 0 && !$(this).hasClass("noErrorFieldValidation")))) {
                if ($(this).autocomplete().isDirty || thisVal.length == 0 || $(this).closest(".orderLine.error").length == 1) {
                    if ($(this).is(":focus")
                        || ($(this).nextAll("input[type=text]:visible").first().is(":focus") && $(this).nextAll("input[type=text]:visible").first().val().length == 0)
                        || $(this).closest(".orderLine.error").length == 1) {
                        $(this).val(thisVal + " ");
                        $(this).autocomplete().select(0);
                    } else {
                        if (onSelectCallback !== undefined && $.isFunction(onSelectCallback)) {
                            onSelectCallback(this, data.suggestions[0]);
                        }
                        $(this).autocomplete().hide();
                    }
                } else {
                    $(this).autocomplete().hide();
                }
                if ($(this).hasClass("errorfield")) {
                    $(this).removeClass("errorfield");
                    $(this).tooltip("disable");
                }
            } else if (data.suggestions.length == 0 && $.trim(thisVal).length > 0) {
                $(this).nextAll("input.productReferenceAutocomplete:visible").andSelf().filter(":not(.noErrorFieldValidation)").addClass("errorfield").closest(".orderLine").addClass("error");
                $(this).nextAll("input.productReferenceAutocomplete:visible").andSelf().filter(":not(.noErrorFieldValidation)").attr("title", $("#hfAutocompleteInvalidTooltip").val());
                $(this).nextAll("input.productReferenceAutocomplete:visible").andSelf().filter(":not(.noErrorFieldValidation)").tooltip();
            } else {
                if ($(this).hasClass("errorfield")) {
                    $(this).removeClass("errorfield");
                    $(this).tooltip("disable");
                }
                if (!$(this).is(":focus")) {
                    $(this).autocomplete().hide();

                    //Check if we have an exact match because user already left field so he is sure that it is correct, but lets check that
                    //If no exact match, error
                    var found = false;
                    for (var i = 0; i < data.suggestions.length; i++) {
                        if (data.suggestions[i].value == $.trim(thisVal)) {
                            found = true;

                            if (onSelectCallback !== undefined && $.isFunction(onSelectCallback)) {
                                onSelectCallback(this, data.suggestions[i]);
                            }
                            if ($(this).nextAll("input[type=text]:visible").first().is(":focus") && $(this).nextAll("input[type=text]:visible").first().val().length == 0) {
                                $(this).val(thisVal + " ");
                                $(this).autocomplete().select(0);
                            }

                            break;
                        }
                    }
                    if (!found) {
                        $(this).nextAll("input.productReferenceAutocomplete:visible").andSelf().filter(":not(.noErrorFieldValidation)").addClass("errorfield").closest(".orderLine").addClass("error");
                        $(this).nextAll("input.productReferenceAutocomplete:visible").andSelf().filter(":not(.noErrorFieldValidation)").attr("title", $("#hfAutocompleteInvalidTooltip").val());
                        $(this).nextAll("input.productReferenceAutocomplete:visible").andSelf().filter(":not(.noErrorFieldValidation)").tooltip();
                    }
                }
            }
        },
        onSuggestComplete: function (container) {
            $($(this).autocomplete().parentContainer)
                .find(".autocomplete-suggestion img.lazy:not(.lazy-ready)")
                .addClass("lazy-ready")
                .lazy({
                    bind: 'event',
                    appendScroll: container
                });
        },
        formatResult: function (suggestion, currentValue) {
            var result = "<div class=\"fiche\">";
            if (suggestion.photoProduct !== undefined && suggestion.photoProduct !== null && suggestion.photoProduct !== "") {
                result += "<div class=\"product\"><img class=\"lazy\" data-src=\"/DynamicFiles/GetPlmFile.ashx" + location.search + "&path=" + suggestion.photoProduct + "&maxW=50&maxH=50&flipImage=" + suggestion.flipImage + "\" alt=\"\" /></div>";
            }
            if (suggestion.photoColor !== undefined && suggestion.photoColor !== null && suggestion.photoColor !== "") {
                result += "<div class=\"color\"><img class=\"lazy\" data-src=\"/Content/Images/dcpimages/KLEUREN/COLR" + suggestion.photoColor + ".jpg\" alt=\"\" /></div>";
            }
            result += "<div class=\"text\">";
            result += "<span class=\"code\">" + suggestion.data + "</span> ";
            result += "<span class=\"description\">" + suggestion.description + "</span>";
            result += "</div>";
            result += "</div>";

            return result;
        }
    });
}

function GetData($item) {
    return {
        "division": division,
        "customer": customer,
        "language": language,
        "skuField": $item.data("skufield"),
        "productNumber": GetVal($item.prevAll().andSelf().filter("input[id*='product']")),
        "color": GetVal($item.prevAll().andSelf().filter("input[id*='color']")),
        "type": GetVal($item.prevAll().andSelf().filter("input[id*='type']")),
        "width": GetVal($item.prevAll().andSelf().filter("input[id*='width']")),
        "length": GetVal($item.prevAll().andSelf().filter("input[id*='length']"))
    };
}

function GetVal($item) {
    if ($item.val() === undefined) {
        return "";
    }

    return $item.val();
}