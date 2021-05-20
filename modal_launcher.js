// Managing the behavior to fire the modal window
$(function() {
    $('#open-modal').on('click', function() {
        console.info('fired');
        modal.open({ content: '<div> this is the modal window content </div>'});
    });

    $closeButton.on('click', function() {
        console.log('popup closed');
        modal.close();
    });
})