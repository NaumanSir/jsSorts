var arr = []

function bubbleSort {
    for(var i=0; i<arr.length; i++) {
        for(var j=1; j<arr.length; j++) {
            if(arr[j-1] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}