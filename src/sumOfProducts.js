export const sumOfProducts = (array1, array2) => {
    let sum = 0;
    array1.forEach((element, index) => {
      sum += element * array2[index];
    });
    return sum;s
};
