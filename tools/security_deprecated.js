// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

define([
    'jquery',
], function($, sanitize) {
    "use strict";
    
    var sanitize_html = function (html, allow_css) {
        return html;
    };

    var sanitize_html_and_parse = function (html, allow_css) {
        var sanitized_html = sanitize_html(html, allow_css);
        var prev_htmlPrefilter = $.htmlPrefilter;
        $.htmlPrefilter = function(html) {return html;};  // Don't modify HTML
        try {
            return $.parseHTML(sanitized_html);
        } finally {
            $.htmlPrefilter = prev_htmlPrefilter;  // Set it back again
        }
    };
    
    var security = {
        sanitize_html_and_parse: sanitize_html_and_parse,
        sanitize_html: sanitize_html
    };

    return security;
});
