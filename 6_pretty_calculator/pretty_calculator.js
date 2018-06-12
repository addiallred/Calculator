function myFunction(value){
	if(value == 'C')
	{
		document.getElementById("userinput").innerHTML = "";
		return;
	}
	else if(value == '=')
	{
		string = eval(document.getElementById("userinput").innerHTML);
		document.getElementById("userinput").innerHTML = string;
		return;
	}
	document.getElementById("userinput").innerHTML += value;
}