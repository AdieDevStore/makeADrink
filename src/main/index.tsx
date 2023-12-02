
// this will display the main content displayed
export default function Index(props: any) {

  if (!props.data) {
    return (
      <div>
        <h1>Please search for a drink!</h1>
      </div>
    )
  }

  return (
    <div>
      <div>
        {props.data}
      </div>
    </div>
  )
}
