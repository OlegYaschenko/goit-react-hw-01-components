import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

function randomColor() {
  let color = `#${(Math.random().toString(16) + '000000')
    .substring(2, 8)
    .toUpperCase()}80`;
  return color;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item backgroundColor={randomColor()} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
