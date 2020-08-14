(function($) {
	$.fn.snow = function(options) {
		var $flake = $('<div id="snowbox" />').css({
				'position': 'absolute',
				'z-index': '9999',
				'top': '0px' // 雪花初始下落位置
			}).html('&#10084'), // 图标字码  &#10084(爱心)  &#10052(雪花) 可直接用图标代替
			documentHeight = $(document).height(),
			documentWidth = $(document).width(),
			defaults = {
				minSize: 10,
				maxSize: 20,
				newOn: 600, // 雪花下落速度
				flakeColor: "#ff44aa" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
			},
			options = $.extend({}, defaults, options);
		var interval = setInterval(function() {
			var startPositionLeft = Math.random() * documentWidth - 100,
				startOpacity = 0.5 + Math.random(),
				sizeFlake = options.minSize + Math.random() * options.maxSize,
				endPositionTop = documentHeight - 100, // 到底部的距离消失
				endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
				durationFall = documentHeight * 10 + Math.random() * 5000;
			$flake.clone().appendTo('body').css({
				left: startPositionLeft,
				opacity: startOpacity,
				'font-size': sizeFlake,
				color: options.flakeColor
			}).animate({
				top: endPositionTop,
				left: endPositionLeft,
				opacity: 1
			}, durationFall, 'linear', function() {
				$(this).remove()
			});
		}, options.newOn);
	};
})(jQuery);
$(function() {
	$.fn.snow({
		minSize: 5,
		
		maxSize: 40,
		
		newOn: 800 
	});
});