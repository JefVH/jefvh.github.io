function check_clicked($target)
{
	if($target.is('input'))
	{
		return true;
	}
	else if($target.is('td'))
	{
		if($target.hasClass('action-td'))
		{
			return true;
		}
		else
		{
			var $inputs = $target.find('input');
			if($inputs.length > 0)
			{
				if($inputs.attr('checked') == undefined)
				{
					$inputs.attr('checked', 'checked');
				}
				else
				{
					$inputs.removeAttr('checked');
				}
				return true;
			}
		}
	}

	return false;
}

$(function () {
	// clickable element
	$('.blocklink').click(function(e){
		var $target = $(e.target);
		if( ! check_clicked($target))
		{
			window.location = $(this).find('a.target').attr('href');
		}
	});

	// fancybox
	$('.fancybox').fancybox({
	    openEffect  : 'elastic',
	    closeEffect : 'none',
	    loop : false
	});

	// showmore element
	$('.showmore').click(function(e){
		var $this = $(this);
		$this.find('span').toggleClass('icon-chevron-down icon-chevron-up');
		var $target = $this.next('.hiddenmore');
		if($target.length > 0)
		{
			$target.toggle();
		}
	});

	$('.showhiddenrow button').bind('click', function(){
		var $this = $(this);
		var target = $this.data('target');
		if(target)
		{
			$('#'+target).toggleClass('hide');
		}
	});

	// delete button
	$(".confirm").bind('click', function(){
		var $this = $(this);
		var title = ($this.data('confirm-title')) ? $this.data('confirm-title') : $(this).data('title');
		title = (typeof title !== 'undefined') ? title : 'Are you sure you want to delete this?';
		return ( ! $(this).hasClass('disabled')) ? confirm(title) : false;
	});

	$("button").not('.confirm').bind('click', function(){
		return ( ! $(this).hasClass('disabled'));
	});

	// Check URL for querystring-actions
    var hashes = window.location.hash.slice(window.location.hash.indexOf('#') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        var hash = hashes[i].split('=');
        switch(hash[0])
		{
			case 'preview':
				showPreview($('.preview_'+hash[1]));
				break;
		}
    }

	function showPreview($this)
	{
		if($this.length > 0)
		{
			var title = $this.data('title');
			var href = $this.data('href');
			title = (typeof title !== 'undefined') ? title : 'Preview';
			href = (typeof href !== 'undefined') ? href : $this.attr('href');
			if(href !== '' && href !== '#' && typeof href !== 'undefined')
			{
				var myWindow = window.open(href, title, "height=" + $(window).height() + ",width=768, scrollbars=1");
				if(myWindow !== null)
				{
					myWindow.moveTo(($(window).width()*0.5)-(768*0.5), 20);
				}
				window.location.hash = '';
			}
		}
	}

	$('.preview').click(function(e){
		showPreview($(this));
		e.preventDefault();
	});

/*
	if($(".widget_table").length>0)
	{
		$("table tbody tr").click(function(e){
			var locationUrl = $(this).find("a").attr("href");
			window.location = locationUrl;
		});
	}
*/
	var url = window.location.href;
	var sort_url = url;
	var nosort_querystrings = [];
	var current_sort_slug = '';
	if(url.indexOf('?') !== -1)
	{
		sort_url = url.split('?')[0];
		sort_querystring = url.split('?')[1];
		querystrings = (sort_querystring.indexOf('&') !== -1) ? sort_querystring.split('&') : [sort_querystring];
		for(i=0;i<querystrings.length;i++)
		{
			if(querystrings[i].split('=')[0] == 'sort')
			{
				current_sort_slug = querystrings[i].split('=')[1];
			}

			if(querystrings[i].split('=')[0] != 'sort' && querystrings[i].split('=')[0] != 'dir')
			{
				nosort_querystrings.push(querystrings[i]);
			}
		}

		// Add querystring to paginated urls
		$('div.pagination a').each(function()
		{
			var $this = $(this);
			var href = $this.attr('href');
			if(href !== '#')
			{
				$this.attr('href', href+'?'+sort_querystring);
			}
		});
	}

	// Enable sort
	$(".sort th").each(function(){
		var $this = $(this);
		var slug = $this.data('sort');
		var current_dir = $this.data('direction');
		var new_dir = 'down';
		var active = '';
		var icon_class = 'icon-sort';

		if(current_sort_slug == slug)
		{
			new_dir = (current_dir == 'up') ? 'down' : 'up';
			active = ' active';
			icon_class = 'icon-sort-'+current_dir;
		}

		if(slug != '' && typeof(slug) !== 'undefined')
		{
			var other_querystring = (nosort_querystrings.length > 0) ? nosort_querystrings.join('&')+'&' : '';
			$this.html('<a href="'+sort_url+'?'+other_querystring+'sort='+slug+'&dir='+new_dir+'" class="sorter '+current_dir+active+'">'+$this.html()+' <i class="'+icon_class+'"></i></a>');
		}
	});

	// char counter
	$('.charcounter').bind('keypress keyup focus', function(){
		var $this = $(this);
		var text = $this.val();
		var maxlength = parseInt($this.attr('maxlength'));
		var length = text.length;
		var $count = $('#'+this.id+'_count');

		if( ! isNaN(maxlength) && $count.length)
		{
			$count.html(maxlength - length);
		}
	});

	$('.charcounter').trigger('keyup');

	$(".bar-chart").each(function() {
		var $this = $(this);

		var url = $this.data('url');

		if(typeof url !== 'undefined')
		{
			$.ajax({
				url: $this.data('url'),
				type: 'GET',
				dataType: 'json',
				success: drawGraph
			});
		}

		function drawGraph(result)
		{
			if(jQuery.isPlainObject(result))
			{
				// Adjust timestamps to local timezone
				var d = new Date();
				var timezone_diff = d.getTimezoneOffset();
				for(var i=0; i<result.lines.length; ++i)
				{
					for(var j=0; j<result.lines[i]['data'].length; ++j)
					{
						var adjusted = parseInt(result.lines[i]['data'][j][0]) - (timezone_diff*60*1000);
						result.lines[i]['data'][j][0] = adjusted;
					}
				}

				previousPoint = null;
				var plot = $.plot($this, result.lines, result.options);
				var $overview_holder = $this.next('.overview');
				var $clear_btn = $overview_holder.next('.clearselection');

				if(typeof(result.extra.overview) !== 'undefined' && result.extra.overview && $overview_holder.length > 0)
				{
					$overview_holder.show();
					$clear_btn.show();

					var overview_options = {
						series: {
							lines: {
								show: true,
								lineWidth: 1
							},
							shadowSize: 0
						},
						legend : {show: false},
						colors: ["#F90","#B2D234","#666","#BBB"],
						xaxis: {
							ticks: [],
							mode: "time"
						},
						yaxis: {
							ticks: [],
							min: 0,
							autoscaleMargin: 0.1
						},
						selection: {
							mode: "x"
						}
					};

					var overview = $.plot($overview_holder, result.lines, overview_options);

					$this.bind("plotselected", function(event, ranges){
						plot = $.plot($this, result.lines, $.extend(true, {}, result.options, {
							xaxis: {min: ranges.xaxis.from, max: ranges.xaxis.to}
						}));

						// don't fire event on the overview to prevent eternal loop
						overview.setSelection(ranges, true);
					});

					$overview_holder.bind("plotselected", function (event, ranges)
					{
						plot.setSelection(ranges);
					});

					$clear_btn.bind('click', function () {
						plot.clearSelection(true);
						overview.clearSelection(true);

						plot = $.plot($this, result.lines, result.options);
						overview = $.plot($overview_holder, result.lines, overview_options);
					});
				}


				if(typeof(result.extra.tooltip) !== 'undefined' && result.extra.tooltip)
				{
					$this.bind("plothover", function (event, pos, item)
					{
						if(item)
						{
							if(previousPoint != item.dataIndex)
							{
								var offset = $this.offset();
								previousPoint = item.dataIndex;

								$this.find('.tooltip').remove();
								var x = item.datapoint[0],
									y = item.datapoint[1];

								var date = new Date(x);
								var formattedTime = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
								showTooltip(item.pageX - offset.left, item.pageY - offset.top, item.series.label + ' on ' + formattedTime + ': ' + y);
							}
						}
						else
						{
							$this.find('.tooltip').remove();
							previousPoint = null;
						}
					});
				}
			}
			else
			{
				$this.parents('.widget').remove();
			}
		}

		function showTooltip(x, y, contents)
		{
			$('<div class="tooltip">' + contents + '</div>').css( {
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 15,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#fee',
				opacity: 0.80,
				width: '115px'
			}).appendTo($this).fadeIn(200);
		}
	});

	var $choices = $('.choice');
	$choices.bind('click', function(){
		//old
		var $choice = $('.choice.active');
		$choice.removeClass('active');
		var $view = $($choice.data('view'));
		$view.addClass('hidden');

		//new
		$choice = $(this);
		$choice.addClass('active');
		$view = $($choice.data('view'));
		$view.removeClass('hidden');

		//store value in field
		var value = $choice.data('value');
		var $field = $($choice.data('field'));
		$field.val(value);
	});

	$choices.filter('.active').trigger('click');

	$('.datetimepicker').each(function(){
		var $this = $(this);
		var start = $this.data('startdate');
		var end = $this.data('enddate');
		$this.datetimepicker({
			weekStart: 1,
			startDate: start,
			endDate: end,
			autoclose: true,
			maxView: 'year',
			todayBtn: false,
			todayHighlight: true
		});
	});

	$('.datepicker').each(function(){
		var $this = $(this);
		$this.datetimepicker({
			weekStart: 1,
			autoclose: true,
			minView: 'month',
			maxView: 'year',
			todayBtn: false,
			todayHighlight: true,
			pickTime: false,
			format: 'yyyy-mm-dd'
		});
	});

	$("#scheduled").change(function(){
		if($("#scheduled").val() !== '')
		{
			$("#send_schedule").removeClass("hidden");
			$("#send_direct").addClass("hidden");
		}
		else
		{
			$("#send_schedule").addClass("hidden");
			$("#send_direct").removeClass("hidden");
		}
	});

	$('#all_grouping_checkbox').click(function(){
		var $this = $(this);
		$('.grouping_checkbox').attr('checked', $this.prop('checked'));
	});

	$('button.clearline').click(function(){
		var num = (this.id).replace('clear-', '');
		$('#tester-'+num).find('input').val('');
	});

	$('td.addtester').click(function()
	{
		var $this = $(this);
		$this.removeClass('addtester').parent().next().removeClass('hide');
		$this.html('');
		return false;
	});

	var $creditsneeded = $('#creditsneeded');
	var $list_choosers = $('input.listchooser');
	var $credits_warning = $('#nocreditsenough');
	var $credits_submit = $('#send_direct, #send_schedule');

	function toggleCreditButtons(credits)
	{
		if(credits_available > 0)
		{
			if($credits_warning.length > 0 && $credits_submit.length > 0)
			{
				$credits_warning.toggleClass('hidden', (credits <= credits_available));
				$credits_submit.toggleClass('disabled', (credits > credits_available));
			}
		}
		else
		{
			$credits_submit.toggleClass('disabled', (valid_subscription === false || credits === 0));
		}
	}
	function calculatecredits()
	{
		if($credits_submit.length > 0)
		{
			checkCategoryOnChanges();
			var credits = 0;
			var choosen_lists = [];
			$list_choosers.each(function(){
				var list_id = this.getAttribute('data-list_id');
				if(this.checked && choosen_lists.indexOf(list_id) === -1)
				{
					credits += parseInt(this.getAttribute('data-credits-needed'));
					choosen_lists.push(list_id);
				}
			});
			toggleCreditButtons(credits);
			$creditsneeded.html(credits);
		}
	}

	function listChange(event, state)
	{
		var check_state = (typeof(state) !== 'undefined') ? state : this.checked;
		var list_id = this.getAttribute('data-list_id');
		$list_choosers.filter('.list'+list_id).each(function(){
			this.checked = check_state;
		});
		if(typeof(state) === 'undefined')
		{
			calculatecredits();
		}
	}

	function showhideLists(event, show)
	{
		var $this = $(this);
		var $li_group = $this.parent();
		var $ingroup = $li_group.find('.ingroup');
		var toshow = (typeof(show) !== 'undefined') ? show : $ingroup.hasClass('hidden');
		$ingroup.toggleClass('hidden', ! toshow);
		var showmore_content = ($ingroup.hasClass('hidden')) ? '+' : '-';
		$this.html(showmore_content);
	}

	$list_choosers.bind('change', listChange);
	$('.listgroup .showmore').bind('click', showhideLists);
	$('.listgroup .groupchooser').bind('change', function()
	{
		var check_status = this.checked;
		var cat_id = this.id.replace('cat_', '');
		var $li_group = $('#catli_'+cat_id);
		var $list_chooser = $li_group.find('.listchooser');
		$list_chooser.trigger('change', [check_status]);
		calculatecredits();
	});

	// Open categories where an item is checked
	$('input.listchooser').each(function(){
		if(this.checked)
		{
			$(this).parents('li').find('.showmore').trigger('click', true);
		}
	});

	function checkCategoryOnChanges()
	{
		// Check categories when all lists from it are checked
		$('input.groupchooser').each(function(){
			var $listchoosers = $(this).parents('li').find('.listchooser');
			this.checked = ($listchoosers.length === $listchoosers.filter(':checked').length);
		});
	}

	calculatecredits();

	// Tooltip/Popover
	$('.trigger_tooltip, .fixed_tooltip').popover({
		trigger: 'hover'
	});

	if(first_time)
	{
		$('.fixed_tooltip').popover('show');
	}

	// CK-editor
	if($('#body_html').length > 0)
	{
		CKEDITOR.replace('body_html');
	}

	var $chosen_admin = $('#chosen_admin');
	if($chosen_admin.length > 0)
	{
		$chosen_admin.chosen({no_results_text: "Oops, nothing found!", allow_single_deselect: true}).change(function(){
			var $this = $(this);
			var redirect = $this.val();
			if(redirect === '')
			{
				redirect = $this.data('login');
			}
			window.location = redirect;
		});
	}
});
