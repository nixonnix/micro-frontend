export function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

export const orders = [
  createData(0, '16 Jan, 2023', 'N Modi', 'Delhi, India', 'VISA •••• 3719', 312.44),
  createData(1, '16 Jan, 2023', 'S Nigam', 'Kolkata, WB', 'VISA •••• 2574', 866.99),
  createData(2, '16 Jan, 2023', 'Tom Scholz', 'Boston, MA', 'MC •••• 1253', 100.81),
  createData(3, '16 Dec, 2022', 'Michael Jackson', 'Gary, IN', 'AMEX •••• 2000', 654.39),
  createData(4, '15 Nov, 2022', 'Xee Lee', 'Tokyo, Japan', 'VISA •••• 5919', 212.79),
];
