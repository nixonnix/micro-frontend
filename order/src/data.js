export function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

export const orders = [
  createData(0, '10 Nov, 2022', 'A Kambani', 'Mumbai, India', 'VISA •••• 3719', 312.44),
  createData(1, '16 Dec, 2022', 'R KATA', 'Jahshedpur, India', 'VISA •••• 2574', 866.99),
  createData(2, '10 Jan, 2023', 'A Dachhan', 'Mumbai, India', 'MC •••• 1253', 100.81),
  createData(3, '11 Jan, 2023', 'N Murthy', 'Banglore, India', 'AMEX •••• 2000', 654.39),
  createData(4, '15 Jan, 2019', 'A PremJI', 'Delhi, India', 'VISA •••• 5919', 212.79),
];
