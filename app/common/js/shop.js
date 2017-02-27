window.onload=function(){

    (function (){
            var slider = new fz.Scroll('.ui-slider', {
                role: 'slider',
                indicator: true,
                autoplay: true,
                interval: 3000
            });

            slider.on('beforeScrollStart', function(fromIndex, toIndex) {
                console.log(fromIndex,toIndex)
            });

            slider.on('scrollEnd', function(cruPage) {
                console.log(cruPage)
            });
        })();
}



        $('.ui-list li,.ui-tiled li').click(function(){
            if($(this).data('href')){
                location.href= $(this).data('href');
            }
        });
        $('.ui-header .ui-btn').click(function(){
            location.href= 'index.html';
        });

