// Style Switcher
var StyleSwitcher = function() {
    "use strict";

    // Handle Style Switcher
    var handleStyleSwitcherFunction = function() {
        var StyleSwitcher = $('.style-switcher-body'),
            StyleSwitcherTrigger = $('.style-switcher-btn');

        StyleSwitcherTrigger.on('click', function(event) {
            event.preventDefault();

            StyleSwitcherTrigger.toggleClass('is-clicked');
            $('.style-switcher-body').toggleClass('is-active');
        });

        $('.color-options', StyleSwitcher).on('click', function () {
            var color = $(this).attr("data-style");
            setColor(color);
            $('.color-options', StyleSwitcher).removeClass("theme-active");
            $(this).addClass("theme-active");
        });

        var setColor = function (color) {
            $('#style-color').attr("href", "assets/css/theme/" + color + ".css");
            $('#style-color-base').attr("href", "../../assets/css/theme/" + color + ".css");
        }

        // Skins
        $('.apply-dark-skins', StyleSwitcher).on('click', function() {
            var dark_theme;
            setDarkTheme(dark_theme);
            $(this).addClass("is-active");
            $(".apply-light-skins", StyleSwitcher).removeClass("is-active");
            $("body").addClass("dark-theme");                
        });
        $('.apply-light-skins', StyleSwitcher).on('click', function(){
            var dark_theme;
            setDarkTheme(dark_theme);
            $(this).addClass("is-active");
            $(".apply-dark-skins", StyleSwitcher).removeClass("is-active");
            $("body").removeClass("dark-theme");                
        });

        var setDarkTheme = function (dark_theme) {
            if($('.apply-dark-skins').hasClass('is-active')) {
                $('.navbar-logo-img').attr("src", "assets/img/logo-default.png");
                $('.navbar-logo-img-dark').attr("src", "assets/img/logo-default.png");
                $('.header-fullscreen-nav-logo-img-dark').attr("src", "assets/img/logo-default.png");
                $('.footer-v6-logo-img').attr("src", "assets/img/logo-default.png");
                $('.footer-v8-logo-img').attr("src", "assets/img/logo-default.png");
                $('.l-login-logo').attr("src", "assets/img/logo-default.png");
            } else if($('.apply-light-skins').hasClass('is-active')) {
                $('.navbar-logo-img').attr("src", "assets/img/logo-default-white.png");
                $('.navbar-logo-img-dark').attr("src", "assets/img/logo-default-white.png");
                $('.header-fullscreen-nav-logo-img-dark').attr("src", "assets/img/logo-default-white.png");
                $('.footer-v6-logo-img').attr("src", "assets/img/logo-default-white.png");
                $('.footer-v8-logo-img').attr("src", "assets/img/logo-default-white.png");
                $('.l-login-logo').attr("src", "assets/img/logo-default-white.png");
            }
        }
    }

    return {
        init: function() {
            handleStyleSwitcherFunction(); // initial setup for style switcher function
        }
    }
}();

$(document).ready(function() {
    StyleSwitcher.init();
});

