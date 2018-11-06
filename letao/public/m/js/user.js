////保留用户数据
var userInfo = null;
//判断是否登录
$.ajax({
    url: "/user/queryUserMessage",
    type: "get",
    async: false,
    success: function (res) {
        console.log(res.error);
        if (res.error == 400) {
            location.href = "login.html";
        }
        userInfo = res;
        console.log(userInfo);
    }
})

//html加载完后进行
$(function(){
    //给退出登录添加点击事件
    $('#logout').on('tap',function(){
        console.log(222)
        $.ajax({
            url:'/user/logout',
            type:'GET',
            success:function(res){
                console.log(res);
            if(res.success){
                mui.toast('退出登录成功');
                setTimeout(function(){
                    location.href="index.html"
                },1500)
            }
        }
        })
    });

    //拼接模版
    var html = template('userTpl',userInfo);
    console.log(html);
    $('#userInfoBox').html(html);
})