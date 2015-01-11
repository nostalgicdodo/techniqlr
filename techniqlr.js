
;(function () {

	var _ = this.techniqlr || {};





	_.resetIntuitiveTransform2dContext = function resetContextTransform (context2d) {
		context2d.setTransform(1, 0, 0, -1, 0, context2d.canvas.height);
		/* same as
			context2d.scale(1, -1);
			context2d.translate(0, -context2d.canvas.height);
		*/

		return context2d;
	};

	_.resetDefaultTransform2dContext = function resetContextTransform (context2d) {
		context2d.setTransform(1, 0, 0, 1, 0, 0);

		return context2d;
	};

	/*
	*	! better implementation required
	*/
	_.toPixelArray = function toPixelArray (rawImageData) {

		var
			pixelArray = [],
			i = 0,
			len = rawImageData.length;

		while(i < len) {
			pixelArray.push(rawImageData.slice(i, i += 4));
		}

		return pixelArray;

	};

	/*
	*	-----------------
	*	utility functions
	*	-----------------
	*/

	_.mapOverChunk = function mapOverChunk (array, callback, chunk) {
		return "not implemented yet.";
	}





	this.techniqlr = _;

	console.log("techniqlr-ed.");

}.call(this));
