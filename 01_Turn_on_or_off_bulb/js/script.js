/*  CONDITIONAL STATEMENTS:
 *  If (the button is turn off){
 *      indicates that the light is off ;
 *  }
 *  else {
 *      indicates that the light is on ;
 *  }
 */

function light(value) {
    var image;
    if (value === 0) {
        image = "img/light-on.svg";
    } else {
        image = "img/light-off.svg";
    }
    document.getElementById("bulb").src = image;
}
