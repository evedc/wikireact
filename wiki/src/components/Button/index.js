import React from "react";
import { ButtonContainer } from './styles';

function Button({ onClick }) { // Desestruturar o onClick a partir das props
    return (
        <ButtonContainer onClick={onClick}>
            Buscar
        </ButtonContainer>
    );
}

export default Button;