$(function(){
    $('#register-btn').on('tap',function(){
        //获取用户数据
        var originPass = $.trim( $('[name = "originPass"]').val());
        var newPass =  $.trim($('[name = "newPass"]').val());
        var sureNewPass =  $.trim($('[name = "sureNewPass"]').val());
        var vCode =  $.trim($('[name = "vCode"]').val());
        //判断密码是否一样
        if(!originPass){
            mui.toast('请输入正确的密码');
            return;
        }
        //判断密码修改是否成功
        if(newPass !=sureNewPass){
            mui.toast('两次密码不相同');
            return;
        }
        $.ajax({
            url:'/user/updatePassword',
            type:'post',
            data:{
                oldPassword:originPass,
                newPassword:newPass,
                vCode: vCode
            },
            success:function(res){
                    mui.toast('密码修改成功');
                    $('#register-btn').html('正在跳转中...');
                    setTimeout(function(){
                        location.href="login.html"
                    },1500)


            }
        })
    })
    $('#getCode').on('tap',function(){
        $.ajax({
            url:'/user/vCodeForUpdatePassword',
            type:'get',
            success:function(res){
                console.log(res.vCode);
            }
        })
    })
})