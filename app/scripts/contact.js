'use strict';

// function getAttrEle(tag, attribute, attrVal) {
//     var matchingElements = [];
//     var allElements = document.getElementsByTagName(tag);
//     for (var i = 0, n = allElements.length; i < n; i++) {
//         if (allElements[i].getAttribute(attribute) == attrVal) {
//             // Element exists with attribute. Add to array.
//             matchingElements.push(allElements[i]);
//         }
//     }
//     return matchingElements;
// }

// function showTooltip() {
//     var _email_address = document.querySelectorAll(".email_address")[0];
//     _email_address.style.display = "inline-block";
//     _email_address.style.color = "black";
// }

// // add event listener to table
// window.onload = function() {
//     var email_ele = getAttrEle('a', 'title', 'email')[0];
//     if (email_ele) {
//         email_ele.addEventListener("click", showTooltip, false);
//     };
// };

/**
 * back to top
 */
window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= 200) {
        document.getElementById('back_to_top').style.visibility = "visible";
    } else {
        document.getElementById('back_to_top').style.visibility = "hidden";
    }
}


function runScroll() {
    scrollTo(document.body || document.documentElement, 0, 400);
}

document.getElementById("back_to_top").addEventListener("click", runScroll, false)

function scrollTo(element, to, duration) {
        if (duration < 0) return;
        var toTop = document.documentElement.scrollTop || document.body.scrollTop;
        var difference = to - toTop;
        var perTick = difference / duration * 10;


        setTimeout(function() {
            toTop = toTop + perTick;
           window.scroll(0, toTop);
            if (toTop === to) return;
            scrollTo(element, to, duration - 10);
        }, 10);
    }
    /**
     * end of back to top
     */
