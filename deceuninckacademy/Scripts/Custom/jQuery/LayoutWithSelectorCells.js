function HighLightSelectorCell(cellObject) {
    if (cellObject != null) {
        $(cellObject).addClass("active");
        var currentImage = $(cellObject).find("img")[0];
        if (currentImage.getAttribute('src') == '../../../Content/Images/spacer.gif') {
            $(cellObject).find("img").addClass("spacer");
        }
    }
}
function UpdateBlockStyles() {
    // First we should cycle all cells and reset styles
    // Flag the currently checked cell when coming across it
    $(".BlockLayoutWithCellSelectors td.active").removeClass("active");
    $(".BlockLayoutWithCellSelectors td").each(function () {
        var currentCell = $(this);
        $(this).find("input:radio").each(function () {
            if ($(this)[0].checked) HighLightSelectorCell(currentCell);
        });
    });
}

// Hook code for celll selectors
$(document).ready(function () {
    $(".BlockLayoutWithCellSelectors td").each(function () {
        if ($(this).find("img").length == 0) {
            $(this).css('visibility', 'hidden');
        }
    });
    // Current selected input radio button
    UpdateBlockStyles();
    // Enable click events on each cell
    $(".BlockLayoutWithCellSelectors td").click(function () {
        $(this).find("input")[0].checked = true;
        $(this).find("input").trigger("change");
        UpdateBlockStyles();

        // Forward to the next screen
        //$("#cphDocumentContent_topActionChain_nextStepImageButton").click();
    });
});