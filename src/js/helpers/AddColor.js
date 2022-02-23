/**
 * @param1 tegObj
 * @param2 color
 * @return void
 * @description set inline style attribute: style="background-color:#b714f3;"
 * 
 */
export function backgroundColorRnd(tegObj, color)
{
    tegObj.setAttribute('style', `background-color:${color};`);
}