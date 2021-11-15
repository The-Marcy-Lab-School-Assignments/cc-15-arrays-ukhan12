//write your code here
function findLongestWord(arr){
  let str = arr[0];
	for(let i = 1; i < arr.length; i++){
		if(arr[i].length > str.length){
			str = arr[i];		
    }
  }
  return str;
}
