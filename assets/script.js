// Jika document ready, baru jalankan seluruh perintah jquery yang ada didalamnya
$(document).ready(function () {
    $(document).on("click", ".button-click", function (e) {
        // $(this).addClass("button-active");
        // Loop element button-click kecuali element thisnya
        $(".button-click").not(this).each(function (i) {
            $(this).removeClass("button-active");
        });


        $(this).addClass("button-active");

    });



    $(".navFlexDiv").click(function (e) {
        $(".rowActiveFirst").remove();

        $(".navFlexDiv").each(function (e) {
            $(this).find(".hoverableDiv").remove();
        });

        let activeWidth = $(this).innerWidth();
        let itemPos = $(this).position();
        $(".progression").css({
            "left": itemPos.left + "px",
            "width": activeWidth + "px"
        });

        $(this).prepend(`
        <div class="hoverableDiv">
                <div class="hoverableDiv1"></div>
                <div class="hoverableDiv2"></div>
                <div class="hoverableDiv3"></div>
                <div class="hoverableDiv4"></div>
                <div class="hoverableDiv5"></div>
                <div class="hoverableDiv6"></div>
                <div class="hoverableDiv7"></div>
                <div class="hoverableDiv8"></div>
                <div class="hoverableDiv9"></div>
                <div class="hoverableDiv10"></div>
                <div class="hoverableDiv11"></div>
                <div class="hoverableDiv12"></div>
                <div class="hoverableDiv13"></div>
                <div class="hoverableDiv14"></div>
            </div>
        `);

        // text active
        $(".navFlexDiv").not(this).each(function (i) {
            $(this).children("p").removeClass("text-active");
        });

        $(this).children("p").addClass("text-active");
    });
});
