
var arr=[["aditya","password1"],["anand","password"]];

//var arr=JSON.parse(localStorage.arr1);

var hide=document.getElementById('5').style.visibility="hidden";
var pehla=document.getElementById('2');
var doosra=document.getElementById('3');
var teesra=document.getElementById('4');

//localStorage.arr = JSON.stringify(arr);
function storeProducts1(arr)
{
localStorage.arr1 = JSON.stringify(arr);
}


//document.getElementById('5').style.visibility="hidden";


function newUser()
{
document.getElementById('5').style.visibility="visible";
//var pehla=document.getElementById("2").value;

//alert(pehla.value);
//var doosra=document.getElementById('3').value;
//var teesra=document.getElementById('4').value;

//else 
//{
var add=document.getElementById("6");
add.addEventListener("click",function()
							{
								//arr.push([document.forms["regForm"]["uname"].value, document.forms["regForm"]["pass"].value]);
								//for(var i=0;i<arr.length;i++);
								
								//alert(i);
								if(doosra.value!=teesra.value)
								{
								alert("Passwords don't match");
								}
								else
								{
								arr.push([pehla.value,doosra.value]);
								storeProducts1(arr);
								console.log(arr);
								//alert(arr[3][0]);
								//arr[[i][1]]=doosra;
								alert("Added in ARRAY");
								document.getElementById("5").style.visibility="hidden";
								}
							
							}
							);
//}
}

function check1()
{
var flag2=0;

var textTest1=document.forms["login"]["text1"].value;
var textTest2=document.forms["login"]["text2"].value;

for(var i=0;i<arr.length;i++)
{
	//console.log("hey");
if(textTest1==arr[i][0] && textTest2==arr[i][1])
	{
	flag2=0;
	
	alert("Welcome "+arr[i][0]);
	sessionStorage.Name=JSON.stringify(textTest1);
	return true;
	}
	else
	flag2=1;
}
if(flag2==1)
{
alert("Khisakkk");
return false;
}
}
         {
		cout<<"ENter the node and the one u want to appendn";
		cin>>loc>>no1;
		connect(no1,loc);
		cout<<"y for more and n to displayn";
		cin>>choice;
	}
	display();
}