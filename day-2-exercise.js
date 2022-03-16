/* 
A função `main` recebe um objeto como parâmetro, como abaixo. 
Ela deve retornar um booleano (true ou false): forma que seja `true` caso **todos** os objetos dentro do array `body` tenham a propriedade `name` do tipo `string` e `quantity` seja maior que 0, caso contrário `main` retorna `false`.

param = {
  body: [
    { name: 'string', quantity: 1 },
    { name: 'outra string', quantity: 0 },
    { name: 0, quantity: 21 },
    { name: NaN, quantity: -1 }
  ]
}

`main` retorna `false` com o paràmetro acima;
*/


const param = {
  body: [
    { name: 'string', quantity: 1 },
    { name: 'outra string', quantity: 0 },
    { name: 0, quantity: 21 },
    { name: NaN, quantity: -1 }
  ]
}

const main = ({body}) => {
  const isNotAString = body.some(({name}) => typeof name !== 'string');
  const lessThanZero = body.some(({quantity}) => quantity <= 0); 

  if (!isNotAString && !lessThanZero) return true;

  return false;

};

console.log(main(param));

main(param)
module.exports = main;
