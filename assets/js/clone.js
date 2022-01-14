$(function(){
    var listPosition = $('.profile-bottom--container .col-lg-9 .row');
    var itemPosition = $('.profile-bottom--container .col-lg-9 .row .col-lg-4');
    for (i = 0; i < 5; i++) {
        itemPosition.clone().appendTo(listPosition);
    }
})