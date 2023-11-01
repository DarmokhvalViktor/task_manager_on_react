import React from 'react';

import {Form} from "./Form/Form";
import {Calendar} from "./Calendar/Calendar";

const Header = () => {

    return (
        <div>
            <Calendar/>
            <Form/>
        </div>
    );
};

export {Header};