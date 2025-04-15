// criando variaveis de cotação de moeda 
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

// acessando os elementos do html 
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// manipulando o input para receber somente numero
amount.addEventListener("input", () => {
  const regex = /\D+/g;
  amount.value = amount.value.replace(regex, "");
});

//validando o meu form e aplicando o switch.
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    //exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatarMoedaBRL(price)}`;

    //Fanzendo o calculo.
    let total = amount * price;
    //atruindo um valor a minha variavel e usando o replace para excluir o R$ e subistituir por ''
    total = formatarMoedaBRL(total).replace("R$", "");
    // exibindo o valor
    result.textContent = `${total} Reais`;
    // add uma class
    footer.classList.add("show-result");
  } catch (error) {
    // removendo uma clas
    footer.classList.remove("show-result");
    console.log(error);
    alert("Não foi possivel converter, tente novamente mais tarde!");
  }
}

// criando uma função para formarta para o valor do BR
function formatarMoedaBRL(valor) {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
