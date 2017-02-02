
var oTab = document.getElementById("oTab");
var oLis = oTab.getElementsByTagName("li");
var oDivs = oTab.getElementsByTagName("div");

//让所有都不具备鼠标经过的效果，让当前的具备
function tab(index){//数字只能用方括号取
    console.log(index);
    for(var i =0; i<oLis.length;i++){
        oLis[i].className="";
        oDivs[i].className="";
    }
    oLis[index].className="active";
    oDivs[index].className="active";
}

for(var i = 0;i<oLis.length;i++){
    var oLi = oLis[i];
    oLi.zhuFeng = i;
    oLi.onclick = function () {
        tab(this.zhuFeng);//方法调用
    }
}




