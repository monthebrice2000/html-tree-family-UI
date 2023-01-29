$(function () {
    $('.genealogy-tree ul').hide();
    $('.genealogy-tree>ul').show();
    $('.genealogy-tree ul.active').show();
    $('.genealogy-tree li').on('click', function (e) {
        var children = $(this).find('> ul');
        var coupleAfter = $(this).find("> a");
        if (children.is(":visible") || !children.length) {
            children.hide('fast').removeClass('active');
            coupleAfter.addClass("hide");
        }
        else {
            children.show('fast').addClass('active');
            coupleAfter.removeClass("hide")
        }

        e.stopPropagation();
    });
});
