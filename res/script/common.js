$('#navbar-theme-switch').click(function() {
    if ($('html').attr('theme') != "dark") {
        $('html').attr('theme', 'dark');
        $(this).text('日间模式');
    } else {
        $('html').attr('theme', '');
        $(this).text('夜间模式');
    }
});

$('#header-new-timer').click(function() {
    window.scrollTo(0, 0);
    $('#timer-create-modal').addClass('open');
    $('body').addClass('disable');

    let date = new Date();
    let y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate();
    $('#input-date-y').val(y);
    $('#input-date-m').val(m);
    $('#input-date-d').val(d);
    $('#input-date-time').val('00:00:00');

    setTimeout(function() {
        $('#timer-create-modal').addClass('active');
    }, 20);
    $('#timer-create-form-title').focus();
});

$('#timer-create-cancel').click(function() {
    $('#timer-create-modal').removeClass('open');
    $('body').removeClass('disable');
    $('#timer-create-modal').removeClass('active');

    $('#input-date-y').val('');
    $('#input-date-m').val('');
    $('#input-date-d').val('');
    $('#input-date-time').val('');
    $('#input-summary').val('');
});