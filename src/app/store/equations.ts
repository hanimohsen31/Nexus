// helper function
export function getNowDateAsString() {
  let date = new Date();
  let hour = date.toLocaleTimeString(); // "1:35:47 AM"
  let dayFormatted = date.toLocaleDateString().split('/')[1]; // "7/17/2023"
  let dateFormatted = date.toDateString(); // "Mon Jul 17 2023" "MonJul172023"
  if (hour.slice(-2) == 'AM') {
    let day = +dayFormatted - 1;
    let actualDate = dateFormatted.slice(0, 8) + day + dateFormatted.slice(11);
    return actualDate.replaceAll(' ', '');
  } else {
    let actualDay = dateFormatted.replaceAll(' ', '');
    return actualDay;
  }
}

// helper function
export function dateFormater(value: string) {
  let date = (val: any) => {
    return val.slice(0, 4) + '-' + val.slice(4, 6) + '-' + val.slice(6, 8);
  };
  if (!value) {
    value = '20200101';
  }
  if (value.length == 8) {
    let x = new Date(date(value));
    return x.toDateString();
  } else {
    let date = (val: any) => {
      return (
        val.slice(0, 3) +
        ' ' +
        val.slice(3, 6) +
        ' ' +
        val.slice(6, 8) +
        ' ' +
        val.slice(8)
      );
    };
    if (!value) {
      value = 'Sat Jan 01 2020';
    }
    return date(value);
  }
}

export function calculateSumResult(foodListValue: any) {
  let sumResult: any = {
    quantity: 1,
    calories: 0,
    protein: 0,
    fats: 0,
    carbs: 0,
  };
  foodListValue.map((elm: any) => {
    sumResult.name = 'Sum';
    sumResult.translation = 'المجموع';
    sumResult.calories += elm.calories * elm.quantity;
    sumResult.protein += elm.protein * elm.quantity;
    sumResult.fats += elm.fats * elm.quantity;
    sumResult.carbs += elm.carbs * elm.quantity;
  });
  return sumResult;
}
