

const AtozandZtoA = ({ Filternope, setFilter }) => {
    return (
        <>
            <select  value ={Filternope} onChange={(e) => setFilter(e.target.value)}>
                <option value="">Select</option>
                <option value="atoz">A to Z Name</option>
                <option value="ztoa">Z to A Name</option>

            </select>

        </>
    )
}

export default AtozandZtoA
