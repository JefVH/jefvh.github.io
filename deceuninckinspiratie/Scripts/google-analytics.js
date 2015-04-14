$(document).ready(function () {
  

    var url = location.pathname;
    jQuery("a").focusout(function () {
        this.blur();
    });
    jQuery("a").focus(function () {
        this.blur();
    });
     // The slashes are to ensure the period is in the url, the $ is to make sure it is the end of the url, the i is to make it case insensitive.
    filetypes = /\.doc$|\.docx$|\.ai$|\.bmp$|\.dgn$|\.dwg$|\.dxf$|\.emf$|\.eps$|\.fci$|\.htm$|\.igs$|\.jpg$|\.pld$|\.png$|\.rmk$|\.stl$|\.stp$|\.tbn$|\.tif$|\.w10$|\.x10$|\.xls$|\.xlsx$|\.exe$|\.zip$|\.pdf$|\.psd$/i;
    jQuery("a").not('a[href^=http]').each(function () {
        if (jQuery(this).attr("href") != undefined){
            if (jQuery(this).attr("href").match(filetypes)) {
                jQuery(this).click(function () {
                    var Argument = window.location.href.replace("http://", "").replace("https://", "") + "_downloads?" + jQuery(this).attr("href").replace("../", "").replace("http://", "").replace("https://", "");
                    _gaq.push(['_trackPageview', Argument.replace("#downloads?", "downloads?").replace(".aspx?downloads?", ".aspxdownloads?")]);
                    if (!this.target == "_blank") {
                        setTimeout('document.location = "' + jQuery(this).attr("href") + '"', 100);
                    }
                });
            }
        }
    })
});

function GATakeOverExistingPathTrackEventLink(string) {
    var returnstring = window.location.href.replace("http://", "").replace("https://", "") + string;
    return returnstring;
}

