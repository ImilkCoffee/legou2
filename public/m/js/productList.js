$(function () {
    //调用方法获取传入的商品名
    var product = getUrlParam('search');
    //创建对象调用方法获取数据并渲染
    var productAsk = {
        name: product,
        page: 1,
        pageSize: 4
    };
    getProduct(productAsk);
    // 获取提交过来的键对应的值
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }

    //获得键之后发送ajax请求,需要的参数有,名称,排序方式(可先不写),第几页,每页条数,所以最后给个对象

    function getProduct(obj) {
        $.ajax({
            url: "/product/queryProduct",
            data: obj,
            success: function (res) {
               
                var html = template('productsTol', res);
            
                $('.products').html(html);
            }
        })
    }
    //点击价格按价格排序,同时改变箭头方向
    $('#pice').tap(function(){
        if($(this).find('i').attr('class')=="fa fa-angle-down"){
            console.log(111);
            $(this).css('color','red').find('i').removeClass('fa fa-angle-down').addClass('fa fa-angle-up');
            // 发送倒序排列请求
            //创建对象调用方法获取数据并渲染
    var productAskPic1 = {
        name: product,
        page: 1,
        pageSize: 4,
        price:1
    };
    //调用方法
    getProduct( productAskPic1);
        }else{
            $(this).css('color','#333').find('i').removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
            console.log(111);
            // 发送倒序排列请求
            //创建对象调用方法获取数据并渲染
    var productAskPic2 = {
        name: product,
        page: 1,
        pageSize: 4,
        price:2
    };
    //调用方法
    getProduct( productAskPic2);
        }
        
    })



    //点击销量按价格排序,同时改变箭头方向
    $('#num').tap(function(){
        if($(this).find('i').attr('class')=="fa fa-angle-down"){
            console.log(111);
            $(this).css('color','red').find('i').removeClass('fa fa-angle-down').addClass('fa fa-angle-up');
            // 发送倒序排列请求
            //创建对象调用方法获取数据并渲染
    var productAskNum1 = {
        name: product,
        num: 1,
        pageSize: 4,
        price:1
    };
    //调用方法
    getProduct(productAskNum1);
        }else{
            $(this).css('color','#333').find('i').removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
            console.log(111);
            // 发送倒序排列请求
            //创建对象调用方法获取数据并渲染
    var productAskNum2 = {
        name: product,
        page: 1,
        pageSize: 4,
        num:2
    };
    //调用方法
    getProduct(productAskNum2);
        }
        
    })



    // //输入框也要有搜索事件
    // $('.searchButton').tap(function(){
    //     //获取输入框里面的内容
    //  var text=$('#search').val();
    //  //点击搜索之后跳转到一个新页面,并带过去参数
    // if(text){
    //     location="productList.html?search="+text+"&time="+"这里是获取的系统时间";
    // }else{
    //     location="search.html";
    // }
    // //获取本地存储
    // var searchHistory=localStorage.getItem("searchHistory");
    // //如果本地有,获得的结果应该是json类型的数组
    // if(searchHistory!=null){
    // //先将json转化成js数组
    // searchHistory=JSON.parse(searchHistory);
    // console.log(searchHistory);
    // //判断是不是已经有输入框里的内容了,并且将重复的内容删除
    // for(var i=0;i<searchHistory.length;i++){
    //     if(searchHistory[i]==text){
    //         searchHistory.splice(i,1);
    //         i--;
    //     }
    // }
    // }
    // else{
    //     //没有就给一个空数组
    //     searchHistory=[]  ;
    // }  
    // //将text添加到数组最后一个位置.
    // searchHistory.unshift(text);
    // //将获得的数组转化成json数据并存到本地数据中,
    // localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

    // //并且调用方法发送请求
    //      //创建对象调用方法获取数据并渲染
    //      var productAskText = {
    //         name: product,
    //         num: 1,
    //         pageSize: 4,
    //     };
    //     //调用方法
    //     getProduct(productAskText);

    // })

})