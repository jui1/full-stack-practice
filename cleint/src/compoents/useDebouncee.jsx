import { useEffect, useState } from "react"


const useDebouncee = (seachh ,d) => {
    const [debouched , setdebouched] = useState(seachh);
    useEffect(()=>{
     const Timer=   setTimeout(() => {
            setdebouched(seachh)
        }, d);
     
        return (
            clearTimeout(Timer)
        )
    },[seachh , 500])

    return debouched;
  
}

export default useDebouncee
