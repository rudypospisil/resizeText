# resizeText
Rudy Pospisil, 2019.04.24<br />
<br />
JavaScript function to dynamically resize text to fit on one line. This is useful for headlings that you don't want to break to a second line.<br />
<br />
This function requires two ids to be passed; a container id is attributed to the element wrapping the text element, and an id attributed to the element wrapping the targeted text.<br />
<br />
Example:<br />
< div id="wrap"><br />
  < h1 id="text">The Quick Brown Fox Jumped over the Lazy Dogs.</ h1><br />
< /div><br />
<br />
JavaScript call:<br />
<code>resizeText("wrap","text");</code><br />
<br />
If you want to target classes or tags, this function can easily be modified to do so.
