var butt = document.getElementById("butt");
var div = document.getElementById("form1");
butt.addEventListener("click",function()
{
	butt.style.visibility="visible";
}
);

function loginCheck()
{

var uname = document.forms["login"]["uname"].value;
var upass = document.forms["login"]["upass"].value;

var logins = [["aditya","password"],["Anand","password"]];

console.log(logins.length);

	
	for(var i=0;i<logins.length;i++)
	{
		if(logins[i][0]==uname && logins[i][1]==upass)
		{
			return true;
		}
	}
	
	return false;
}