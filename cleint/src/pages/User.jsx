import { useState } from "react";
import Searchbar from "../compoents/Searchbar";
import Filterbox from "../compoents/Filterbox";




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
    //search by name, email , 

    const [Search, setSeatch] = useState("");
    const filter = users.filter((user) => {

        const mshmatchSearch = user.name.toLowerCase().includes(Search.toLowerCase());
        const emailtSearch = user.email.toLowerCase().includes(Search.toLowerCase());
        const adminSeaech = user.role.toLowerCase().includes(Search.toLowerCase());

        return mshmatchSearch || emailtSearch || adminSeaech ;

    });

    //filer by Role

    const [role , setRole] = useState("All");
    const filtedBy = users.filter((user) =>{
        return role === "All" || user.role === role;

    });




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
                filtedBy.map((user) =>(
                  <div key={user.id}>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <p>{user.role}</p>

                  </div>  
                ))
              }



        </div>
    )
}

export default User
