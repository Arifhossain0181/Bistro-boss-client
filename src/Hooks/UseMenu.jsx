import { useState, useEffect } from 'react';
// ...existing code...

const useMenu=( ) =>{
const [menu, setmenu] = useState([])
const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {setmenu(data)
            setLoading(false);
        })
        
    },[])
    return [menu, loading] // Return both menu and loading state
}
export default useMenu