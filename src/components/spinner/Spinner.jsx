import React from 'react';

const Spinner = ({ color }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 " style={{ borderColor: color ? color : 'white' }}></div>
        </div>
    );
};

export default Spinner;
