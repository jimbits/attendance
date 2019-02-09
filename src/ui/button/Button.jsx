import React from 'react';
import styled from 'styled-components'


const UIButton = styled.button`
background:transparent;
color:#fff;
padding:0.25rem 0.5rem;
border-radius:3px;
border:none;
font-size: 1rem;
&:hover{
    color:tomato;
}
border: 1px solid rgba(255,255,255,0.5);
`

const Button = (props) => {
    return (
        <UIButton>{props.label}</UIButton>
    );
}

export default Button;