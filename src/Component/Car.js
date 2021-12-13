import React, { useState } from 'react';

// import ReactDOM from 'react-dom';
import TestW3S from './TestW3S';
// {} các biểu thức cần đặt trong {}

function Car(){
    const [show,setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}>
                ChangeButton
            </button>

           {(show && <TestW3S />)}
        </>
    );
}

export default Car