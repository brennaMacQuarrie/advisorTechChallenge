showText = function () {
    $('.circle').on('click', function() {
        $('.toggleView').toggleClass('active');
    });
}

//INIT FUNCTION
init = () => {
    showText();
};

//DOCUMENT READY FUNCTION
$(function () {
    init();
});
