;!function() {

    var ns = function (s) { return 'pi_' + s; }, // namespace a string
    
        divs = document.querySelectorAll('div[data-input-field]'),
        l    = divs.length,
        i,
        
        // helpers
        addClass = function( el, klass ) {
            el.className += ' ' + klass;
        },
        rmClass  = function( el, klass ) {
            el.className = el.className.replace(klass, '');
        },
        show     = function ( el ) { el.style.visibility = 'visible'; },
        hide     = function ( el ) { el.style.visibility = 'hidden'; };

    for (i=0; i<l; i++) {
        (function(div) {
            var lab = div.querySelector('label[data-inset-label]'),
                inp = div.querySelector('input#' + lab.getAttribute('for')),
                addFocus = function() { addClass(div, ns('focused')); };

            inp.addEventListener('focusin', addFocus, false);
            lab.addEventListener('click', addFocus, false);

            inp.addEventListener('focusout', function() {
                rmClass(div, ns('focused'));

                if (inp.value == '') {
                    show(lab);
                }
            }, false);

            inp.addEventListener('keypress', function() {
                hide(lab);
            }, false);

            inp.addEventListener('keyup', function() {
                if (inp.value == '') {
                    show(lab);
                }
            }, false);

            // trick used to hide labels if the inputs are filled
            // by browser’s autocomplete
            window.setTimeout(function() {
                if (inp.value !== '') {
                    hide(lab);
                }
            }, 100);

        })(divs[i]);
    }

}();
