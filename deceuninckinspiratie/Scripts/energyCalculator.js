var currentCountryCode = 'BE';
var _data_Countries = new Array('BE', 'CZ', 'DE', 'ES', 'FR', 'IT', 'LU', 'NL', 'PL', 'TR', 'UK');
var _data_CountryHeatingDegreeDays = new Array(2872.35, 3570.638, 3239.188, 1841.898, 2483.137, 1970.928, 3209.932, 2902.089, 3615.772, 2699.209, 3114.919);
var _data_TypeOfBuilding = new Array(14, 25, 20, 35, 40);
var _data_CurrentWindowSystem = new Array(4.72, 2.84, 4.93, 2.84, 5.83, 3.49);
var _data_NewWindowSystem = new Array(1.4, 1.1, 0.9);
var _data_HeatingSystem = new Array(new Array(0.43, 0.83, 10, 0.26),
                                            new Array(0.49, 0.07, 1, 0.2),
                                            new Array(0.88, 0.22, 1, 0.64));
var _data_ExpectedAnnualPriceEvolution = 5;

//PDF Settings
var url = "http://toolbox.deceuninck.com/PdfFormFiller/EnergyCalculator/EnergyCalculatorHandler.ashx";
var decino = "dec";
var fn = "EnergyCalculator.pdf";

function PrintToPdf(lang, lf) {
    if (AllFieldsAreFilledIn()) {

        var priceEvolutionArray = GetPriceEvolutionArray();
        var euroArray = GetEuroArray(priceEvolutionArray);
        var kgCo2Array = GetKgCo2Array();

        var destination = url;
        destination += "?decino=" + decino + "&country=" + currentCountryCode + "&language=" + lang + "&lf=" + lf + "&fn=" + fn;
        destination += "&year1=" + Math.round(euroArray[1], 0) + "|" + Math.round(kgCo2Array[1], 0);
        destination += "&year5=" + Math.round(euroArray[5], 0) + "|" + Math.round(kgCo2Array[5], 0);
        destination += "&year10=" + Math.round(euroArray[10], 0) + "|" + Math.round(kgCo2Array[10], 0);
        destination += "&year15=" + Math.round(euroArray[15], 0) + "|" + Math.round(kgCo2Array[15], 0);
        destination += "&year20=" + Math.round(euroArray[20], 0) + "|" + Math.round(kgCo2Array[20], 0);
        destination += "&year25=" + Math.round(euroArray[25], 0) + "|" + Math.round(kgCo2Array[25], 0);
        destination += "&year30=" + Math.round(euroArray[30], 0) + "|" + Math.round(kgCo2Array[30], 0);

        location.href = destination;
    }
}

$(function () {
        
    if ((window.location.href.toLowerCase().indexOf("figraph") > -1) || (window.location.href.toLowerCase().indexOf("localhost") > -1)) {
        url = "http://figraph.deceuninck.com/toolbox/energycalculatorhandler.ashx"
    }   
    $(window).resize(function () {
        //RepositionForm();
    });
    //RepositionForm();

    // Load the first section
    ViewSection(1);

    // Load the country specifics
    SetCountryHeatingDegreeDays('BE');

    // Setup for dropdownlists in first section
    $("select").click(function () {
        var h = '#' + $(this)[0].id.replace('comboBox', 'hdnParam');
        var t = '#' + $(this)[0].id.replace('comboBox', 'link');
        $(h).val($(this).val());
        $(t).html($(this).context[$(this).context.selectedIndex].text);
        $(this).hide();
    });
    $("select").each(function () {
        //$(this).hide();
        $(this).attr('size', $(this)[0].length);
    });

    // Dropkick the selects
    $("select").dropkick();
    $(".dk_toggle").attr('style', 'width: 300px');

    // Setup for radiobuttons in second section
    $("#radiobuttonTableRow img").click(function () {
        $("#radiobuttonTableRow img").each(function () {
            $(this).attr('src', $(this).attr('src').replace('blauw', 'wit'));
        });
        $(this).attr('src', $(this).attr('src').replace('wit', 'blauw'));
    });

    $("#step1 table td:first-child").css('width', '360');
    $(".dk_toggle").attr('style', 'width: 240px');

});

function SetCountryHeatingDegreeDays(countryCode) {
    $("#hdnCountryHeatingDegreeDays").val();
}

//function RepositionForm() {
//    $("#formEnergyCalculator").center();
//}

