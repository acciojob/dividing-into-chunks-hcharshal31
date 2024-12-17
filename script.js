const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	let chunks = [];
	let sumArray =[]; 
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum += arr[i];
		if(sum <= n){
			sumArray.push(arr[i]);
		}else {
			chunks.push(sumArray);
			sum = 0;
			sumArray = [];
			i = i;
		}
	}
	return chunks;
  // Write your code here
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
