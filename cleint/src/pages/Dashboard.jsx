import { useState } from "react";
import AtozandZtoA from "../compoents/AtozandZtoA"
import MultipleFilter from "../compoents/MultipleFilter"


function Dashboard() {

    const users = [
        {
            id: 1,
            name: "Zara",
            email: "zara@gmail.com",
            role: "Admin",
            price: 750
        },
        {
            id: 2,
            name: "Alex",
            email: "alex@gmail.com",
            role: "User",
            price: 300
        },
        {
            id: 3,
            name: "John",
            email: "john@gmail.com",
            role: "Manager",
            price: 900
        },
        {
            id: 4,
            name: "Emma",
            email: "emma@gmail.com",
            role: "User",
            price: 450
        },
        {
            id: 5,
            name: "David",
            email: "david@gmail.com",
            role: "Admin",
            price: 600
        },
        {
            id: 6,
            name: "Mike",
            email: "mike@gmail.com",
            role: "Manager",
            price: 200
        },
        {
            id: 7,
            name: "Sophia",
            email: "sophia@gmail.com",
            role: "User",
            price: 1000
        }
    ];
    //a to z and z to a
    const [Filternope, setFilter] = useState("");

    const filterfunc = [...users].sort((a,b)=>{
        if(Filternope === "atoz"){
            return  a.name.localeCompare(b.name);
        }
        else if(Filternope === "ztoa"){
            return b.name.localeCompare(a.name);
        }

return 0;

    }) 

    //for multiple user 
    const [multiplefiler , setmultiplefiler ] = useState("");
    

    return (
        <>
            <h1>Hi , User </h1>

            <AtozandZtoA Filternope={Filternope} setFilter={setFilter} />
            {
                filterfunc.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.role}</p>
                        <p>{user.price}</p>


                    </div>



                ))
            }

            <MultipleFilter multiplefiler={multiplefiler}  setmultiplefiler={setmultiplefiler}/>


        </>

    )
}

export default Dashboard
