$(function(){
    //加载动画设置,原生是load(),jq是ready();
    window.addEventListener("load", function() {
        var wrapper = document.getElementById("wrapper");
        document.body.removeChild(wrapper);
    });
})