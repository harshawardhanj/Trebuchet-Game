
//Define the variable(s)
var select;

//Placeholder for default text color
select = renderer.material.color;

//Does function if mouse is over menu selection
function OnMouseEnter()
{
// Change the color of the text to this color if chosen
renderer.material.color = Color.red;
}
//Does function if mouse is NOT over menu selection
function OnMouseExit()
{
// Change the color of the text back to the original color
renderer.material.color = select;
}
