import PropTypes from 'prop-types';
import { FriendBoard, Friend, Status, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendBoard>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friend key={id}>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" />
            <Name>{name}</Name>
          </Friend>
        );
      })}
    </FriendBoard>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
