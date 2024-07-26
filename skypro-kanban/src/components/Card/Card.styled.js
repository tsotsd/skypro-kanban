import styled from 'styled-components'
import { topicStyles } from '../../lib/topic';
import { Gray, Green, Orange, Purple } from '../shared.styled';

export const TopicText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const CardTopic = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  /* background-color: ${({ $topicColor }) =>
    topicStyles[$topicColor]?.backgroundColor || "#b4fdd1"};

  ${TopicText} 
  {
    color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#06b16e"};
  } */
  ${({$topic}) => { 
    if($topic === 'Research')
        return Green
    else if($topic === 'Web Design')
        return Orange
    else if($topic === 'Copywriting')
        return Purple
    else return Gray
   } }
`;

export const CardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

