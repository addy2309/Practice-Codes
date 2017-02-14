var str = document.getElementById('string');
var task = document.getElementById('list');
var e = 13 ;
str.addEventListener("keydown",function(event)
  {
	if(event.keyCode == e)
	  {
		event.preventDefault();
		listAdd();
	  }
  }
);

function listAdd()
  {
    if(str.value)
	{
	  var li = document.createElement('li');
	  li.textContent = str.value;
	  str.value="";
	  task.appendChild(li);
	}
  }