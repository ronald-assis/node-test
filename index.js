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

const validateChacacter = ({body, password}) => {
  const LINIT_CHARACTER = 5;
  if (body.email.length > LINIT_CHARACTER && body.password.length > LINIT_CHARACTER) {
    return true
  }
  return false;
}


const validateValue = ({body, password}) => {
  if (body.email !== undefined && body.password !== undefined) {
    return true;
  }
  return false;
}

const main = (object) => {
  const character = validateChacacter(object);
  const value = validateValue(object);

  if ( character && value) {
    return true
  }

  return false
};

module.exports = main;