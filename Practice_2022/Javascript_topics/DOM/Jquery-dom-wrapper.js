// $('#button')
//   .css('color', '#fff')
//   .css('backgroundColor', '#000')
//   .css('fontWeight', 'bold')
// https://bigfrontend.dev/problem/implement-a-simple-DOM-wrapper-to-support-method-chaining-like-jQuery

/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return {
    css: function (property, value) {
      el.style[property] = value;
      return this;
    },
  };
}
