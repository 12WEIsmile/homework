//放大镜的封装

// 传入待放大的 div的 jq对象 ，放大的图片路径
//Zoom($("#small"), "img/big.png");

function Zoom(jqObj, detailimgSrc) {
	jqObj.css("position", "relative");
	var tarHeight, tarWidth;
	$("<img />").attr("src", detailimgSrc).load(function() {
		tarHeight = this.height;
		tarWidth = this.width;
		this.smallDiv = $("<div>");
		this.detailDiv = $("<div>");
		this.smallDiv.css({
			"display": "none",
			"position": "relative",
			"width": "150px",
			"height": "150px",
			"opacity": "0.4",
			"background-color": "#fff",
			"cursor": "move"
		})
		var baseWidth = jqObj.css("width").slice(0, -2);
		var baseHeight = jqObj.css("height").slice(0, -2);
		var multi = tarWidth / baseWidth;
		var tarWidthAndHeight = 150 * multi;
		this.detailDiv.css({
			"display": "none",
			"width": tarWidthAndHeight,
			"height": tarWidthAndHeight,
			"border": "1px solid #ccc",
			"position": "absolute",
			"right": -tarWidthAndHeight - 50,
			"z-index": 99,
			"top": 0
		})
		jqObj.append(this.smallDiv);
		jqObj.append(this.detailDiv);
		var smallDivObj = this.smallDiv;
		var detailDivObj = this.detailDiv;
		jqObj.bind("mouseover", function(event) {
			smallDivObj.css("display", "block");
			detailDivObj.css("display", "block");
			$(document).bind("mousemove", function(event) {
				var leftPx = event.pageX - jqObj.offset().left - jqObj.css("border-width").slice(0, -2) - smallDivObj.css("width").slice(0, -2) / 2;
				var topPx = event.pageY - jqObj.offset().top - jqObj.css("border-width").slice(0, -2) - smallDivObj.css("height").slice(0, -2) / 2;
				var maxLeft = jqObj.css("width").slice(0, -2) - smallDivObj.css("width").slice(0, -2);
				var maxTop = jqObj.css("height").slice(0, -2) - smallDivObj.css("height").slice(0, -2);
				leftPx = leftPx < 0 ? 0 : leftPx;
				topPx = topPx < 0 ? 0 : topPx;
				leftPx = leftPx > maxLeft ? maxLeft : leftPx;
				topPx = topPx > maxTop ? maxTop : topPx;
				smallDivObj.css({
					"left": leftPx,
					"top": topPx
				})
				detailDivObj.css({
					"background-image": "url(" + detailimgSrc + ")",
					"background-position-x": -leftPx * tarWidth / baseWidth,
					"background-position-y": -topPx * tarHeight / baseHeight
				})
			})

		})
		jqObj.bind("mouseout", function() {
			smallDivObj.css("display", "none");
			detailDivObj.css("display", "none");
		})
	})
}
