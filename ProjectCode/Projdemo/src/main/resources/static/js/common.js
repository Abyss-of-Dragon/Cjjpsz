$(document)
    .ready(function() {

        $(".tabular.menu .item").tab();
        $(".pointing.menu .item").tab();

        $('.ui .pointing .menu').menu({
            type:'fixed'
        });

        // Fix main menu to page on passing
        $('.main.menu').visibility({
            type: 'fixed'
        });
        $('.overlay').visibility({
            type: 'fixed',
            offset: 80
        });

        // Lazy load images
        $('.image').visibility({
            type: 'image',
            transition: 'vertical flip in',
            duration: 500
        });

        // Show dropdown on hover
        $('.main.menu .ui.dropdown').dropdown({
            on: 'hover'
        });

        // File upload button (application.html)
        $('#file-button').click(function () {
            $("#file").click();
        });

        // File name display (application.html)
        $("#file").change(function () {
            let files = $("#file").get(0).files;
            $("#file-name").val(files[0].name);
        });

        $('.ui.sticky')
            .sticky({
                context: '#example2',
                pushing: true
            })
        ;

        // Dropdown UI (application.html)
        $('#tutors').dropdown({maxSelections:1});
        $('#teammates').dropdown({maxSelections:3});

        // Dropdown UI (profile-edit.html)
        $('#year').dropdown();
        $('#gender').dropdown();

        // Transition initialization (management-xxx.html)
        $('.project.detail').transition();
        $('.mid.attached.segment').attr('class', 'bottom attached ui segment');

        // Bug fix for step display on mobile
        setTimeout(function () {
            $('.attached.steps').attr('style', 'display: none');
        }, 400);

        // Transition (management-xxx.html)
        $('.detail.button').click(function () {
            let card_header_div = $(this).parent().parent().parent();
            if (card_header_div.next().attr('class') === 'ui attached segment') {

                // Show round corner when steps' hidden
                card_header_div.next().attr('class', 'bottom attached ui segment');

                // Bug fix for step display on mobile
                setTimeout(function () {
                    card_header_div.next().next().next().attr('style', 'display: none');
                }, 400);

            } else {

                // Show squared corner when steps' hidden
                card_header_div.next().attr('class', 'ui attached segment');

            }
            card_header_div.next().next().transition('fade down');
            card_header_div.next().next().next().transition('fade down');
        });
    })
;
