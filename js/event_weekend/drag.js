function down(e){
	this.x=this.offsetLeft;
	this.y=this.offsetTop;
	this.mx=e.pageX;
	this.my=e.pageY;
	
	if(this.setCapture){
		this.setCapture();
		on(this,"mousemove",move);
		on(this,"mouseup",up);
	}else{
		
		this.MOVE=move.bind(this);
		this.UP=up.bind(this);
		on(document,"mousemove",this.MOVE);//我们设计的拖拽模块里的this的指向和事件绑定原则里的this指向冲突了，则必须把this“抢回来”
		on(document,"mouseup",this.UP);
	}
	e.preventDefault();
}

function move(e){
	this.style.left=this.x+(e.pageX-this.mx)+"px";
	this.style.top=this.y+(e.pageY-this.my)+"px";	
}


function up(e){
	if(this.releaseCapture){
		this.releaseCapture();
		off(this,"mousemove",move);
		off(this,"mouseup",up);	
	}else{
		off(document,"mousemove",this.MOVE);
		off(document,"mouseup",this.UP);	
	}
}