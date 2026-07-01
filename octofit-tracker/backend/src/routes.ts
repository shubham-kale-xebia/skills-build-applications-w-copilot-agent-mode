import { Router } from 'express';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models';

const router = Router();

const sendCollection = (res: any, items: any[]) => {
  res.json(items);
};

router.get('/api/users', async (_req, res) => {
  try {
    const users = await User.find({});
    sendCollection(res, users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error });
  }
});

router.get('/api/users/', async (_req, res) => {
  try {
    const users = await User.find({});
    sendCollection(res, users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error });
  }
});

router.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create user', error });
  }
});

router.post('/api/users/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create user', error });
  }
});

router.get('/api/teams', async (_req, res) => {
  try {
    const teams = await Team.find({}).populate('members');
    sendCollection(res, teams);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch teams', error });
  }
});

router.post('/api/teams/', async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create team', error });
  }
});

router.get('/api/activities', async (_req, res) => {
  try {
    const activities = await Activity.find({}).populate('userId');
    sendCollection(res, activities);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch activities', error });
  }
});

router.get('/api/activities/', async (_req, res) => {
  try {
    const activities = await Activity.find({}).populate('userId');
    sendCollection(res, activities);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch activities', error });
  }
});

router.post('/api/activities', async (req, res) => {
  try {
    const activity = await Activity.create(req.body);
    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create activity', error });
  }
});

router.get('/api/leaderboard', async (_req, res) => {
  try {
    const leaderboard = await LeaderboardEntry.find({}).populate('userId').sort({ score: -1 });
    sendCollection(res, leaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch leaderboard', error });
  }
});

router.get('/api/leaderboard/', async (_req, res) => {
  try {
    const leaderboard = await LeaderboardEntry.find({}).populate('userId').sort({ score: -1 });
    sendCollection(res, leaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch leaderboard', error });
  }
});

router.post('/api/leaderboard', async (req, res) => {
  try {
    const entry = await LeaderboardEntry.create(req.body);
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create leaderboard entry', error });
  }
});

router.get('/api/workouts', async (_req, res) => {
  try {
    const workouts = await Workout.find({}).populate('userId');
    sendCollection(res, workouts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch workouts', error });
  }
});

router.get('/api/workouts/', async (_req, res) => {
  try {
    const workouts = await Workout.find({}).populate('userId');
    sendCollection(res, workouts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch workouts', error });
  }
});

router.post('/api/workouts', async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create workout', error });
  }
});

export default router;
