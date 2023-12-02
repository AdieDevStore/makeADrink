import './index.css'

function Search(props: any) {

  const handleSubmit = (e:any) => e.preventDefault(); 

  return (
    <div>
      <div className="search-container">
        <form action="submit" className='search-form' onSubmit={handleSubmit}>
          <input type="text" name="search-bar" id="search-bar" className="search-field" placeholder="Want a drink?" onChange={props.onChange} />
        </form>
      </div>
    </div>
  )
}

export default Search