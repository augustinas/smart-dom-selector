## Smart DOM Selector

A challenge of creating jQuery-like function for the selection of DOM elements. Given a standard selector the function will return an array of matching DOM elements. It supports tags, ids and multiple classes!

Tests Passed: 7 of 7

Completion time: 3 h

### Thought Process

The size of the task gave me the confidence to start with a domain driven design. From the get-go I've planned to have two helper functions for (a) finding elements and (b) filtering relevant elements. Such code granularity can lead to more flexibility, better code reusability and adherance to the Single Responsibility Principle.

When writing the code I thought not only about passing the tests. I have also wanted to make it as universal and extendable as possible.

During the challenge I've found that HTMLCollection (an array-like object) does not inherit methods common to Array object. To have a consistent and predictable behaviour (and to be able to use _Array.prototype.filter()_) I've decided to convert HTMLCollection to Array before returning it from _findElements_ function.

### Contact

Learn more [about me](https://github.com/augustinas/cv).
