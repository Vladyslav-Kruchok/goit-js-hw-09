/**
 * generate random color  hex code
 * @param no
 * @return string like #cb581a
 */
export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}