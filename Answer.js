var $ = function (selector) {
  var elements;

  selectorComponents = selector.split(/(?=[.#])/);

  elements = findElements(selectorComponents.shift());

  for (i = 0; i < selectorComponents.length; i++) {
    elements = filterElements(elements, selectorComponents[i]);
  }

  return elements;
};

var findElements = function (query) {
  var domElements;
  if (query[0] === ".") {
    domElements = document.getElementsByClassName(query.substr(1));
  } else if (query[0] === "#") {
    domElements = [document.getElementById(query.substr(1))];
  } else {
    domElements = document.getElementsByTagName(query);
  }

  // Convert HTMLCollection to Array for easier processing
  // Got the idea from following places:
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
  // http://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
  return [].slice.call(domElements);
};

var filterElements = function (elementsArray, selector) {
  var filteredArray;
  if (selector[0] === ".") {
    filteredArray = elementsArray.filter(function (element) {
      return element.className.indexOf(selector.substr(1)) > -1;
    });
  } else if (selector[0] === "#") {
    filteredArray = elementsArray.filter(function (element) {
      return element.id === selector.substr(1);
    });
  }
  return filteredArray;
};
