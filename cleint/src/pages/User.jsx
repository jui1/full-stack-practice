import { useState } from "react";
import Searchbar from "../compoents/Searchbar";
import Filterbox from "../compoents/Filterbox";
import Pricefiltring from "../compoents/pricefiltring";
import PriceSlider from "../compoents/PriceSlider";




const User = () => {
    const users = [
        {
            id: 1,
            name: "John",
            email: "john@gmail.com",
            role: "Admin",
            price: 500,
        },
        {
            id: 2,
            name: "Mike",
            email: "mike@gmail.com",
            role: "User",
            price: 200,
        },
        {
            id: 3,
            name: "Emma",
            email: "emma@gmail.com",
            role: "Manager",
            price: 800,
        },
        {
            id: 4,
            name: "David",
            email: "david@gmail.com",
            role: "User",
            price: 350,
        },
        {
            id: 5,
            name: "JAM",
            email: "jam@gmail.com",
            role: "Admin",
            price: 600,
        },
    ];


    const products = [
        { id: 1, name: "Phone", price: 5000 },
        { id: 2, name: "Watch", price: 12000 },
        { id: 3, name: "Shoes", price: 18000 },
        { id: 4, name: "Laptop", price: 35000 },
        { id: 5, name: "TV", price: 48000 },
      ];

    //search by name, email , 

    const [Search, setSeatch] = useState("");
    const filter = users.filter((user) => {

        const mshmatchSearch = user.name.toLowerCase().includes(Search.toLowerCase());
        const emailtSearch = user.email.toLowerCase().includes(Search.toLowerCase());
        const adminSeaech = user.role.toLowerCase().includes(Search.toLowerCase());

        return mshmatchSearch || emailtSearch || adminSeaech;

    });

    //filer by Role

    const [role, setRole] = useState("All");
    const filtedBy = users.filter((user) => {
        return role === "All" || user.role === role;

    });

    //filer byPrice
    const [price, setprice] = useState("");
    // const filterBYPrice = users.filter((user) => {
    //     if (price === "") return true;
    //     else if (price === "1000") return user.price < 1000;
    //     else if (price === "1000to5000") return user.price >= 1000 && user.price <= 5000;
    //     else if (price === "above5000") return user.price > 5000;
    //     else if (price === "PriceLowtoHigh") return 
    //     return true;

    // });
    let filterBYPrice = [...users];

    if (price === "1000") {
        filterBYPrice = filterBYPrice.filter((user) => user.price < 1000);

    }
    else if (price === "1000to5000") {
        filterBYPrice = filterBYPrice.filter((user) => user.price >= 1000 && user.price <= 5000);
    }
    else if (price === "above5000") {
        filterBYPrice = filterBYPrice.filter((user) => user.price > 5000);
    }
    else if (price === "PriceLowtoHigh") {
        filterBYPrice = filterBYPrice.sort((a, b) => a.price - b.price);
    }
    else if (price === "PriceHightoLow") {
        filterBYPrice = filterBYPrice.sort((a, b) => b.price - a.price);
    }

    //filter slider 

    const [priceSlider, setPriceSlider] = useState([0, 50000]);
    const filterSilder = products.filter((product) => {
     
        return (
            product.price >= priceSlider[0] && 
            product.price <= priceSlider[1]
        );


    })








    return (


        <div>
            <h1>User Name</h1>
            <Searchbar Search={Search}
                setSeatch={setSeatch}
            />

            {
                filter.map((user) => (

                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.role}</p>
                    </div>
                ))
            }

            <h1>For Filter function </h1>

            <Filterbox filter={role}
                setfilter={setRole}
            />
            {
                filtedBy.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.role}</p>

                    </div>
                ))
            }



            <Pricefiltring prricefil={price}
                setprricefil={setprice}
            />
            {
                filterBYPrice.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.role}</p>
                        <p>{user.price}</p>


                    </div>
                ))
            }

            <PriceSlider priceSlider={priceSlider}

                setPriceSlider={setPriceSlider}
            />
            {
                filterSilder.map((prodcut) =>(
                    <div key={prodcut.id}>
                    <p>{prodcut.name}</p>
                    <p>{prodcut.price}</p>

                    </div>
                ))
            }




        </div>
    )
}

export default User
