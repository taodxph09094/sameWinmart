// import moment from 'moment';
export const formatCurrency = (moneyP = "0", n, x, s, c) => {
  let moneyS = moneyP.replace(/[^\d]/g, "");
  try {
    let money = Number(moneyS);
    const re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\D" : "$") + ")",
      num = parseFloat(money.toString()).toFixed(Math.max(0, ~~n));

    return (c ? num.replace(".", c) : num).replace(
      new RegExp(re, "g"),
      "$&" + (s || ",")
    );
  } catch (e) {
    return "0";
  }
};

export function splitText(string, length) {
  const count = string.length;
  if (count > length) {
    const text = string.substring(0, length + 1).concat("...");

    return text;
  } else return string;
}

// export const formatDateTimeToString = (dateString) => {
//   try {
//     if (dateString) {
//       return moment(dateString).format("DD/MM/YYYY HH:mm:ss").toString();
//     }
//     return null;
//   } catch (e) {
//     return null;
//   }
// };
