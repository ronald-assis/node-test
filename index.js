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
  const { body: { email, password }} = object;
  if (email === null && object.body === null) return false;
  if (email.length > 5 && password.length > 5) return true
  return false;
}

module.exports = main;