function GetYearlySavingEuro(countryCode, currentWindowSystem, newWindowSystem, typeOfBuilding, heatingSystem) {

    // Load values into variables for calculation
    var heatingDegreeDaysValue = _data_CountryHeatingDegreeDays[$.inArray(countryCode, _data_Countries)];
    var typeOfBuildingValue = _data_TypeOfBuilding[typeOfBuilding - 1];
    var currentWindowSystemValue = _data_CurrentWindowSystem[currentWindowSystem - 1];
    var newWindowSystemValue = _data_NewWindowSystem[newWindowSystem - 1];
    var heatingSystemEfficiencyValue = _data_HeatingSystem[heatingSystem - 1][0];
    var heatingSystemPriceValue = _data_HeatingSystem[heatingSystem - 1][1];
    var heatingSystemKWhUnitValue = _data_HeatingSystem[heatingSystem - 1][2];

    return heatingDegreeDaysValue * 24 / 1000 * (currentWindowSystemValue - newWindowSystemValue) * typeOfBuildingValue / heatingSystemEfficiencyValue / heatingSystemKWhUnitValue * heatingSystemPriceValue;

}

function GetYearlySavingKgCo2(countryCode, currentWindowSystem, newWindowSystem, typeOfBuilding, heatingSystem) {

    // Load values into variables for calculation
    var heatingDegreeDaysValue = _data_CountryHeatingDegreeDays[$.inArray(countryCode, _data_Countries)];
    var typeOfBuildingValue = _data_TypeOfBuilding[typeOfBuilding - 1];
    var currentWindowSystemValue = _data_CurrentWindowSystem[currentWindowSystem - 1];
    var newWindowSystemValue = _data_NewWindowSystem[newWindowSystem - 1];
    var heatingSystemEfficiencyValue = _data_HeatingSystem[heatingSystem - 1][0];
    var heatingSystemKgCo2KWhValue = _data_HeatingSystem[heatingSystem - 1][3];

    return heatingDegreeDaysValue * 24 / 1000 * (currentWindowSystemValue - newWindowSystemValue) * typeOfBuildingValue / heatingSystemEfficiencyValue * heatingSystemKgCo2KWhValue;
}

function GetPriceEvolutionArray() {
    var yearlySavings = GetYearlySavingEuro(currentCountryCode, $("#comboBox2").val(), $("#hdnParam4").val(), $("#comboBox1").val(), $("#comboBox3").val());
    var yearlyPriceEvolution = _data_ExpectedAnnualPriceEvolution / 100 + 1;

    var resultsArray = new Array();
    resultsArray.push(0);
    resultsArray.push(yearlySavings);
    for (i = 1; i < 30; i++) { resultsArray.push(resultsArray[i] * yearlyPriceEvolution); }

    return resultsArray;
}

function GetEuroArray(priceEvolutionArray) {

    var yearlySavings = GetYearlySavingEuro(currentCountryCode, $("#comboBox2").val(), $("#hdnParam4").val(), $("#comboBox1").val(), $("#comboBox3").val());

    var resultsArray = new Array();
    resultsArray.push(0);
    for (i = 0; i < 30; i++) { resultsArray.push(priceEvolutionArray[i + 1] + resultsArray[i]); }

    return resultsArray;
}

function GetKgCo2Array() {

    var yearlySavings = GetYearlySavingKgCo2(currentCountryCode, $("#comboBox2").val(), $("#hdnParam4").val(), $("#comboBox1").val(), $("#comboBox3").val());
    var resultsArray = new Array();

    resultsArray.push(0);
    for (i = 1; i <= 30; i++) { resultsArray.push(yearlySavings * i); }

    return resultsArray;
}

