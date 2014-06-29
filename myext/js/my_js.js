  
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

function displayTime() {
    var str = "";

    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  var str = hours + ':' + minutes +':'+seconds +' '+ ampm;
   /* str += hours + ":" + minutes + ":" + seconds + " ";
    if(hours > 11){
        str += "PM"
    } else {
        str += "AM"
    }*/
    return str;
}

function startTime() {

    var opop=displayTime();
    $('#timediv span').text(opop);
    var t = setTimeout(function(){startTime()},500);

}
function startgreeting() {

    var opop=getgreeting();
    $('#one span').text(opop);
    var t = setTimeout(function(){startgreeting()},500);

}
function startdate() {

    var opop=mydate();
    $('#datediv span').text(opop);
    var t = setTimeout(function(){startdate()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



function mydate(){
	var m_names = new Array("January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December");
var datesuffix="th";
var d = new Date();
var curr_date = d.getDate();
if(curr_date%10==1){
	datesuffix="st";
}
if(curr_date%10==2){
	datesuffix="nd";
}
if(curr_date%10==3){
	datesuffix="rd";
}
if(curr_date>=11 && curr_date<=13){
	datesuffix="th";
}
var curr_month = d.getMonth();
var curr_year = d.getFullYear();
str=curr_date +datesuffix+" "+ m_names[curr_month] +" "+ curr_year;
    return str;
}

function myfunc(){
	startgreeting();
	/*var greeting=getgreeting();
  var usr=store.get('name');
  var myfinalstringz=greeting+" "+usr
	$('#one span').text(myfinalstringz);*/
	startTime();
	startdate();
	/*var qwqw=mydate();
    $('#datediv span').text(qwqw);*/
}
function getgreeting () {
	var str = "";
var greeting="default"
    var currentTimez = new Date();
    var hoursz = currentTimez.getHours();
    var minutesz = currentTimez.getMinutes();
    var secondsz = currentTimez.getSeconds();

    if (minutesz < 10) {
        minutesz = "0" + minutesz
    }
    if (secondsz < 10) {
        secondsz = "0" + secondsz
    }
   if (hoursz < 10) {
        hoursz = "0" + hoursz
    }
  
  var str = hoursz + ':' + minutesz +':'+secondsz;
  
  if (str>'03:59:59' && str<'12:00:00') {
  	//alert('gm');
  	greeting="Good Morning"
  }
  if (str>='12:00:00' && str<'17:00:00') {
  	//alert('gm');
  	greeting="Good Afternoon"
  }
  if (str>='17:00:00' && str<'21:00:00') {
  	//alert('gm');
  	greeting="Good Evening"
  }
  if (str>='21:00:00' && str<='24:00:00' || str>='00:00:00' && str<'04:00:00') {
  	//alert('gm');
  	greeting="Good Night"
  }
  //var cc = setTimeout(function(){getgreeting()},500);
  var usr=store.get('name');
  greeting=greeting+" "+usr
  return greeting;
}
function check(e){ 

var zzz=document.getElementById('myname').value;
store.set('name',zzz);
$('#popupContact').hide();
	var greeting=getgreeting();
  
  $('#one span').text(myfinalstringz);


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

function myappbuttonfunc (e) {
  chrome.tabs.update({url:'chrome://apps/'});
}
function myweatherfunc(){
  
  $.simpleWeather({
    location: 'Pune, India',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+' '+weather.currently+'</p>'+'<img src='+'"'+weather.image+'">';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

}

function myfeedfunc (e) {
new FEEDZILLA.Widget({
  style: 'slide-top-to-bottom',
  culture_code: 'en_in',
  c: '989',
  sc: '-',
  title: 'Top News',
  caption: 'All',
  order: 'relevance',
  count: '20',
  w: '250',
  h: '300',
  timestamp: 'true',
  scrollbar: 'false',
  theme: 'ui-lightness',
  className: 'feedzilla-22484916518442333'
});

}

    document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('.qwerty').addEventListener('click',clickHandlerzz);
  document.querySelector('.lolz').addEventListener('click',clickHandler);
  document.getElementById('bdy').onload=myfunc();
  document.getElementById('weather').onload=myweatherfunc();
myfeedfunc();
//myfeedfunc();
  document.getElementById('appbutton').addEventListener('click',myappbuttonfunc);
});

