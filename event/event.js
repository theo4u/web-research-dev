/**
 * @param  {[type]}
 * @return {[type]}
 */
if (typeof(EventSource) !== "undefined") {
	var source = new EventSource("event.php");
	source.onmessage = function(event) {
		 var data = JSON.parse(event.data);
       console.log(data);

		document.getElementById("result").innerHTML +="{id:"+ data.id + ", msg:"+data.msg+"}<br>";
	};
} else {
	document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
}