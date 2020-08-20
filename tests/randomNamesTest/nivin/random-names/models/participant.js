const mongoose = require('mongoose');

const ParticipantSchema = mongoose.Schema(
  {
    username: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model('Participant', ParticipantSchema, 'Participants');
