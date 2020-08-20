import express from 'express';
import { createUser, userExists } from './services/users';
import { getParticipants, createParticipant } from './services/participants';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import moment from 'moment';
import path from 'path';
const app = express();
// app libraries
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/login.html'));
});

app.get('/register', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/register.html'));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongoURI =
  'mongodb+srv://nivin:apiFHVcK1RJINyzq@cluster0.gsx6h.mongodb.net/random-names';

// mongoDB

mongoose.connect(mongoURI, (err) => {
  if (err) console.log(err);
  console.log('Connected!');
});

// routes
app.post('/users/register', async (req, res) => {
  const { body } = req;
  const user = createUser(body);
  return res.status(201).json({ user });
});

app.post('/users/login', async (req, res) => {
  const { body } = req;
  console.log('body');
  const user = await userExists(body);
  console.log('user');
  if (!user) return res.status(404).json({ msg: 'Not Found!' });
  res.setHeader('Content-Type', 'application/json');

  return res.send({ user: user });
});

app.post('/participants/add', async (req, res) => {
  const participant = await createParticipant(req.body);
  return res.status(201).json({ participant });
});

app.get('/participants', async (_, res) => {
  const participants = await getParticipants({
    createdAt: { $gte: new Date(moment().subtract(30, 'minutes')) },
  });
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({ participants });
});

// main server port
app.listen(3000, () => {
  console.log('Server is running on Port 3000');
});
