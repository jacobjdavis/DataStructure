twoSum = (nums, target) => {
    let temp = [];
    let found = false;
    for (let i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                temp.push(i);
                temp.push(j);
                found = true;
            }
        }
        if (found === true) {
            break;
        }
    }
    return temp;
}

twoSumNew = (nums, target) => {
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        let index = nums.indexOf(complement);
        if (index !== -1 && i !== index) {
            temp.push(i, index);
            break;
        }
    }
    return temp;
}

isPali = (s) => {
    let i = 0;
    let h = s.length - 1;
    while (h >= 1) {
        if (s[i] !== s[h]) {
            return false;
        }
        i++;h--;
    }
    return true;
}

validPali = (s) => {
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
        if (s[i] === s[j]) {
            i++;
            j--;
        }
        else {
            return (s.splice(i,j) === s.splice(i,j).split('').reverse().join('') || s.splice(i+1,j+1) === s.splice(i+1,j+1).split('').reverse().join(''));
        }
        return true;
    }
}


var maximum69Number  = function(num) {
    let n = (""+num).split('');
    for (let i = 0; i < n.length; i++) {
        if (n[i] === "6") {
            n[i] = "9";
            break;
        }
    }
    n = parseInt(n.join(''));
    console.log(n);
};

subandprod = (x) => {
    let sum = 0;
    let mul = 1;
    let s = x.toString();
    for (let i = 0; i < s.length; i++) {
        sum += parseInt(s[i]);
        mul *= s[i];
    }``
    return mul-sum;
}

function getGaps(arr, gaps) {
  // find spot of first 1
  let firstone = arr.indexOf(1);
  if (firstone !== -1) {
    let newarr = arr.slice(firstone + 1)
    // find spot of second 1
    let secondone = newarr.indexOf(1);

    if (secondone > 0) {
      gaps.push(secondone);
    }
    return getGaps(newarr.slice(secondone+1), gaps)
  }

  return (gaps.length > 0) ? Math.max.apply(Math, gaps) : 0;
}
function solution(n) {
  let binary = n.toString(2);
  console.log(n, binary, getGaps(binary,[]))
}

let J = "aA";
let S = "aAAsfds";
let jarr = J.split('');
let sarr = S.split('');
let count = 0;
for (let i = 0; i < jarr.length; i++) {
    count += sarr.filter(el => el == jarr[i]).length;
}
// console.log(count);

let jake = [4,5,6,7];

for (let i = 0; i < jake.length; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}

solution(9)
