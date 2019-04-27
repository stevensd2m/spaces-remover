module.exports = function spacesRemover(string) {
  if (typeof string !== "string") throw new TypeError("A string is expected!");
  return string.replace(/\s/g, "");
};
