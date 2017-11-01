window.onload = function(){
	document.getElementById("search").addEventListener("click",myFunction1);
	document.getElementById("get_all").addEventListener("click",myFunction2);
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
function myFunction2(){
	let ajax_request = new XMLHttpRequest();
	ajax_request.onreadystatechange = function(){
		if(ajax_request.readyState === 4 && ajax_request.status === 200){
			let result = "<ol>";
			let xml = ajax_request.responseXML;
			let terms = xml.getElementsByTagName("definition");
			for(let index = 0; index < terms.length; index++){
				result+="<li><h3>"+terms[index].getAttribute("name")+"</h3><p>"+terms[index].childNodes[0].nodeValue+"</p><p> -"+terms[index].getAttribute("author")+"</p></li>";
			}
			result+="</ol>";
			document.getElementById("result").innerHTML="<h3>Result</h3>"+result;
		}
	};
	ajax_request.open("GET","request.php?q=&all=true",true);
	ajax_request.send();
}