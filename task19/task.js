
function unshift(){
<<<<<<< HEAD
<<<<<<< HEAD
	if(state == STOP){
		var div = addDiv();
		if(div){
			stack.insertBefore(div, stack.firstElementChild);
		}
	}else{
		alert("正在排序！");
=======
	var div = addDiv();
	if(div){
		stack.insertBefore(div, stack.firstElementChild);
>>>>>>> origin/master
=======
	var div = addDiv();
	if(div){
		stack.insertBefore(div, stack.firstElementChild);
>>>>>>> parent of bc74fc3... ..瞎弄的。。自己还没理清
	}
}

function push(){
<<<<<<< HEAD
<<<<<<< HEAD
	if(state == STOP){
		var div = addDiv();
		if(div){
			stack.appendChild(div);
		}
	}else{
		alert("正在排序！");
=======
	var div = addDiv();
	if(div){
		stack.appendChild(div);
>>>>>>> origin/master
=======
	var div = addDiv();
	if(div){
		stack.appendChild(div);
>>>>>>> parent of bc74fc3... ..瞎弄的。。自己还没理清
	}
}

function shift(){
<<<<<<< HEAD
<<<<<<< HEAD
	if(state == STOP){
		if(stack.firstElementChild){
			alert("删除的元素的值为："+parseInt(stack.firstElementChild.style.height));
			stack.removeChild(stack.firstElementChild);
		}else{
			alert("没有东西给你删了~");
		}
	}else{
		alert("正在排序！");
=======
	if(stack.firstElementChild){
		alert("删除的元素的值为："+parseInt(stack.firstElementChild.style.height));
		stack.removeChild(stack.firstElementChild);
	}else{
		alert("没有东西给你删了~");
>>>>>>> origin/master
=======
	if(stack.firstElementChild){
		alert("删除的元素的值为："+parseInt(stack.firstElementChild.style.height));
		stack.removeChild(stack.firstElementChild);
	}else{
		alert("没有东西给你删了~");
>>>>>>> parent of bc74fc3... ..瞎弄的。。自己还没理清
	}
}

function pop(){
<<<<<<< HEAD
<<<<<<< HEAD
	if(state == STOP){
		if(stack.lastElementChild){
			alert("删除的元素的值为："+parseInt(stack.lastElementChild.style.height));
			stack.removeChild(stack.lastElementChild);
		}else{
			alert("没有东西给你删了~");
		}
	}else{
		alert("正在排序！");
=======
	if(stack.lastElementChild){
		alert("删除的元素的值为："+parseInt(stack.lastElementChild.style.height));
		stack.removeChild(stack.lastElementChild);
	}else{
		alert("没有东西给你删了~");
>>>>>>> origin/master
=======
	if(stack.lastElementChild){
		alert("删除的元素的值为："+parseInt(stack.lastElementChild.style.height));
		stack.removeChild(stack.lastElementChild);
	}else{
		alert("没有东西给你删了~");
>>>>>>> parent of bc74fc3... ..瞎弄的。。自己还没理清
	}
}

function addDiv(){
	var count = stack.getElementsByTagName("div").length;
	if(count<60){
		var div = document.createElement("div");
		//正则判断输入数据是否为数字
		if(document.body.firstElementChild.value.search(/^[1-9][0-9]$|^100$/)!= -1){
			var height = document.body.firstElementChild.value;
			div.className = "item";
			//绑定click事件
			div.addEventListener("click",remove);
			//获取最终样式属性，并设置高度
			div.style.height = height + "px";
			return div;
		}else{
			alert("请输入10-100的数字！");
			return false;
		}
	}else{
		alert("添加元素过多！请删除后添加！");
		return false;
	}
}
function remove(){
<<<<<<< HEAD
	//alert("移除的数值为"+parseInt(this.style.height));
	this.parentNode.removeChild(this);
}
function addRandom(){
	var count = stack.getElementsByTagName("div").length;
	if(count+30<=60){
		for(var i=0; i<5; i++){
			var div = document.createElement("div");
			var height = parseInt(Math.random()*100+1);
			div.className = "item";
			//绑定click事件
			div.addEventListener("click",remove);
			//获取最终样式属性，并设置高度
			div.style.height = height + "px";
			stack.appendChild(div);
		}
	}else{
		alert("添加元素过多！请删除后添加！");
		return false;
	}
}
var i=0;
var j=0;
var timer1,timer2;
var length;
var divs;
var tempDiv;
window.onload = function(){	
	divs = stack.getElementsByTagName("div");
	tempDiv = document.createElement("div");
};
function sort(){
	length = divs.length;
	timer1 = setTimeout(buble,0);
}
function buble(){
	if(j<length+1){
		console.log(j);
		timer2 = setTimeout(bubleOneTime,0);
	}
}
function bubleOneTime(){
	if(i<length-j){
		// console.log(parseInt(divs[i].style.height) + ":" + parseInt(divs[i+1].style.height));
		if(parseInt(divs[i].style.height)>parseInt(divs[i+1].style.height)){
			tempDiv = divs[i].cloneNode(true);
			stack.replaceChild(divs[i],divs[i+1]);
			stack.replaceChild(divs[i+1],tempDiv);
		}
		i++;
		timer2 = setTimeout(arguments.callee,500);
	}else{
		i=0;
		timer1 = setTimeout(buble,0);
		j++;
	}
	
}
=======
	alert("移除的数值为"+parseInt(this.style.height));
	this.parentNode.removeChild(this);
}
>>>>>>> origin/master
