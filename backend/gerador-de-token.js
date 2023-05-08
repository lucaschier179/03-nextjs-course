const jwt = require('jsonwebtoken');

const SECRET_KEY = '154322casdfkyhuhgrksob jgbsefd164854y'

const nossoToken = jwt.sign(
  {
    name: 'Lucas',
  },
  SECRET_KEY,
  {
    expiresIn: '1h',
    subject: '1'
  }
);

const TOKEN_GERADO = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJ1c2VyIl0sImlhdCI6MTY4MzU3NzU5OSwiZXhwIjoxNjgzNTc3NjU5LCJzdWIiOiJTTlk4ZTJUODBpQWk2ODdzIn0.7BnyFtRcbzrTrbr-Cjit4JtoPRoHt_eI8LVXML6E8Gk';

// console.log(jwt.verify(TOKEN_GERADO, 'outra chave'));
console.log(jwt.decode());