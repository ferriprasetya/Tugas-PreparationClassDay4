function loopRange(first, end) {
  let result = [];
  const total = end - first;
  for (let i = 0; i <= total; i++) {
    result[i] = first++;
  }

  console.log(result);
}
loopRange(4, 8);
