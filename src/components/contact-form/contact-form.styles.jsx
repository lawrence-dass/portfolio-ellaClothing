import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  margin-top: 50px;
  width: 50%;
  text-align: center;

  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  font-family: inherit;
  margin: 0 auto 30px auto;
  color: #505050;
  font-size: 16px;
  border-bottom: 1px solid #98648b;
  resize: none;
  padding: 6px;
`;

export const FormContainer = styled.form`
  width: 75%;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 600px) {
    width: 95%;
    margin: 3rem auto 1rem auto;
  }
`;
