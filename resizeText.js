// Rudy Pospisil, 2019.04.24
// Simple function to resize a headline so that it fits on one line.
//
// This function requires that an id is attributed to a wrapping container and to the element wrapping the text in question.
//
// Pass in the id of the element wrapping the element containing the text and the id of the element containing the text that you want to resize.
// cID = id of element wrapping the element containing the text.
// eID = id of element containing the text.
// Example:
// <div id ="cID"><p id="eID">The quick brown fox.</p></div>

function resizeText(cID, eID)
{
  // Check to see if parameters were passed.
  if(cID && eID)
  {
    // Ensure that elememts exist.
    if(document.getElementById(cID) && document.getElementById(eID))
    {
      // Get container element.
      let container = document.getElementById(cID);
      // Get text element.
      let resizeElement = document.getElementById(eID);
      // Set a target container width.
      let containerWidth = container.offsetWidth - 10;
      // Set text to not wrap. This will allow you to get its true width.
      resizeElement.style.whiteSpace = "nowrap";

      // Run a loop to resize the font until the text sits on one line.
      // ie, its width is just shy of the container width.
      while(resizeElement.offsetWidth > containerWidth) 
      {   // Get the current font size.       
          let currentFontSize = parseInt(getComputedStyle(resizeElement).fontSize);
          // Reduce the font size by 1 pixel.
          resizeElement.style.fontSize = (currentFontSize - 1) + "px";
      }
      // Exit function.
      return true;
    }
    else
    {
      // Function failed because elements don't exist.
      console.log("Error. Elements don't exist.")
      return false;        
    }
  }
  else
  { 
    // Function failed because paraments weren't passed.
    console.log("Error. Parameters not passed.")
    return false;
  }
}