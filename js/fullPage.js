/*
** LICENSE
** Copyright (c) 2017 by Ritesh Kumar (http://codepen.io/ritz078/pen/wMPRzr)
** Fork of an original work by George (http://codepen.io/georgemarts/pen/JdNKBL)
** Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
** The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
** THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
** 
** README
** A Pen created at CodePen.io. You can find this one at http://codepen.io/ritz078/pen/wMPRzr.
** Forked from [George](http://codepen.io/georgemarts/)'s Pen [JdNKBL](http://codepen.io/georgemarts/pen/JdNKBL/).
**
** Code modified by @shinyounglucia
*/
$(function() {
    "use strict";

  // fullpage customization
  $('#yesand').fullpage({
    sectionSelector: '.vertical-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection']
  });
});