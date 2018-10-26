var keyword = getParamsByUrl(location.href,'keyword');
//当前页
var page = 1;
//页面中的数据
var html = '';
//价格排序顺序 升序
 var priceSort = 1;
$(function(){
        //1.获取到地址栏中用户所输入的关键字
        //2.用关键字调取搜索的关键字
        //3.将搜索的关键字显示到页面中

    //进行AJAX

    mui.init({
        pullRefresh : {
            container:'#refreshContainer',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
            up : {
                height:50,//可选.默认50.触发上拉加载拖动距离
                auto:true,//可选,默认false.自动上拉加载一次
                contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
                callback :getData //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });

    $('#priceSort').on('tap',function(){
        priceSort = priceSort ==1 ? 2 : 1;
        //初始化页面数据
        html = "";
        page = 1;
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData();
    })
});
 //获取地址栏中的参数
function getParamsByUrl(url , name){
    //截取字符串?中所在位置
    var params = url.substr(url.indexOf('?')+1);
    //console.log(params);
    //从&进行分割
    var param = params.split('&');
    //console.log(param);
    //进行循环遍历
    for(var i = 0; i<param.length;i++){
        //在从=进行分割
        var current = param[i].split('=');
        //console.log(current);
        //进行判断
        if(current[0] ==name){
            return current[1];
        }
        return null;
    }
};
function getData(){
        var This = this;
    $.ajax({
        url:'/product/queryProduct',
        type:'get',
        data:{
            page:page++,
            pageSize:3,
            proName:keyword,
            price:priceSort
        },
        success:function(response){
            if(response.data.length>0){
                html+= template('searchTpl',response);
                console.log(html);
                $('#search-box').html(html);
                This.endPullupToRefresh(false);
            }else{
                This.endPullupToRefresh(true);
            }

        }

    })
}