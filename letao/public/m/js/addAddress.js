$(function(){
        //创建picker选择器
    var picker = new mui.PopPicker({layer:3});
        //为picker添加数据
    picker.setData(cityData);
    $('#selectCity').on('tap',function(){
        picker.show(function(selectItems){
            console.log(selectItems[0].text)
            console.log(selectItems[1].text)
            console.log(selectItems[2].text)
            $('#selectCity').val(selectItems[0].text + selectItems[1].text + selectItems[2].text)
        })
    })
    //添加确认点击事件
    $('#addAddress').on('tap',function(){
        var username = $.trim($('[name="username"]').val())
        var postCode = $.trim($('[name="postCode"]').val())
        var city = $.trim($('[name="city"]').val())
        var detail = $.trim($('[name="detail"]').val())
        if(!username){
            mui.toast('请输入收货人姓名')
            return
        }
        if(!postCode) {
            mui.toast('请输入邮编地址')
            return
        }
        if(!detail){
            mui.toast('请输入详细地址')
        }
        $.ajax({
            url:'/address/addAddress',
            type:'POST',
            data:{
                address:city,
                addressDetail:detail,
                recipients:username,
                postcode:postCode,
            },
            success:function(res){
            if(res.success) {
                mui.toast('地址添加成功!')
                setTimeout(function(){
                    location.href = 'address.html'
                },2000)
            }
            }
        })
    })
})