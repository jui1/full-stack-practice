

const Pricefiltring = ({prricefil , setprricefil}) => {
    
  return (
    <>
        <h1 style={{padding : "20px" , color : "red"}}>Sort / Filter By Price </h1>
        <select value={prricefil}
        onChange={(e) => setprricefil(e.target.value)}>
            <option value="PriceLowtoHigh">Price Low to high</option>
            <option value="PriceHightoLow">Price hight to low </option>
            <option value="1000">Bellow  ₹1,000</option>
            <option value="1000to5000">₹1,000 - ₹5,000</option>
            <option value="above5000">Above ₹5,000</option>
        </select>


    </>
  )
}

export default Pricefiltring
 