function topKElements(nums, k) {
  const numFrequenecy = new Map();
  for (let num of nums) {
    // if (numFrequenecy.has(num)) {
    //   numFrequenecy.set(num, numFrequenecy.get(num) + 1);
    // } else {
    //   numFrequenecy.set(num, 1);
    // }

    numFrequenecy.set(num, (numFrequenecy.get(num) || 0) + 1);
  }
  //   console.log(numFrequenecy);
  let result = [];
  for (const [key, value] of numFrequenecy) {
    // console.log(key, value);
    if (value >= k) {
      result.push(key);
    }
  }
  console.log(result)
}


function topKFrequent(nums, k) {
    const numFrequenecy = new Map();
  
    // Step 1: Count frequencies
    for (let num of nums) {
      numFrequenecy.set(num, (numFrequenecy.get(num) || 0) + 1);
    }
  
    // Step 2: Convert Map to an array of [num, frequency], then sort by frequency
    const sortedByFrequency = Array.from(numFrequenecy).sort((a, b) => b[1] - a[1]);
    console.log(sortedByFrequency)
    // Step 3: Extract the top K elements
    console.log(sortedByFrequency.slice(0,k))
    sortedByFrequency.slice(0, k).map((num) => {
        console.log(num)
    })

    const result = sortedByFrequency.slice(0, k).map(([num]) => num);
  // or

//   const result = sortedByFrequency.slice(0, k).map((item) => item[0]);

    return result;
  }
  

let nums = [1, 1, 1, 2, 2, 3];
let k = 2;
topKFrequent(nums, k);
