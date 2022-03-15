/* 
Verifique se é possível fazer login.
Para isso, é necessário que os campos email e password existam (não sejam nulos) e tenham mais de 5 caracteres.
Sua função deverá retornar true, caso as condições acima sejam satisfeitas e false caso algumas das condições não sejam satisfeitas.
Obs: Vale ressaltar que os campos email e password estão dentro de um objeto chamado body
object = {
  body {
    email: email@mail.com,
    password: 'segredosagrado',
  }
}
*/


const main = (object) => {
  const { body } = object;
  const { email, password } = body;
  return email && password && email.length > 5 && password.length > 5 ? true : false;
};

module.exports = main;