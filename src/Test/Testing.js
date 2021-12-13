import React, {useState} from 'react'

const arr = [
    'BMW X7',
    'Mescedes Benz S500',
    'Vinfast Lux SA 2.0'
]



function Testing() {

    const [gift, setgift] = useState();

    const handleClick = () => {
        const tmp = Math.floor(Math.random() * arr.length);
        console.log(tmp);
        setgift(arr[tmp]);
    }    


    return (
        <div>
            <h1>{gift}</h1>
            <button onClick= {handleClick} >Lấy thưởng</button>
        </div>
    )
}

export default Testing
