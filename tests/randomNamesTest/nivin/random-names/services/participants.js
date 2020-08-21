import Participant from '../models/participant';

export const createParticipant = (participant) => {
  return new Participant({ ...participant }).save();
};

export const getParticipants = (filter) => {
  return Participant.find(filter);
};
