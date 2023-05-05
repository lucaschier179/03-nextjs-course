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