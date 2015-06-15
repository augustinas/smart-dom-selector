var $ = function (selector) {
  var elements;

  selectorComponents = selector.split(/(?=[.#])/);

  elements = findElements(selectorComponents.shift());

  return elements;
};

var findElements = function (query) {
  if (query[0] === ".") {
    return document.getElementsByClassName(query.substr(1));
  } else if (query[0] === "#") {
    return document.getElementById(query.substr(1));
  } else {
    return document.getElementsByTagName(query);
  }
};
