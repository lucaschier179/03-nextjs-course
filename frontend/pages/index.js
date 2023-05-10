import React from 'react';
import { useRouter } from 'next/router';
import { authService } from '../src/services/auth/authService';

export default function HomeScreen() {

  const router = useRouter()

  const [values, setValues] = React.useState({
    usuario: 'omariosouto',
    senha: 'safepassword',
  });

  function handleChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    })
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-t from-neutral-950 via-neutral-700 to-neutral-950'>
      <div className='flex items-center justify-center flex-col w-full max-w-[350px] p-5 rounded-md bg-white'>
      <h1 className='flex justify-center text-lg font-semibold mb-4'>Login</h1>
      <form className='flex flex-col gap-y-2' onSubmit={(event) => {
        event.preventDefault();
        authService
        .login({
          username: values.usuario,
          password: values.senha,
        })
        .then(() => {
          // router.push('/auth-page-static');
          router.push('/auth-page-ssr');
        })
        .catch(() => {
          alert('Usuário ou senha inválidos')
        })
      }}>
        <label className='text-lg font-semibold'>Usuário</label>
        <input className='px-4 py-2 border-b-2 border-[#2b2b2b] bg-[#dadada] text-base rounded-t-sm'
          placeholder="Digite o seu usuário" name="usuario" required
          value={values.usuario} onChange={handleChange}
        />
        <label className='text-lg font-semibold'>Senha</label>
        <input className='px-4 py-2 border-b-2 border-[#2b2b2b] bg-[#dadada] text-base rounded-t-sm'
          placeholder="Digite a sua senha" name="senha" type="password" required
          value={values.senha} onChange={handleChange}
        />
        <button className='flex px-5 py-2 mb-4 rounded-md w-full cursor-pointer font-semibold text-base max-w-[350px] justify-center bg-[#2b2] text-white mt-4'>
          Entrar
        </button>
      </form>
      </div>
    </div>
  );
}
