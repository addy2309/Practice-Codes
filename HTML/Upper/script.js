var butt = document.getElementById("butt");
var s = document.getElementById("str");


var i=0;
var temp="";
butt.addEventListener("click",function()
  {	var flag=0;
  
	  var str = s.value.toLowerCase();
	  str=str.split(" ");
	  
	for(i=0 ;i<str.length;i++)
	{
		str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	str=str.join(" ");

      alert(str);
	
	
  }
);

