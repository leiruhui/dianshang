$(function(){
    $.ajax({
        url:'/address/queryAddress',
        type:'GET',
        success:function(res){
            console.log(res);
            var html = template('addressTpl',{result:res});
            //console.log(html);
            $('#address-box').html(html )

        }
    })
})