var temp = document.getElementById("anchor1");
var form1 = document.getElementById("div1");
var list = document.getElementById("list");
var check = document.getElementById("Check");
var save = document.getElementById("save");
var clear = document.getElementById("clear");
var listItems=document.getElementById("list").getElementsByTagName("li");

if(!localStorage.products)
	{
	  localStorage.products = JSON.stringify([]);
	}
products= JSON.parse(localStorage.products);

clear.addEventListener("click",function()
	{
	localStorage.products="";
	}
);

var ProductId=0;
var ProductList = [];


//form1.style.visibility = "hidden";

temp.addEventListener("click",function()
	{
	temp.style.visibility = "hidden";
	form1.style.visibility = "visible";
	}
);

var pname = document.getElementById("Pname");
var pcost = document.getElementById("Pcost");
var pquan = document.getElementById("Pquan");

var con;
check.addEventListener("click",function()
	{
	con="";
	if(pname.value[0]==" ")
	{
		alert("Product Name Can Not Start With SPACE");
	}
	else if (pname.value && pcost.value && pquan.value )
	  {
		
		con+= pname.value + " ";
		con+= pcost.value + " ";
		con+= pquan.value + " ";
		
		var Products = new Object();
		Products.Id=ProductId;
		Products.Name=pname.value;
		Products.Cost=pcost.value;
		Products.Quan=pquan.value;
		ProductList.push(Products);
		
		
		//console.log(Products);
		pname.value = "";
		pcost.value = "";
		pquan.value = "";
		
		
		var li = document.createElement("li");
		li.textContent = con ;
		var butt = document.createElement("button");
		butt.setAttribute("id",ProductId);
		
		//butt.setAttribute("onclick","deleted(li)");
		//li.setAttribute("id",ProductId);
		list.appendChild(li);
		var txt = document.createTextNode("Delete");
		butt.appendChild(txt);
		li.appendChild(butt);
		deleted(ProductId,li);
		
		save.addEventListener("click" , function()
		  {
			console.log(ProductList);
			localStorage.products=JSON.stringify(ProductList);
		  }	
		);
		
		
		
		
		ProductId++;
      }
	else
	{
	alert("All The Fields Are Mandatory");
	}
	}
);




function deleted(prodid,li)
{	
	var test1 = document.getElementById(prodid);
	var flag = 0;
	
	test1.addEventListener("click",function()
	{
		li.parentNode.removeChild(li);
		
		for(var i =0 ; i < ProductList.length && flag == 0 ; i++)
		{
			if(ProductList[i]["Id"]==prodid)
			{
				ProductList.splice(prodid,1);
				flag=1;
			}
		}
			
		
		//console.log(ProductList);
		
	}
	);

}

