

const PriceSlider = ({ priceSlider, setPriceSlider }) => {
    return (
        <div style={{ padding: "20px" , color : "blue" }}>
            <h1>Price slider</h1>
            <p>
                ₹{priceSlider[0]} - ₹{priceSlider[1]}

            </p>
            <label>Minimun Price range </label>
            <input
            type="range"
            min="0"
            max="50000"
            value={priceSlider[0]}
            onChange={(e) => setPriceSlider([Number(e.target.value) , priceSlider[1]])}

            />
            <br />
            <br />
            <label>Maxmax Price range </label>
            <input 
                type= "range"
                min = "0"
                max = "50000"
                value={priceSlider[1]}
                onChange={(e) => setPriceSlider([priceSlider[0] , Number(e.target.value)])}
            />




        </div>
    )
}

export default PriceSlider
