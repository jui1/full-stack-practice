

function Searchitem({searchh, setSearchh}) {
  return (
   <>
    <input placeholder="Search Here" type="text" value={searchh} onChange={(e) => setSearchh(e.target.value)} />
   </>
  )
}

export default Searchitem
