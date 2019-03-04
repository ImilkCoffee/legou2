$(function(){
    categoryLeft();
    // 默认获得第一个右边的内容
    categoryRight(1);
    // 左边第一个默认被点击
    getCategoryRight();
    //产品分类请求
    function categoryLeft(){
        $.ajax({
            type:'get',
            url:"/category/queryTopCategory",
            success:function(data){
            //获得数据后调用模板
            var html=template('categoryLeftTol',data);
            $('main .mui-table-view').html(html);
            }
        })
    }
//产品内容的请求
function categoryRight(id){
    $.ajax({
        type:'get',
        url:"/category/querySecondCategory",
        //这里的参数必须是键值对的形式
        data:{id:id},
        success:function(data){
            console.log(data);
        //获得数据后调用模板
       
        var html=template('categoryRiftTol',data);
        console.log(html);
        if(data.rows.length==0){
            $('.mui-row.right').html('没有更多的内容了');
        }else{
            $('.mui-row.right').html(html);
        }
        }

       
    })
}
//给左边的分类委托添加点击事件

function getCategoryRight(){
    $('.mui-table-view').on('tap','li',function(){
        var id=$(this).attr('data-id');
        categoryRight(id);
        $(this).css('background-color','#eee').siblings().css('background-color','#fff');
    })
}


   
})