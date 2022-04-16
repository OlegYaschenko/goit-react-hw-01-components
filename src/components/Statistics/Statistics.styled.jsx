import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  display: inline-block;
  margin: 20px;
  border-radius: 2%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 25px;
`;

export const List = styled.ul`
  display: flex;
  background-color: rgba(0, 0, 0, 0.04);
`;

export const Item = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 75px;
  height: 75px;
  border: 1px solid rgb(0 0 0 / 20%);
  background-color: ${props => {
    return props.backgroundColor;
  }};
`;

export const Label = styled.span`
  display: block;
  font-weight: 700;
`;

export const Percentage = styled.span``;
