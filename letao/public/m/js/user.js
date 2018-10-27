//html加载完后进行
//var userInfo = null;
//$.ajax({
//    rul:'/user/login',
//    type:'POST',
//    //同步
//    async:false,
//    success:function(res){
//        //console.log(res);
//        if( res.error && res.error == 400){
//            location.href="login.html";
//        }
//        //userInfo = res;
//        //console.log(userInfo);
//    }
//})
$(function(){
    //给退出登录添加点击事件
    $('#logout').on('tap',function(){
        console.log(222)
        $.ajax({
            url:'/user/logout',
            type:'GET',
            success:function(res){
            if(res.success){
                mui.toast('退出登录成功');
                setTimeout(function(){
                    location.href="index.html"
                },1500)
            }
        }
        })
    });

    //查询个人信息

})