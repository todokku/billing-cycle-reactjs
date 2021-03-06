import styled from 'styled-components';

import { device, globalVariables } from '../../../styles/variables';

export const Container = styled.div`
  padding: 2.25em;
  max-width: 90vw;
  flex: 1;
  display: inline-block;

  @media ${device.heightMobileL}, ${device.minlaptopG} {
    overflow-y: visible;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 2em 0;
  height: 300px;

  & > :last-child {
    margin-left: 2em;
  }

  @media ${device.laptopM}, ${device.heightMobileL}, ${device.minlaptopG} {
    flex-direction: column;
    justify-content: unset;
    height: 52em;

    & > :last-child {
      margin-top: 2em;
      margin-left: 0;
    }
  }
`;

export const NoChartsTitle = styled.p`
  font-size: 18px;
  color: ${globalVariables.fontBlackColor};
`;
