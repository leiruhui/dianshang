

$(function(){
    $('#login-btn').on('tap',function(){
        var username = $.trim($('[name = "username"]').val());
        var password =  $.trim($('[name = "password"]').val());
        console.log(username);
        console.log(password);
        if(!username){
            mui.toast('请输入正确的用户名');
            return;
        }
        if(!password){
            mui.toast('请输入正确的密码');
            return;
        }
        $.ajax({
            url:'/user/login',
            type:'POST',
            data:{
                username:username,
                password:password
            },
            //回调函数进行文字体醒
            beforeSend:function(){
                $('#login-btn').html('正在登录...')
            },
            success:function(res){
                //if(!password){
                //    $('#login-btn').html("登录")
                //}
                console.log(res.error);
                    if(res.error != 403){
                        mui.toast('登录成功');
                    }else{
                        mui.toast('登录失败');
                    }

                    //$('#login-btn').html('登录')
                    setTimeout(function(){
                        location.href="user.html";
                    },2000)
            }
        })
    })
})