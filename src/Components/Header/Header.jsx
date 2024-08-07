import React from "react";
import styled from "styled-components";
import { Boton } from "../UI";
import Logotipo from "../Logotipo/Logo";
import { Link, useResolvedPath } from "react-router-dom";

const Barra = styled.header`
  background-color: #000;
  height: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 15rem;
  }
`;

const BotonesContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Header = () => {
  const url = useResolvedPath().pathname;

  return (
    <Barra>
      <Link to={"/"}>
        <Logotipo />
      </Link>

      {url === '/' ? (
        <BotonesContainer>
          <Link to={"/#"}>
            <Boton>Home</Boton>
          </Link>
          <Link to={"/video"}>
            <Boton>Nuevo Video</Boton>
          </Link>
        </BotonesContainer>
      ) : null}
    </Barra>
  );
};

export default Header;
