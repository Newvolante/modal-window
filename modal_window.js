// This is the object to handle the modal window

modal = (function() {
    console.warn('The IIFE ran smoothly');
    
    $container = $('<div class="modal"></div>');
    $content = $('<div class="modal-content"></div>');
    $closeButton = $('<button value="close" id="close">close</button>');
    
    $container.append($content);
    $content.append($closeButton);
            
    return {
        center: function() {

            $left = ($(window).width() - $content.width()) / 2

            $content.css({
                left: $left
            })
        },
        open: function(settings) {
            $closeButton.before(settings.content);

            $container.appendTo('body');
            modal.center();
            $(window).on('resize', modal.center);
        },
        close: function() {
                $($container).detach();        }
    }
}());   // this is an IIFE