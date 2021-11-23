$(document).ready(function(){
    let request;
    let $current;
    let cache = {};
    let $frame = $('#photo-frame');
    let $thumbs = $('.thumb');

    function crossfade($img) {
        if($current) {
            $current.stop().fadeOut('slow');
        }

        $img.css({
            marginLeft: -$img.width()/ 2,
            marginTop: -$img.height() / 2
        });

        $img.stop().fadeTo('slow', 1);

        $current = $img;
    }

    $(documnet).on('click', '.thumb', function(e){
        let $img;
        let src = this.href;
        let request = src;

        e.preventDefault();
        $thumbs.removeClass('active');
        $(this).addClass('active');

        if (cache.hasOwnProperty(src)) {
            if(cache[src].isLoading === false) {
                crossfade(cache[src].$img);
            }
        } else {
            $img = $('<img>');
            cache[src] = {
                $img: $img,
                isLoading: true
            };
        }
    })

    $img.on('load', function(){
        $(this).hide();

        $frame.removeClass('is-loading').append($img);
        cache[src].isLoading = false;

        if(request === src) {
            crossfade($(this));
        }
    });

    $frame.addClass('is-loading');

    $img.attr ({
        'src': src,
        'alt' : this.title || ''
        
    });
})