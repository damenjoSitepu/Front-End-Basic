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
});
