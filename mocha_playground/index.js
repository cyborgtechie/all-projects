function greet(name) {
  if (!name) {
    return "No name"
  }
  return `Hello ${name}`;
}

module.exports = greet;
