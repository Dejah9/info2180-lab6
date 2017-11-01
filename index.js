window.onload = function(){
	document.getElementById("search").addEventListener("click",myFunction1);
};
function myFunction1(){
	let ajax_request = new XMLHttpRequest();
	ajax_request.onreadystatechange = function(){
		if(ajax_request.readyState === 4 && ajax_request.status === 200){
			alert(ajax_request.responseText);
		}
	};
	ajax_request.open("GET","request.php?q=definition",true);
	ajax_request.send();
}