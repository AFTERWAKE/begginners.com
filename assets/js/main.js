$(function(){
    $("button").on({
        mouseover:function(){
            var css_left = $(this).css("left").split("px")[0];
            var css_top = $(this).css("top").split("px")[0];
            var new_css_left = (Number(css_left)+(Math.random()*112)) % 400;
            var new_css_top = (Number(css_top)+Math.random()*165) % 200;
            $(this).css({
                left:(new_css_left)+"px",
                top:(new_css_top)+"px",
            });
        }
    });
});