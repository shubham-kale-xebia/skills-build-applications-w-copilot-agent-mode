"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("./models");
const router = (0, express_1.Router)();
const sendCollection = (res, items) => {
    res.json(items);
};
router.get(['/api/users', '/api/users/'], async (_req, res) => {
    try {
        const users = await models_1.User.find({});
        sendCollection(res, users);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error });
    }
});
router.post('/api/users/', async (req, res) => {
    try {
        const user = await models_1.User.create(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create user', error });
    }
});
router.get(['/api/teams', '/api/teams/'], async (_req, res) => {
    try {
        const teams = await models_1.Team.find({}).populate('members');
        sendCollection(res, teams);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch teams', error });
    }
});
router.post('/api/teams/', async (req, res) => {
    try {
        const team = await models_1.Team.create(req.body);
        res.status(201).json(team);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create team', error });
    }
});
router.get(['/api/activities', '/api/activities/'], async (_req, res) => {
    try {
        const activities = await models_1.Activity.find({}).populate('userId');
        sendCollection(res, activities);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch activities', error });
    }
});
router.post('/api/activities/', async (req, res) => {
    try {
        const activity = await models_1.Activity.create(req.body);
        res.status(201).json(activity);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create activity', error });
    }
});
router.get(['/api/leaderboard', '/api/leaderboard/'], async (_req, res) => {
    try {
        const leaderboard = await models_1.LeaderboardEntry.find({}).populate('userId').sort({ score: -1 });
        sendCollection(res, leaderboard);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch leaderboard', error });
    }
});
router.post('/api/leaderboard/', async (req, res) => {
    try {
        const entry = await models_1.LeaderboardEntry.create(req.body);
        res.status(201).json(entry);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create leaderboard entry', error });
    }
});
router.get(['/api/workouts', '/api/workouts/'], async (_req, res) => {
    try {
        const workouts = await models_1.Workout.find({}).populate('userId');
        sendCollection(res, workouts);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch workouts', error });
    }
});
router.post('/api/workouts/', async (req, res) => {
    try {
        const workout = await models_1.Workout.create(req.body);
        res.status(201).json(workout);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create workout', error });
    }
});
exports.default = router;
