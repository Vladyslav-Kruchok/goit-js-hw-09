/**
 * @param no
 * @return string like #cb581a
 * @description generate random color in hex code
 */
export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}