import React, { useState } from "react";
import styled from "styled-components";
import { Box, Heading, Card, Image, Table, Button } from "rimble-ui";
import Champions from "./data.js";

const Container = styled(Box)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: space-around;
`;

const Detail = styled(Box)`
  margin-top: 3rem;
`;

const HeaderContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-left: 15px;
  margin-right: 15px;
`;

const Header = styled(Heading.h2)`
  margin-bottom: 1rem;
`;

const ListContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled(Card)`
  flex-grow: 0px;
  flex-shrink: 0px;
  flex-basis: 25%;
  padding: 0px;
  position: relative;
  border-radius: 4px;
`;

const ImageStyle = styled(Image)`
  height: auto;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const CompareButton = styled(Button)`
  display: initial;
  position: absolute;
  left: 50%;
  margin-left: -85px;
  font-size: 19px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px 0;
  width: 172px;
  bottom: 16rem;
  opacity: 0;
  background-color: blue;

  :hover {
    opacity: 1;
  }
`;

const TableContainer = styled(Box)`
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 3rem;
`;

const TableStyle = styled(Table)`
  font-size: 20px;
`;
const Title = styled(Box)`
  padding: 15px;
`;

const TableHeader = styled.th`
  text-align: center !important;
  text-transform: initial !important;
`;

const TableDetail = styled.td`
  text-align: center !important;
`;

function ListComponent() {
  const [selectChampion, setSelectChampion] = useState([]);

  const list = Champions.map((champion, index) => {
    const isChampionDuplicated = selectChampion.some(
      checkChampion => checkChampion.name === champion.name
    );
    const checkDuplicated = () => {
      if (!isChampionDuplicated) {
        setSelectChampion([...selectChampion, champion]);
      } else {
        const filterChampion = selectChampion.filter(
          filteredChampion => filteredChampion.name !== champion.name
        );
        setSelectChampion(filterChampion);
      }
    };
    return (
      <ListItem key={index}>
        <ImageStyle src={champion.image} />
        <CompareButton onClick={checkDuplicated}>
          {!isChampionDuplicated ? "Compare" : "remove"}
        </CompareButton>
        <Title>
          <Heading.h3>{champion.name}</Heading.h3>
          <Heading.h5>{champion.epithet}</Heading.h5>
        </Title>
      </ListItem>
    );
  });
  //   console.log(selectChampion);
  return (
    <Container>
      <Detail>
        <HeaderContainer>
          <Header>Champions</Header>
        </HeaderContainer>
        <ListContainer>{list}</ListContainer>
        <TableContainer>
          {selectChampion.length > 1 ? (
            <TableStyle>
              <thead>
                <tr>
                  <th>Name</th>
                  {selectChampion.map((champion, index) => {
                    return (
                      <TableHeader key={index}>{champion.name}</TableHeader>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Epithet</td>
                  {selectChampion.map((champion, index) => {
                    return (
                      <TableDetail key={index}>{champion.epithet}</TableDetail>
                    );
                  })}
                </tr>
                <tr>
                  <td>Role</td>
                  {selectChampion.map((champion, index) => {
                    return (
                      <TableDetail key={index}>{champion.role}</TableDetail>
                    );
                  })}
                </tr>
                <tr>
                  <td>Style</td>
                  {selectChampion.map((champion, index) => {
                    return (
                      <TableDetail key={index}>{champion.style}</TableDetail>
                    );
                  })}
                </tr>
              </tbody>
            </TableStyle>
          ) : null}
        </TableContainer>
      </Detail>
    </Container>
  );
}

export default ListComponent;
