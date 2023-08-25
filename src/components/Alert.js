import React, { memo, useState } from 'react'

export default memo(function Alert(props) {
    const [btnname, setbtnname] = useState('Bluemode');

    const toggleblue = () => {
        if (btnname === 'Bluemode') {
            setbtnname('Lightmode');
            document.body.style.backgroundColor = 'lightblue';
        }
        else {
            setbtnname('Bluemode');
            document.body.style.backgroundColor = 'white';
        }
    }

    return (

        props.alert && <div className={`container text-center alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <div className='row'>
                    <div className='col-8 p-2'>
                        <strong>{props.alert.type}</strong> : {props.alert.msg}
                    </div>

                    <div className='col-4'>
                        <button type="button" className="btn btn-primary " onClick={toggleblue}>{`${btnname}`}</button>
                    </div>
                </div>
        </div>
    )
})
