import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const UIButton = styled.button
    `
background: transparent;
color:#fff;
padding:0.25rem 1rem;
border-radius: 5px;
margin: 0.5rem 0;
border:none;
font-size: 1rem;
&:hover{
    color:tomato;
}
`

const Button = (props) => {
    return (
        <Link to="/admin">admin page</Link>
    );
}

export default Button;