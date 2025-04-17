import React from 'react';

// ✅ Use destructuring directly in the parameters
const Student = ({ name, age, isStudent }) => {
    return (
        <div className='Student'>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>isStudent: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
};

// ✅ Correct defaultProps
Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false
};

export default Student;
