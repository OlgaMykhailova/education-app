import styled from 'styled-components';
import { ReactComponent as SpinnerIcon } from '../../media/spinner.svg';

export const SpinnerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 90vh;
`

export const Spinner = styled(SpinnerIcon)`
  fill: rgb(0, 166, 152);;
  animation: rotate 2s linear infinite;

  width: 120px;
  height: 120px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
