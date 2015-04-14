/// <reference path="../typings/jquery/jquery.d.ts" />

module PP {
	var $: JQueryStatic = jQuery;
	export class Main {

		private $win: JQuery = $(window);
		private $doc: JQuery = $(document);


		static SPEED: number = 500;
		static INTERVAL: number = 5000;
		static DURATION: number = 150;


		constructor() {

		}

		// PUBLIC METHODS

		// PRIVATE METHODS

		// EVENT HANDLERS
	}
}

// Call static main program
var Global : PP.Main = new PP.Main();

