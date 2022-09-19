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
