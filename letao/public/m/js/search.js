$(function(){

    //1.搜索关键字
    //2.判断关键字是否带入:
    //        如果带入请跳转到详情页面
    //        如果没有带入请提示输入关键字
    $('#search-btn').on('click',function(){
        //搜索关键字
        var keyword = $(this).siblings('input').val();
        //判断关键字是否带入
        if(keyword){
            //把搜索关键字放入空数组中
            keyarr.push(keyword);
            //储存到本地当中
            localStorage.setItem('keyarr',JSON.stringify(keyarr));
            //如果带入请跳转到详情页面
        location.href="search-result.html?keyword="+keyword;
            //如果没有带入提示关键字
        }else{
            alert('请输入搜索关键字');
        }
    })

    //1.创建一个空数组
    //2.把搜索关键字放入空数组中
    //3.再把数组里面的数值转换成字符串形式存储到浏览器中
    //4.当返回该页面时获取本地数据再把字符串转换成数组显示到页面上
    //5.把template和html进行拼接
    var keyarr = [];
    //当返回该页面时获取本地数据
    if(localStorage.getItem ('keyarr')){
        //再把字符串转换成数组显示到页面上
        keyarr = JSON.parse(localStorage.getItem ('keyarr'));
        console.log(keyarr);
        //把template和html进行拼接
        var html = template('historyTpl',{result:keyarr});
        console.log(html);
        $('#history-box').html(html);
        //console.log(html);
        //console.log(keyarr);
    }

      //1.给元素添加点击事件
      //2.清除页面数据,清除本地浏览器数据
    $('#clearBtn').on('tap',function(){
        //清除页面数据
        $('#history-box').html('');
        keyarr= [];
        localStorage.removeItem('keyarr');
    })
});