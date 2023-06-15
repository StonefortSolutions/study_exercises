// create two functions, one that takes a hex code and coverts to its RGB value and vis versa

//if you are able to do the above, create an additional function that allows you to take a hexcode and make it more green (not pure green)

/**
 * Converts a hex code to an RGB value
 * @param {string} hex hex code
 * @param? {number} red modifier
 * @param? {number} green modifier
 * @param? {number} blue modifier
 * @returns {string} rgb value
 */
const hexToRGB = (hex, red, green, blue) => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  if (red && red < 256 && typeof red === "number") {
    r = r + red > 255 ? 255 : r + red;
  }
  if (green && green < 256 && typeof green === "number") {
    g = g + green > 255 ? 255 : g + green;
  }
  if (blue && blue < 256 && typeof blue === "number") {
    b = b + blue > 255 ? 255 : b + blue;
  }

  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Converts a hex code to an RGB value and increases the green value by a specified amount
 * @param {string} hex hex code
 * @param {number} amount amount to increase green by
 * @returns {string} rgb value
 */
const hexToGreen = (hex, amount) => {
  return hexToRGB(hex, 0, amount, 0);
};

/**
 * Converts an RGB value to a hex code
 * @param {string} rgb rgb value
 * @returns {string} hex code
 */
const rgbToHex = (rgb) => {
  let hex = "#";
  const rgbArr = rgb.slice(4, rgb.length - 1).split(", ");
  for (const color of rgbArr) {
    let hexColor = parseInt(color).toString(16);
    hexColor = hexColor.length === 1 ? "0" + hexColor : hexColor;
    hex += hexColor;
  }
  return hex;
};

const testHex = "#8a2580";
const testHex2 = "#FF00FF";
const testRGB = "rgb(138, 37, 128)";
const testRGB2 = "rgb(255, 0, 255)";

console.log("=======TEST 1 ========");
console.log(testHex, "Hex Value");
console.log(hexToRGB(testHex), "RGB Value");
console.log(hexToGreen(testHex, 50), "RGB + 50 Green Value");
console.log(rgbToHex(testRGB), "RGB to Hex");

console.log("=======TEST 2 ========");
console.log(testHex2, "Hex Value");
console.log(hexToRGB(testHex2), "RGB Value");
console.log(hexToGreen(testHex2, 50), "RGB + 50 Green Value");
console.log(rgbToHex(testRGB2), "RGB to Hex");