function SetSavingTotals(costSavings, co2Savings) {
    $("#hdnCostSavings").val(costSavings);
    $("#hdnCo2Savings").val(co2Savings);
}
function addThousandSeparatorPoints(n) {
    var rx = /(\d+)(\d{3})/;
    return String(n).replace(/^\d+/, function (w) {
        while (rx.test(w)) {
            w = w.replace(rx, '$1.$2');
        }
        return w;
    });
}
function UpdateStatistics(year, columnCostSavings, columnCo2Savings) {

    var maxAmountOfHeight = 160;

    // Define some selectors
    var columnSelector = "#year" + year + " img";
    var costSavedTextSelector = "#year" + year + " .savingsCost";
    var co2SavedTextSelector = "#year" + year + " .savingsCo";

    // Add the labels on top of the bars
    $(costSavedTextSelector).html('&euro; ' + addThousandSeparatorPoints(Math.round(columnCostSavings, 0)));
    $(co2SavedTextSelector).html(addThousandSeparatorPoints(Math.round(columnCo2Savings, 0)) + ' kg');

    var blueBar = $(columnSelector).eq(0);
    var greenBar = $(columnSelector).eq(1);

    // First we need the total amounts
    var costSaved = $("#hdnCostSavings").val();
    var co2Saved = $("#hdnCo2Savings").val();

    // Place totals into their containers
    $("#statsTotalsCost span").html("&euro; " + addThousandSeparatorPoints(Math.round($("#hdnCostSavings").val())));
    $("#statsTotalsCo2 span").html(addThousandSeparatorPoints(Math.round($("#hdnCo2Savings").val())) + " kg");

    // Now let's calculate the amount of pixels we need them to be, maximum amount of pixels is set
    var blueBarSize = columnCostSavings / costSaved * maxAmountOfHeight;
    var greenBarSize = columnCo2Savings / co2Saved * maxAmountOfHeight;

    // Animate the bars
    $(blueBar).fadeIn('normal').delay(500).animate({
        'width': 20,
        'height': blueBarSize
    }, 2000);
    $(greenBar).fadeIn('normal').delay(500).animate({
        'width': 20,
        'height': greenBarSize
    }, 2000, function () {
    });

}

function ViewSection(sectionNumber) {

    // Update the actionchain to show the correct highlighted button
    $("#actionChain img").each(function () {
        $(this).attr('src', $(this).attr('src').replace('blauw', 'wit'));
    });

    // Build some strings as jQuery selectors
    var iconId = '#icon' + sectionNumber;
    if ((sectionNumber == 1) || (sectionNumber == 2) || (sectionNumber == 3)) {
        $("#actionChain").show();
        $(iconId).attr('src', $(iconId).attr('src').replace('wit', 'blauw'));
    } else {
        $("#actionChain").hide();
    }

    // Do some work with the requested section
    var sectionName = '#step' + sectionNumber;
    var subSectionName;

    $('.section').hide();

    // Either way we should reset the graph first before we do anything
    ResetStatistics();

    // If this is the graphics section then we should perform some calculations and checks
    if (sectionNumber == 3) {

        if (AllFieldsAreFilledIn()) {

            subSectionName = '#statsContainer';

            var priceEvolutionArray = GetPriceEvolutionArray();
            var euroArray = GetEuroArray(priceEvolutionArray);
            var kgCo2Array = GetKgCo2Array();

            // Totals for these statistics
            SetSavingTotals(euroArray[30], kgCo2Array[30]);

            // Update each column
            UpdateStatistics(1, euroArray[1], kgCo2Array[1]);
            UpdateStatistics(5, euroArray[5], kgCo2Array[5]);
            UpdateStatistics(10, euroArray[10], kgCo2Array[10]);
            UpdateStatistics(15, euroArray[15], kgCo2Array[15]);
            UpdateStatistics(20, euroArray[20], kgCo2Array[20]);
            UpdateStatistics(25, euroArray[25], kgCo2Array[25]);
            UpdateStatistics(30, euroArray[30], kgCo2Array[30]);

        } else {

            subSectionName = '#errorsContainer';
        }
    }

    // Shows the correct section
    $(sectionName).show();
    $(subSectionName).show();
}

function ResetStatistics() {
    $(".column img").height(0);
}

function AllFieldsAreFilledIn() {
    var allIsFilledIn = true;
    if ('' == $("#comboBox1").val()) allIsFilledIn = false;
    if ('' == $("#comboBox2").val()) allIsFilledIn = false;
    if ('' == $("#comboBox3").val()) allIsFilledIn = false;
    if ('' == $("#hdnParam4").val()) allIsFilledIn = false;
    return allIsFilledIn;
}
function SetHiddenField(fieldName, buttonValue) {
    var selector = '#' + fieldName;
    $(selector).val(buttonValue);
}

//$.fn.center = function () {
//    this.css("position", "absolute");
//    this.css("top", Math.max(0, (($(window).height() - 579 - footerHeight) / 2) + $(window).scrollTop()) + "px");
//    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
//    return this;
//}
