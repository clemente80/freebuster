import styled from 'styled-components'

export const Modal = styled.div`
    position: fixed;
    width: 600px;
    top: 100px;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    border-radius: 10px;
    backdrop-filter: blur(25px);
    background-color: transparent;
    border-bottom: 1px solid rgba(256, 256, 256, .4);
    border-right: 1px solid rgba(256, 256, 256, .4);
    box-shadow: 0 0 20px rgb(0,0,0);
`