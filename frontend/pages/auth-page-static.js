export default function AuthPageStatic(props) {
  return (
    <>
      <h1>
        Auth Page Static
        </h1>
      <pre>
        {JSON.stringify(props, null, 3)}
      </pre>
    </>
  )
}