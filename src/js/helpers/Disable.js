/**
 * @param1 obj1 = set attribute true => obj1.disabled
 * @param2 obj2 = set attribute false => obj2.enabled
 * @return void
 */
export function switcher(obj1, obj2)
{
    obj1.disabled = true;
    obj2.disabled = false;
}