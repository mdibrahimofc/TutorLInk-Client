import React, { useState } from 'react';
import SearchFilter from '../pages/findtutors/SearchFilter';
import Tutors from '../pages/findtutors/Tutors';
import { useParams } from 'react-router-dom';

const FindTutors = () => {
    const [tutors, setTutors] = useState([])
    const {category} = useParams()
    
    return (
        <div>
            <SearchFilter setTutors={setTutors} />
            <Tutors tutors={tutors} setTutors={setTutors} category={category}></Tutors>
        </div>
    );
};

export default FindTutors;