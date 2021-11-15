//write your code here
const findLongestWord = (arr) =>{
  let string = arr[0];
	for(let str of arr){
		if(str.length > string.length){
			string = str;		
    }
  }
  return string;
}
