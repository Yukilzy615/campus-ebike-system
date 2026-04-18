// Compatibility entrypoint: keep legacy references to script_fixed.js working.
// The actual frontend logic lives in script.js.
(function loadMainScript() {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
    }

    var hasMainScript = Array.prototype.some.call(document.scripts, function (s) {
        return typeof s.src === 'string' && /(?:^|\/|\\)script\.js(?:\?|$)/.test(s.src);
    });

    if (hasMainScript) {
        return;
    }

    var script = document.createElement('script');
    script.src = 'script.js?v=compat-loader';
    document.head.appendChild(script);
})();
