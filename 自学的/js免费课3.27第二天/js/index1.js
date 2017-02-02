var oTab = document.getElementById("oTab");
var oLis = oTab.getElementsByTagName("li");
var oDivs = oTab.getElementsByTagName("div");
function tab(n){
    for(var i=0; i<oLis.length;i++){
        oLis[i].className="";
        oDivs[i].className="";
    }
    oLis[n].className="active";
    oDivs[n].className="active";
}

for(var i=0; i<oLis.length;i++){
    oLis[i].zhufeng=i;
    oLis[i].onmouseover= function () {
        tab(this.zhufeng);
    }
}



