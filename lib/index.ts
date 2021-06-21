/**
 * 角桁の合計を返す
 * @param {number} num - 整数値
 * @return {number} - 角桁の合計
 */
const findSumOfDigits = (num: number): number => {
	let sum = 0;
	while(num > 0) {
		sum += Math.floor(num % 10)
		num = Math.floor(num / 10)
	}
  return sum;
}

/**
 * @param {} count
 * @return {[key: number]: number}
 */
const objectBuket = (count: {}, nums: number[]): {} => {
	nums.forEach(num => {
    count[num] = (count[num] || 0) + 1;
  });
  return count;
}

//
const distance = (x1: number, y1: number, x2: number, y2: number): number => {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}
