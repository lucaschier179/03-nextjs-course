import nookies from 'nookies'
import { tokenService } from "../src/services/auth/tokenService"

export default function AuthPageSSR(props) {

  return (
    <>
      <h1>
        Auth Page Server Side Render
      </h1>
      <pre>
        {JSON.stringify(props, null, 3)}
      </pre>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx)
  console.log('cookies', cookies);

  return {
    props: {
      token: tokenService.get(ctx),
    },
  }
}