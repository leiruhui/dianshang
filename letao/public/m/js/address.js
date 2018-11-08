$(function(){
    //储存收货地址
    var address = null;
    $.ajax({
        url:'/address/queryAddress',
        type:'GET',
        success:function(res){
            console.log(res);
            address = res
            var html = template('addressTpl',{result:res});
            //console.log(html);
            $('#address-box').html(html )

        }
    });
    $('#address-box').on('tap','.delete-btn',function(){
        var id = this.getAttribute('data-id');
        var li = this.parentNode.parentNode;
        mui.confirm("确认要删除吗?","提示",function(message){
            if(message.index ==1){
                $.ajax({
                    url:'/address/deleteAddress',
                    type:'POST',
                    data:{
                        id:id
                    },
                    success:function(res){
                        //确认删除
                      if(res.success){
                          location.reload();
                      }
                    }
                })
            }else{
                //取消删除
                mui.swipeoutClose(li);
            }
        })
    })

    $('#address-box').on('tap','.edit-btn',function(){
        var id = this.getAttribute('edit-id');
        for(var i =0;i<address.length;i++){
            if(address[i].id ==id){
                localStorage.setItem('editAddress',JSON.stringify(address[i]));
            }
            //终止循环
            break;
        }
        //跳转到编辑地址
        location.href = 'addAddress.html';
        console.log(address);
        console.log(id)
    })


})