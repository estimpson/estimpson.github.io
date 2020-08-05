jQuery(function ($) {
    $("button.login").click(function() {
        console.log("login");
        $("nav.menu").css("display", "block");
        $("div.logout").css("display", "table");
        $("div.login").css("display", "none");
    });

    $("a.logout").click(function() {
        console.log("logout");
        $("nav.menu").css("display", "none");
        $("div.logout").css("display", "none");
        $("div.login").css("display", "block");
    });
});