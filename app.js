let name=prompt("Введіть ваше імя:");
let sum=+prompt("Введіть суму депозиту:");
let period=+prompt("Введіть строк дії депозиту (кількість місяців):");
let sum2=0.0125*period*sum;
let sum3=sum2+sum;
alert("Шановний "+name+"! Сума вашого депозиту: "+sum+" грн. Строк дії: "
+period+" місяців. В кінці цього періоду ви отримаєте додатково: "+sum2+" грн. В загальному: " +sum3+" грн");