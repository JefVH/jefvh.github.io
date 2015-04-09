var functions = (function ($) {

    return {
        handleError: function (code) {
            var spl = code.split("_");
            code = spl[0];

            if (code == "797" || code == "793" || code == "1") {
                location.href = "/Logout.aspx" + location.search;
                return true;
            }

            return false;
        },

        ie: function () {

            var undef,
                v = 3,
                div = document.createElement('div'),
                all = div.getElementsByTagName('i');

            while (
                div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
                all[0]
            );

            return v > 4 ? v : undef;
        }
    }
}(jQuery));