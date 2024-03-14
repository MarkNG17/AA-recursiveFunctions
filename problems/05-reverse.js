/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

function reverse(string)
{
  if (string.length === 0)
  {
    return "";
  }
  if (string.length === 1)
  {
    return string;
  }
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1))
}


console.log(reverse("house")); // "esuoh"



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try
{
  module.exports = reverse;
} catch (e)
{
  module.exports = null;
}
