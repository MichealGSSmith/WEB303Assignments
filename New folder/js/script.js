$(function () {
    $('#photo-viewer').photoViewer().show().on('click', '.photo-frame', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here
        (function() {
            let $content = $('#share-options').detach();

            $('#share').on('click', function() {
                Modal.open({content: $content, width:800, height:450});
            });
        })();
        class Modal {
            constructor() {
                this.$window = $(window)
                this.$modal = $('div class="modal"/>')
                this.$content = $('div class="model-content"/>')
                this.$close= $('<button role="button" class="model-close">close</button>')

                this.$modal.append($content, $close);
                this.$close.on('click',(e) => {
                    e.preventDefault();
                    this.$close()
                });
            }

            center() {
                let top = Math.max(this.$window.height() - this.$model.outerHeight(), 0) / 2;
                let left = Math.max(this.$window.width() - this.$model.outerWidth(), 0) / 2;

                this.$modal.css({
                    top: top + this.$window.scrollTop(),
                    left: left + this.$window.scrollLeft()
                });
            }

            open(settings) {
                this.$content.empty().append(settings.content);
                this.$model.css({
                    width: settings.width ?? 'auto',
                    height: settings.height || 'auto'
                }).appendTo('body');
                this.center();
                this.$window.on('resize', () => this.center());
            }

            close(){
                this.$content.empty();
                this.$modal.detach();
                this.$window.off('resize');
            }
        }
    });
});
