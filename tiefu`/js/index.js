$(function(){
	var a=$(".yuan");
	var b=$(".bantu");
	var t=setInterval(move,3000);
	var num=0;
	var ting=$(".banner")[0];
	function move(){
    num++;
    if (num < 0) {
        num = b.length - 1;
      }
    if(num==b.length){
      num=0;
    }
    for(let i=0;i<b.length;i++){
      a[i].style.background="white";
      b[i].style.opacity=0;
    }
      a[num].style.background="#000";
      b[num].style.opacity=1;     
    }
    for(var j=0;j<a.length;j++){
    a[j].index=j;
    a[j].onmouseover=function(){
        num=this.index-1;
        move();
    }
    }
  var k=$(".zb")[0];
  var kk=$(".yb")[0];
  kk.onclick=function(){
    move();
  }
  k.onclick=function(){
    num-=2;
    move();
  }
  ting.onmouseover=function(){
    clearInterval(t);
  }
  ting.onmouseout=function(){
    t=setInterval(move,3000);
  }
 
})