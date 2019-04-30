import React from 'react';
import styled from "styled-components";

const Text = ({
  children
}) => (
  <Text.Container data-testid='text'>
    {children}
  </Text.Container>
)

Text.Container = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-family: sans-serif;
  padding: 15px 20px;
  letter-spacing: 0.5px;
`;

export default Text;
