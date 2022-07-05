import styled from 'styled-components';

interface ContainerProps {
  showBackGround: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => (props.showBackGround ? '#1550ff' : '#e2e3e3')};
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface IconProps {
  opacity?: number;
}
export const Icon = styled.img<IconProps>`
  width: 40px;
  height: 40px;
  opacity: ${(props) => props.opacity ?? 1};
`;
