$(document).ready(function(){
    let box = $('.content').hide();

    $('.title1').click( function(){
        let $selected = $(this);

        box.slideUp();

        $selected.next().slideDown();

        return false;
        
    })

    $('.tab').each(function() {
        let $this = $(this);
        let $tab = $this.find('li.active')
        let $link = $tab.find('a')
        let $panel = $($link.attr('href'));

        $this.on('click', '.tabAnchor', function(e){
            e.preventDefault();
            let $link = $(this);
            let id = this.hash;

            if (id && !$link.parent().is('.active')) {
                $panel.removeClass('active');
                $tab.removeClass('active');
                $panel= $(id).addClass('active');
                $tab = $link.parent().addClass('active');
            }
        });

    });



});