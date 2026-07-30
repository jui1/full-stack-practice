

const MultipleFilter = ({ multipname, setmultiname, multiEmail, setmultiEmail, multiPrice, setmultiPrice, multipleRole, setmultiRole }) => {
  return (
    <>
      <h1>Name</h1>
      {/* <select>
            <option>All</option>
            <option>Filter By name</option>
            <option>Filter By email</option>
            <option>Filter By role</option>
            <option>Filter By price</option>

        </select> */}
      <input
        type="text" value={multipname} onChange={(e) => setmultiname(e.target.value)} />


      <br />
      <h1>Role</h1>
      <input
        type="text" value={multipleRole} onChange={(e) => setmultiRole(e.target.value)} />


      <h1>Email</h1>
      <input
        type="text" value={multiEmail} onChange={(e) => setmultiEmail(e.target.value)} />


      <h1>Price</h1>
      <input
        type="text" value={multiPrice} onChange={(e) => setmultiPrice(e.target.value)} />


    </>
  )
}

export default MultipleFilter
