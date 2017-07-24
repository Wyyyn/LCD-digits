/**
 * Created by wyn on 17-7-24.
 */
function getLights(inputs) {
  let arr1=['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
  let arr2=['|.|','  |','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
  let arr3=['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|']
  let numberArr=inputs;
  let printArray=new Array();
  for(let a=0;a<3;a++){
    printArray[a]=new Array();
  };
  let printStr='\n';

  let i=0;
  for (let number of numberArr) {
    printArray[0][i] = arr1[number];
    printArray[1][i] = arr2[number];
    printArray[2][i] = arr3[number];
    i++;
  }
  for(let i=0;i<printArray.length;i++) {
    for(let j=0;j<printArray[i].length;j++){
      printStr+=(printArray[i][j]+' ');
    }
    printStr=printStr+'\n';
  }
  console.log(printStr);
}
