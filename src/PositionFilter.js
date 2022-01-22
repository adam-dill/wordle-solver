import React from 'react';

const PositionFilter = ({positions, onChange}) => {
    return (
        <>
            Positions:
            <div className="position-filter">
                {positions.map((char, index) => {
                return <input key={index} type="text" onChange={e => {
                        const newArr = positions.splice(0, positions.length);
                        newArr[index] = e.target.value;
                        onChange(newArr);
                    }} value={char} maxLength={1} />})}
            </div>
        </>
        
    );
};

export default PositionFilter;