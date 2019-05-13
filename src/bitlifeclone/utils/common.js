export function pick(arr, count = 1) {
  if (arr.length === 0) {
    throw new Error("Cannot pick() from an empty array");
  }
  return arr.sort(() => Math.random() - 0.5).slice(0, count)[0];
}

export function randomScore(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

export function generateChances(arr) {
    if (arr.length === 0) {
        throw new Error("Cannot generateChances() from an empty array");
    }
    return [].concat(...arr.map(val => {
        return Array(val.pct).fill(val);
    }));
}

export function pickChances(arr = []) {
    if (arr.length === 0) {
        throw new Error("Cannot pickChances() from an empty array");
    }
    return arr[Math.floor(Math.random() * arr.length)];
}