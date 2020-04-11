jQuery(Document).ready(function() {
    "use strict"
    $("#slider-carousle").carouFredSel({
        responsive: true,
        width: "100%" ,
        circular: true,
        scroll: {
            items: 1,
            duration: 500,
            pouseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".sliderpager",
            pageAnchorBuilder: false
        }
    }
    );
});