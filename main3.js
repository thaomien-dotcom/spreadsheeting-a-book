const elements = document.querySelectorAll("textarea, div, span, p, h1, h2, h3, h4, h5, h6");

elements.forEach((el) => {
  let text = el.textContent || el.value; // Get text from elements, handle textarea separately
  
  // Handle HTML elements (div, p, span, etc.)
  if (text && (el.tagName !== 'TEXTAREA' && el.tagName !== 'INPUT')) {
    const regex = /\bshadowbook\b/gi; // Case-insensitive check for the word "sound"
    
    if (regex.test(text)) {
      // Replace "sound" with a span to apply the style
      const updatedText = el.innerHTML.replace(regex, (match) => {
        return `<span style="font-family: 'gridlite-pe-variable', sans-serif;">${match}</span>`;
      });
      el.innerHTML = updatedText; // Apply the updated HTML to the element
    }
  }
  
  // Handle textarea and input elements separately, since they can't have HTML inside them
  if ((el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') && text) {
    const regex = /\bshadowbook\b/gi;
    if (regex.test(text)) {
      // We can't apply HTML, so just change the font for the entire text (limited solution)
      el.style.fontFamily = "'gridlite-pe-variable', sans-serif";
   
    }
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var span = document.getElementById('customDate');
customDate.style.fontSize = "4vh"
  function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    span.textContent = 
      ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
  }

  setInterval(time, 1000);
});


