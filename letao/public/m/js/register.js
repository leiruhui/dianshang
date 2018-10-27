//html加载完后执行
$(function(){
    $('#register-btn').on('tap',function(){
        var username = $.trim($('[name = "username"]').val());
        var mobile = $.trim( $('[name = "mobile"]').val());
        var password =  $.trim($('[name = "password"]').val());
        var againPass =  $.trim($('[name = "againPass"]').val());
        var vCode =  $.trim($('[name = "vCode"]').val());
        //console.log(username)
        //console.log(mobile)
        //console.log(password)
        //console.log(againPass)
        //console.log(vCode)
        if(!username){
            mui.toast('请输入用户名');
            return;
        }
        if(mobile <11){
            mui.toast('请输入正确的手机号');
            return;
        }
        if(password !=againPass){
            mui.toast('两次密码不一样');
            return;
        }
        if(!vCode){
            mui.toast('验证码为空');
            return;
        }
        $.ajax({
            url:'/user/register',
            type:'POST',
            data:{
                username:username,
                password:password,
                mobile:mobile,
                vCode:vCode
            },
            success:function(res){
                setTimeout(function(){
                    location.href="login.html";
                },2000)
            }
        })
    })
    //获取验证码
    $('#getCode').on('tap',function(){
        $.ajax({
            url:'/user/vCode',
            type:'get',
            success:function(res){
                console.log(res.vCode);
            }
        })
    })
})