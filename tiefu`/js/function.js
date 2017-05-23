//获取元素 页面加载
function $(sel,obj){
	var obj = obj || document;

	
	if (typeof sel == "function") {
		window.onload=function(){
			sel();
		}
	}else if (typeof sel == "string") {
		if (sel.charAt(0) == ".") {
			return getClass(sel.slice(1),obj);
		}else if (sel.charAt(0) == "#") {
			return obj.getElementById(sel.slice(1));
		}else if (/^[a-z|1-6]{1,10}$/g.test(sel)){
			return obj.getElementsByTagName(sel);
		}else{
			console.error("非法输入");
		}
	}
}

//// 通过类名获取元素
function getClass(sel,obj){
	var obj = obj||document;
	if (obj.getElementsByClassName) {
		return obj.getElementsByClassName(sel);
	}else{
		var arr=[];
		var alls=obj.getElementsByTagName("*");
		for (var i=0; i<alls.length; i++) {
			if (check(alls[i].className,sel)) {
				arr.push(alls[i])
			}
		}		   
		return arr;
	}
}

function check (oldclass,newclass) {
	var newarr=oldclass.split(" "); 
	for (var i=0; i<newarr.length; i++) {
		if (newarr[i]==newclass) {
			return true;
		}
	}
	return false;
}


//// 获取或设置元素的文本内容
function getText (obj,value) {
	if(value==undefined){
		if(obj.innerText){
			return obj.innerText;
		}else{
			return obj.textContent;
		}
	}else{
		if(obj.innerText){
			obj.innerText=value;
		}else{
			obj.textContent=value;
		}
	}
}

//// 获取元素的样式
function getStyle (obj,prop) {
	if (obj.currentStyle == undefined) {
		return window.getComputedStyle(obj,null)[prop];
	}else{
		return obj.currentStyle[prop];
	}
}

function getEleChild(obj){
	var arr=obj.childNodes;
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i].nodeType==1){
			newarr.push(arr[i]);
		}
	}
	return newarr;
}

function firstEleChild(obj){
	return getEleChild(obj)[0];
}

function lastEleChild(obj){
	return getEleChild(obj)[getEleChild(obj).length-1];
}

function nextSiblingEle(box){
	var next=box.nextSibling;
	var zi=document.getElementsByClassName('zi')[3];
	console.log(zi.nextSibling);
	if(next==null){
		return null;
	}
	while(next.nodeType!=1){
		next=next.nextSibling;
		if(next==null){
			return null;
		}
	}
	return next;
}

function presSiblingEle(box){
	var next=box.previousSibling;
	if(next==null){
		return null;
	}
}

function insertAfter(newobj,befobj){
	var parent=befobj.parentNode;
	var next=nextSiblingEle(befobj);
	if(next==null){
		parent.appendChild(newobj);
	}else{
		parent.insertAfter(newobj,next);
	}
}

//尺寸
function offsetWindow(){
	var x=document.documentElement.clientWidth;
	var y=document.documentElement.clientHeight;
	return{width:x,height:y};
}
