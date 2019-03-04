$(function(){

//清除所有功能
$('.fa.fa-trash.btn-clear').click(function(){
    // 清空页面上的内容
    $('.mui-table-view').html("");
    //清空本地存储
    localStorage.clear();
    $('#search').trigger("click");
})



//输入框点击事件
$('#search').click(function(){
//获取本地存储:localStorage.getItem("key")
var searchHistory=localStorage.getItem("searchHistory");
//如果本地没有,结果就是空,声明一个空数组存储搜索记录
if(searchHistory==null){
    $('.mui-table-view').html('');
}else{
    //如果本地有,获得的结果应该是json类型的数组
    //先将json转化成js数组
    searchHistory=JSON.parse(searchHistory);
    //将内容渲染到界面上,调用模板
var html=template('searchHistoryTol',{list:searchHistory});
$('.mui-table-view').html(html);
//渲染完之后给每个标签添加删除功能
$('.little').click(function(){
    // 获取被点击的标签的id,然后找到对应的内容,删除数组中的内容
    $id=$(this).attr('list-id');
    for(var i=0;i<searchHistory.length;i++){
        if(i==$id){
            searchHistory.splice(i,1);
        }
    }
//将获得的数组转化成json数据并存到本地数据中,
localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
//利用递归渲染页面并且存储本地存储
$('#search').trigger("click");
})
}
})


//设置按钮点击事件
$('.searchButton').click(function(){
    //获取输入框里面的内容
 var text=$('#search').val();
 $('#search').val('');
var searchHistory=localStorage.getItem("searchHistory");
//如果本地有,获得的结果应该是json类型的数组
if(searchHistory!=null){
//先将json转化成js数组
searchHistory=JSON.parse(searchHistory);
console.log(searchHistory);
//判断是不是已经有输入框里的内容了,并且将重复的内容删除
for(var i=0;i<searchHistory.length;i++){
    if(searchHistory[i]==text){
        searchHistory.splice(i,1);
        i--;
    }
}
}
else{
    //没有就给一个空数组
    searchHistory=[]  ;
}  
//将text添加到数组最后一个位置.
searchHistory.unshift(text);
//将获得的数组转化成json数据并存到本地数据中,
localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
})
})