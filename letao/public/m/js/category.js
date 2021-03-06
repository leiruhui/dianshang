$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    //获取一级分类数据
    $.ajax({
        url:'/category/queryTopCategory',
        type:'get',
        success:function(response){
            var html = template             ('category-first',{result:response.rows});
            //console.log(html)
            $('#links').html(html);
            if(response.rows.length){
                $('#links').find('a').eq(0).addClass('active');
               var id = response.rows[0].id
                getSecondCategory(id);
            }
        }

    })

    //点击一级分类获取二级分类数据
    $('#links').on('click','a',function(){
        var id = $(this).attr('data-id');

        $(this).addClass('active').siblings().removeClass('active');
    getSecondCategory(id);
    })

});
function getSecondCategory(id){
    $.ajax({
        url:'/category/querySecondCategory',
        type:'get',
        data: {
            id:id
        },
        success:function(response){
            var html = template('category-second',{result:response.rows});
            $('.brand-list').html(html)
        }
    })
}
