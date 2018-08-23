// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  return kittens
}

function prependKitten(name) {
  return [...kittens]
}

function removeLastKitten() {
  return [...kittens]
}

function removeFirstKitten() {
  return [...kittens]
}
