  
var w = screen.availWidth;
var h = screen.availHeight;
 
function div_show(){

var d=document.getElementById('popupContact');
d.style.display = "block";
d.style.border = "2px solid rgb(240, 158, 158)";
d.style.top = 50 + "%";
d.style.left = 50 + "%";


d.style.left = (parseInt(d.style.left)/100)* w + "px";
d.style.left = (parseInt(d.style.left)-400) + "px";
d.style.left = (parseInt(d.style.left)/w)*100 + "%";

d.style.top = (parseInt(d.style.top)/100)* h + "px";
d.style.top = (parseInt(d.style.top)-220) + "px";
d.style.top = (parseInt(d.style.top)/h)*100 + "%";



}

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $('#timediv span').text(h+":"+m+":"+s);
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


function myfunc(){
	
	$('#one span').text(store.get('name'));
	startTime();

		
	
}

function check(e){ 

var zzz=document.getElementById('myname').value;
store.set('name',zzz);
$('#popupContact').hide()
$('#one span').text(store.get('name'));


var target = (e && e.target) || (event && event.srcElement); 

var obj = document.getElementById('popupContact'); 
var obj2 = document.getElementById('popup'); 

checkParent(target)?obj.style.display='none':null; 
target==obj2?obj.style.display='block':null; 
} 

function checkParent(t){ 

while(t.parentNode){ 
if(t==document.getElementById('popupContact')){ 
return false 
} 
t=t.parentNode 
} 
return true 
} 



function awesomeTask() {
	
}


function clickHandler(e) {
  check(e);
}

function clickHandlerzz(e) {
  div_show();
}





document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.qwerty').addEventListener('click',clickHandlerzz);
  document.querySelector('.lolz').addEventListener('click',clickHandler);
  document.getElementById('bdy').onload=myfunc();
});
