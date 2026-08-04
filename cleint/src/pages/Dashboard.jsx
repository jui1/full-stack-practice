import { useEffect, useState } from "react";
import AtozandZtoA from "../compoents/AtozandZtoA"
import MultipleFilter from "../compoents/MultipleFilter"
import useDebounce from "../compoents/useDebounce"


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

    const filterfunc = [...users].sort((a, b) => {
        if (Filternope === "atoz") {
            return a.name.localeCompare(b.name);
        }
        else if (Filternope === "ztoa") {
            return b.name.localeCompare(a.name);
        }

        return 0;

    })


    //for multiple user 
    const [multipname, setmultiname] = useState("");
    const [multiEmail, setmultiEmail] = useState("");
    const [multiPrice, setmultiPrice] = useState("");
    const [multipleRole, setmultiRole] = useState("");


    const filterFunct = users.filter((user) => {
        const name = user.name.toLowerCase().includes(multipname.toLowerCase());
        const email = user.email.toLowerCase().includes(multiEmail.toLowerCase());
        const price = user.price.toString().includes(multiPrice);
        const role = user.role.toLowerCase().includes(multipleRole.toLowerCase());


        return name && email && price && role;

    })

    //for pagination

    const [currentpage, setcurrentpage] = useState(1);
    const itemPerpage = 3;
    const startIndex = (currentpage - 1) * itemPerpage;

    const endIndex = startIndex + itemPerpage;
    const currentUsers = users.slice(startIndex, endIndex);

    const totalPage = Math.ceil(users.length / itemPerpage);




    // for paginamtion 

    //store the currect page 
    // const [currect , setcurrect] = useState(1);
    // //how make data will show in that page 
    // const itempage = 2 ;


    // const staetINDX = (currect-1 ) * itempage;

    // const endINDX = staetINDX +currect;


    //for use debounced 
    //Stores what user is typing
    const [search, setsearch] = useState("");
    //Stores API response
    const [todo, settodo] = useState([]);

    const debouncedSearch = useDebounce(search, 500);


    useEffect(() => {
        async function FetchTodos() {
            const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await resp.json();

            const filterd = data.filter((todo) => {
                return todo.title.toLowerCase().includes(debouncedSearch.toLowerCase());

            })

            settodo(filterd);





        }

        FetchTodos();
    }, [debouncedSearch])






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

            <MultipleFilter multipname={multipname} setmultiname={setmultiname}
                multiEmail={multiEmail} setmultiEmail={setmultiEmail}
                multiPrice={multiPrice} setmultiPrice={setmultiPrice}
                multipleRole={multipleRole} setmultiRole={setmultiRole}
            />

            {
                filterFunct.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.role}</p>
                        <p>{user.price}</p>


                    </div>
                ))
            }

            <h1 style={{ color: "revert-layer" }}> Pagination</h1>

            {
                currentUsers.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.price}</p>
                        <p>{user.role}</p>

                    </div>


                ))
            }

            <button onClick={() => setcurrentpage(currentpage - 1)}
                disabled={currentpage === 1}>
                Prev
            </button>
            {Array.from({ length: totalPage }, (_, index) => (
                <button
                    key={index}
                    onClick={() => setcurrentpage(index + 1)}>

                    {index + 1}

                </button>
            ))}
            <button onClick={() => setcurrentpage(currentpage + 1)}
                disabled={currentpage === totalPage}>
                Next
            </button>



            <h2 color="blue">Debounce Search</h2>
            <input type="text" placeholder="search for todo" value={search} onChange={(e) => setsearch(e.target.value)} />

            {
                todo.map((todo) => (
                    <div key={todo.id}>
                        <p>{todo.title}</p>
                        <p>{todo.completed ? "true" : "false"}</p>
                    </div>

                ))
            }
        </>

    )
}

export default Dashboard
