

const Filterbox = ({ filter, setfilter }) => {
    return (
        <>
            <h6 style={{ background: "yellow", padding: "20px" }}>Filter by Role</h6>
            <select
            value={filter} 
            onChange={(e) => setfilter(e.target.value)}>

                <option value="All">All</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Manager">Manager</option>

            </select>



        </>
    )
}

export default Filterbox
