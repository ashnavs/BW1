function extractNegatives(arr){
    let negatives = []

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            for(let k=0;k<arr[i][j].a.length;k++){
                if(arr[i][j].a[k]<0){
                    negatives.push(arr[i][j].a[k])
                }
            }
            if(arr[i][j].p<0){
                negatives.push(arr[i][j].p)
            }
        }
    }
    return negatives
}

const arr1 =    [
    [{ a: [4, 34, 53], p: -124 }],
    [{ a: [4, -9, 53], p: 4 }],
    [{ a: [4, 334, 53], p: 4 }],
  ];

  console.log(extractNegatives(arr1));
  