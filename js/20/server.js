var http = require("http");
var url = require("url");
var fs = require("fs");
var sv = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true),
        pathname = urlObj.pathname,
        query = urlObj.query;

    //->前端路由
    var reg = /\.(HTML|CSS|JS|ICO)/i;
    if (reg.test(pathname)) {//->说明客户端请求的是资源文件
        try {
            //->1)通过文件的后缀名获取到对应的MIME类型
            var suffix = reg.exec(pathname)[1].toUpperCase();
            var suffixType = "text/plain";
            switch (suffix) {
                case "HTML":
                    suffixType = "text/html";
                    break;
                case "CSS":
                    suffixType = "text/css";
                    break;
                case "JS":
                    suffixType = "text/javascript";
                    break;
            }

            //->2)读取对应资源文件中的内容
            var conFile = fs.readFileSync("." + pathname, "utf8");

            //->3)把内容响应给客户端
            res.writeHead(200, {'content-type': suffixType + ';charset=utf-8;'});
            res.end(conFile);

        } catch (e) {
            res.writeHead(404);
            res.end();
        }
    }
});
sv.listen(80, function () {
    console.log("server is create success!");
});


~function (global, undefined) {
    if (global.$http) {
        return
    }
    var http = global.$http = {};
    var defaultOptions = {
        data: "",
        dataType: "text",
        type: "get",
        async: true,
        cache: false,//不走缓存；
        timeout: 500,
        success: function () {
        },
        error: function () {
        }
    };
    http.ajax = function (settings) {
        var myUtils = {
            getXHR: function () {
                var xhrList = [function () {
                    return new XMLHttpRequest()
                }, function () {
                    return new ActiveXObject("MicroSoft.XMLHTTP")
                }, function () {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                }, function () {
                    return new ActiveXObject("Msxml3.XMLHTTP")
                }, xhr = null];
                while (xhr = xhrList.unshift()) {
                    try {
                        xhr();
                        break
                    } catch (e) {
                        xhr = null;
                        continue
                    }
                }
                if (xhr == null) {
                    throw new Error("不支持ajax")
                } else {
                    getXHR = xhr;
                }
            },
            each: function () {
                if ([].forEach) {
                    return function (list, callBack, context) {
                        [].forEach.call(list, callBack, context)
                    }
                }
                return function (list, callBack, context) {
                    for (var i = 0; i < list.length; i++) {
                        callBack.call(context, list[i], i, list);
                    }
                }
            },
            extend:function(oldEle,newEle){
                var o={};
                for(var key in oldEle){
                    if(!oldEle.hasOwnProperty(key))continue;
                    o[key]=newEle[key]||oldEle[key];
                }
                return o;
            },
            encodedURI2:function(data){

            },
            hasSearch:function(){

            }

        }
    }
    function isType(str) {
        return function (obj) {
            return Object.prototype.toString.call(obj) == "[object " + str + "]";
        }
    }
    //检测对象传入的对不对
    var Verify=function(settings){
        if(!this instanceof Verify){
            return new Verify(settings)
        }
        var obj=[];
    };
    Verify.prototype.
    myUtils.each(["Function","Array","Object","String"],function(item){
        myUtils["is"+item]=isType(item);
    })
}(window);

























