import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalContainer = styled(Modal)`
    position: absolute;
    top: 280px;
    left: 1220px;
    margin: 0 auto;
    transform: translate(-50%,-50%);
    background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.96), rgba(131, 67, 115, 0.93)),url('https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80');
    width: 300px;
    height: 50%;
    padding: 2rem 1.5rem;

    @media screen and (max-width: 600px) {
        top: 50%;
        left: 50%;
        width: 80%;
        height: auto;
        min-height: 60%;
        padding: 2rem 1.5rem;
        
    }
`;

export const ModalCloseButton = styled.span`
    position: absolute;
    right: 20px;
    top: 20px;
  
    @media screen and (max-width: 600px) {
      top: 5px;
      right: 10px;
    }
`;