import styled, { css } from "styled-components";

interface SHeader {
  width: number | null;
}

export const SHeaderWrapper = styled.div<SHeader>`
  position: absolute;
  left: 15%;
  ${({ width }) => {
    return (
      width &&
      css`
        width: ${width - 256}px;
      `
    );
  }};
`;
