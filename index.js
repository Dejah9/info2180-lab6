window.onload = function(){
	document.getElementById("search").addEventListener("click",myFunction1);
};
function myFunction1(){
	let ajax_request = new XMLHttpRequest();
	ajax_request.onreadystatechange = function(){
		if(ajax_request.readyState === 4 && ajax_request.status === 200){
			document.getElementById("result").innerHTML="<h3>Result</h3>"+ajax_request.responseText;
		}
	};
	ajax_request.open("GET","request.php?q="+document.getElementById("value").value,true);
	ajax_request.send();
}