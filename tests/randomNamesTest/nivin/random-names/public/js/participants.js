let participants = [];
let participantsFetchInterval;
let groupSize = 0;
if (!localStorage.getItem('user')) window.location.href = '/login';

function randChunkSplit(arr, size) {
  const length = arr.length;
  let groups = [];
  for (let i = 0; i < length; i++) {
    let newGroup = [];
    for (let j = 0; j < size; j++) {
      if (arr[0]) {
        newGroup.push(arr[0]);
        arr.splice(0, 1);
      }
    }

    if (newGroup.length) groups.push(newGroup);
  }
  return groups;
}

const participantsGroupsContainer = document.getElementById(
  'participantsGroups'
);

function setGroupSize() {
  groupSize = document.getElementById('groupSize').value;
  if (!groupSize || groupSize !== 0) renderParticipants(participants);
}

const addParticipant = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  fetch('/participants/add', {
    method: 'POST',
    body: JSON.stringify({
      username: user.username,
      image: user.image,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      document.getElementById('addMe').remove();
      document.getElementById('createGroup').style.display = 'flex';
      renderParticipants([...participants, res.participant]);
    })
    .catch((err) => {
      console.log(err);
    });
};

const checkUserExistsInParticipants = (participants) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const exists = [...participants].filter((p) => p.username === user.username);
  if (exists.length > 0) {
    document.getElementById('createGroup').style.display = 'flex';
  } else {
    document.getElementById('addMe').style.display = 'block';
    document.getElementById('createGroup').style.display = 'none';
  }
};
const getParticipants = () => {
  fetch('/participants')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.participants);
      participants = data.participants;
      checkUserExistsInParticipants(participants);
      renderParticipants(participants);
    });
};

function groupParticipants(participantsData, groupSize) {
  let participants = [...participantsData];
  return randChunkSplit(participants, groupSize);
}

const getParticipantItemView = ({ image, username }) => {
  const participant = document.createElement('div');
  participant.classList.add('participant');
  const participantImg = document.createElement('img');
  participantImg.src = image;
  const participantName = document.createElement('h4');
  participantName.innerHTML = username;
  participant.appendChild(participantImg);
  participant.appendChild(participantName);
  return participant;
};

const renderParticipants = (participants) => {
  participantsGroupsContainer.innerHTML = '';
  if (groupSize !== 0) {
    const groupedParticipants = groupParticipants(participants, groupSize);
    groupedParticipants.map((group) => {
      const groupContainer = document.createElement('div');
      groupContainer.classList.add('participantsGroup');
      group.map((participant) => {
        groupContainer.appendChild(getParticipantItemView(participant));
      });
      participantsGroupsContainer.appendChild(groupContainer);
    });
    return;
  }

  participants.map((p) => {
    participantsGroupsContainer.appendChild(getParticipantItemView(p));
  });
};

getParticipants();

setInterval(() => getParticipants(), 5000);
