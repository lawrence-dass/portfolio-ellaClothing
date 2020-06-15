import styled from 'styled-components';
import { ReactComponent as spinner } from '../../assets/spinner.svg';

export const SpinnerOverlay = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;

export const SpinnerContainer = styled(spinner)`
  width: 150px;
  height: 100px;
`;
