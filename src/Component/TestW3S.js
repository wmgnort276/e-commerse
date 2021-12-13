import './TestW3s.css';
import React,{useState} from 'react';
import {useEffect} from 'react'



function TestW3S() {
    
    const [title,setTitle] = useState('');
    const [users,setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(respone => {
                return respone.json();
            })
            .then(userData => {
                setUsers(userData);
            })
    },[])


    return (
        <div>

            <input type="text" 
                value={title}
                onChange={e => (setTitle(e.target.value))}
            />
        
            <ul>
                {users.map(user => (
                    <li key={user.id}> {user.name} </li>
                ))}
            </ul>

        </div>
    );

}

 export default TestW3S