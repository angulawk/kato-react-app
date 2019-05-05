import React from "react";
import styled, { css } from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = ({
  isLoading
}) => (
  <Loader.Container
    isLoading={isLoading && isLoading.toString()}
    data-testid='loader'
  >
    <CircularProgress />
  </Loader.Container>
);

Loader.Container = styled.div`
${({
    isLoading
  }) => css`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    z-index: 9999;
    transition: all 300ms ease-in-out;
    opacity: ${isLoading === "true" ? 1 : 0};
    visibility: ${isLoading === "true" ? "visible" : "hidden"};
  `}
`;

export default Loader;
