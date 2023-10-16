import styled, { css } from "styled-components";

interface SHeader {
  width: number | null;
}

export const SHeaderWrapper = styled.div<SHeader>`
  ${({ width }) => {
    return (
      width &&
      css`
        width: ${width - 600}px;
      `
    );
  }};
`;
