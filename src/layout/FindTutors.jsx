import React from 'react';
import SearchFilter from '../pages/findtutors/SearchFilter';
import Tutors from '../pages/findtutors/Tutors';
import { useParams } from 'react-router-dom';

const FindTutors = () => {
    const {category} = useParams()
    
    return (
        <div>
            <SearchFilter/>
            <Tutors category={category}></Tutors>
        </div>
    );
};

export default FindTutors;