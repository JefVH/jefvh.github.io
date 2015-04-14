/// <reference path="../typings/jquery/jquery.d.ts" />
 

var PP;
(function (PP) {
    var $ = jQuery;

    var Main = (function () {
        function Main() {
            this.$win = $(window);
            this.$doc = $(document);
        }
        Main.SPEED = 500;
        Main.INTERVAL = 5000;
        Main.DURATION = 150;
        return Main;
    })();
    PP.Main = Main;
})(PP || (PP = {}));



// Call static main program
var Global = new PP.Main();
//# sourceMappingURL=PP.js.map
