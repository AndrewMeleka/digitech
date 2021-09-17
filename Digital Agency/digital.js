var ele=document.getElementById('horizontal_slider');
setInterval(function(){
	ele.scrollLeft+=400;
},3000);

var rightbtn=document.getElementById('right-arrow');
var leftbtn=document.getElementById('left-arrow');
var ele2=document.getElementById('horizontal_slider2');
rightbtn.addEventListener('click',function(){
	ele2.scrollLeft+=200;
});
leftbtn.addEventListener('click',function(){
	ele2.scrollLeft+=-200;
});