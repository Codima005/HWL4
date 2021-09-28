TotalPr = 0;

do {
  TipeOfBurg = prompt(`Do you whant Hamburger or Cheeseburger?`).replaceAll(
    " ",
    ""
  );
  TipeOfBurgUpper = TipeOfBurg[0].toUpperCase();
  TipeOfBurgLower = TipeOfBurg.slice(1).toLowerCase();
  TipeOfBurg = TipeOfBurgUpper + TipeOfBurgLower;
} while (TipeOfBurg !== "Hamburger" && TipeOfBurg !== "Cheeseburger");

switch (TipeOfBurg) {
  case `Hamburger`:
    TotalPr += 10;
    break;
  case `Cheeseburger`:
    TotalPr += 15;
    break;
}

AddCheese = confirm(`Would you like double cheese?`);
if (AddCheese) {
  TotalPr += 5;
}

potato = confirm(`Would you like potato?`);
if (potato) {
  PoSize = prompt(`Choose potato size: small/middle/big`, `small`);
  if (!PoSize) {
    TotalPr += 10;
  } else if ((PoSize = `small`)) {
    TotalPr += 10;
  } else if ((PoSize = `middle`)) {
    TotalPr += 15;
  } else if ((PoSize = `big`)) {
    TotalPr += 20;
  }
}

sauce = confirm(`Would you like sauce?`);
if (sauce) {
  SauceTipe = prompt(`Choose sauce: ketchup/mayonnaise`, `ketchup`);
  if (!SauceTipe || SauceTipe) {
    TotalPr += 10;
  }
}

document.write(`<h2>Your order</h2>
<ul class = order>
<li>Bulka: <b>${TipeOfBurg}</b></li>
${potato ? `<li>Potato: <b>${PoSize}</b> </li>` : ``}
${sauce ? `<li>Sauce: <b>${SauceTipe}</b> </li>` : ``}
    </ul>
    <p>Price: <b>${TotalPr}</b></p>`);
