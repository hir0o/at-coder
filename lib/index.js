/**
 * 角桁の合計を返す
 * @param {number} num - 整数値
 * @return {number} - 角桁の合計
 */
export const findSumOfDigits = (num) => {
	let sum = 0;
	while(num > 0) {
		sum += Math.floor(num % 10)
		num = Math.floor(num / 10)
	}
}
