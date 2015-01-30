'use strict';

function getAttrEle(tag, attribute, attrVal) {
  var matchingElements = [];
  var allElements = document.getElementsByTagName(tag);
  for (var i = 0, n = allElements.length; i < n; i++) {
    if (allElements[i].getAttribute(attribute) == attrVal)
    {
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}

function showTooltip() {
  var _email_address = document.querySelectorAll(".email_address")[0];
  _email_address.style.display="inline-block";
  _email_address.style.color="black";
}

// add event listener to table
window.onload = function() {
  var email_ele = getAttrEle('a', 'title', 'email')[0];
  email_ele.addEventListener("click", showTooltip, false);
};