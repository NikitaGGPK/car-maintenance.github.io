$('#telHax').on('input', function() {
    $(this).val($(this).val().replace(/[^0-9+\-\(\)]/g, ''));
});