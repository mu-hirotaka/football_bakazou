var DragHandler = {

	// private property.
	_oElem : null,

	// public method. Attach drag handler to an element.
	attach : function(oElem) {
		oElem.onmousedown = DragHandler._dragBegin;
		return oElem;
	},

	// private method. Begin drag process.
	_dragBegin : function(e) {
		var oElem = DragHandler._oElem = this;
		if (isNaN(parseInt(oElem.style.left))) { oElem.style.left = '0px'; }
		if (isNaN(parseInt(oElem.style.top))) { oElem.style.top = '0px'; }
		e = e ? e : window.event;
		oElem.mouseX = e.clientX;
		oElem.mouseY = e.clientY;
		document.onmousemove = DragHandler._drag;
		document.onmouseup = DragHandler._dragEnd;
		return false;
	},

	// private method. Drag (move) element.
	_drag : function(e) {
		var oElem = DragHandler._oElem;
		var x = parseInt(oElem.style.left);
		var y = parseInt(oElem.style.top);
		e = e ? e : window.event;
		oElem.style.left = x + (e.clientX - oElem.mouseX) + 'px';
		oElem.style.top = y + (e.clientY - oElem.mouseY) + 'px';
		oElem.mouseX = e.clientX;
		oElem.mouseY = e.clientY;
		return false;
	},

	// private method. Stop drag process.
	_dragEnd : function() {
		var oElem = DragHandler._oElem;
		document.onmousemove = null;
		document.onmouseup = null;
		DragHandler._oElem = null;
	}
};

// =============

function beginScript() {
//	var dragable1 = DragHandler.attach(document.getElementById('dragable1'));
//	var dragable2 = DragHandler.attach(document.getElementById('dragable2'));

	var dragable1 = DragHandler.attach($("#dragable1").get(0));
	var dragable2 = DragHandler.attach($("#dragable2").get(0));
}

// Multiple onload function created by: Simon Willison
// http://simon.incutio.com/archive/2004/05/26/addLoadEvent
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

addLoadEvent(function() {
	beginScript();
});

