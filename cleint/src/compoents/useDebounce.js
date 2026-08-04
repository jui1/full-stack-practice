import { useEffect, useState } from "react"


function useDebounce (value , d ) {
    const [debouched , setdebouched ] = useState(value);
    useEffect(()=>{
       const Timer =  setTimeout(()=>{
            setdebouched(value);
        } ,d);

        return ()=>{
            clearTimeout(Timer);
        }
    },[value , 500])

return debouched;
  
}

export default useDebounce
