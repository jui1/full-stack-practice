

const Searchbar = ({Search , setSeatch}) => {
  return (
    <div>
    <input 
        type="text"
        value={Search}
        onChange={(e) => setSeatch(e.target.value)}
        placeholder="search here...."
    />
      
    </div>
  )
}

export default Searchbar
