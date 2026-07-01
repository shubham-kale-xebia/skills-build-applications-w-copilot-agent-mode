"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
const models_1 = require("../models");
// Seed the octofit_db database with test data
const seed = async () => {
    console.log('Seed the octofit_db database with test data');
    const mongoUri = (0, config_1.getMongoUri)();
    await mongoose_1.default.connect(mongoUri);
    await Promise.all([
        models_1.User.deleteMany({}),
        models_1.Team.deleteMany({}),
        models_1.Activity.deleteMany({}),
        models_1.LeaderboardEntry.deleteMany({}),
        models_1.Workout.deleteMany({}),
    ]);
    const users = await models_1.User.insertMany([
        {
            name: 'Ava Patel',
            email: 'ava@example.com',
            profileImage: 'https://i.pravatar.cc/150?img=47',
        },
        {
            name: 'Liam Chen',
            email: 'liam@example.com',
            profileImage: 'https://i.pravatar.cc/150?img=12',
        },
        {
            name: 'Maya Rodriguez',
            email: 'maya@example.com',
            profileImage: 'https://i.pravatar.cc/150?img=32',
        },
    ]);
    const teams = await models_1.Team.insertMany([
        {
            name: 'Peak Performers',
            description: 'A competitive team focused on endurance and strength.',
            members: [users[0]._id, users[1]._id],
        },
        {
            name: 'Momentum Squad',
            description: 'A balanced team for recovery and performance.',
            members: [users[2]._id],
        },
    ]);
    await models_1.Activity.insertMany([
        {
            userId: users[0]._id,
            type: 'Run',
            duration: 35,
            notes: 'Morning interval run',
        },
        {
            userId: users[1]._id,
            type: 'Strength',
            duration: 50,
            notes: 'Upper body workout',
        },
        {
            userId: users[2]._id,
            type: 'Cycling',
            duration: 45,
            notes: 'Evening ride',
        },
    ]);
    await models_1.LeaderboardEntry.insertMany([
        {
            userId: users[0]._id,
            score: 980,
            rank: 1,
        },
        {
            userId: users[1]._id,
            score: 910,
            rank: 2,
        },
        {
            userId: users[2]._id,
            score: 870,
            rank: 3,
        },
    ]);
    await models_1.Workout.insertMany([
        {
            userId: users[0]._id,
            title: 'HIIT Cardio',
            duration: 25,
            difficulty: 'intermediate',
        },
        {
            userId: users[1]._id,
            title: 'Core and Mobility',
            duration: 30,
            difficulty: 'beginner',
        },
        {
            userId: users[2]._id,
            title: 'Endurance Ride',
            duration: 40,
            difficulty: 'advanced',
        },
    ]);
    console.log(`Seeded ${users.length} users, ${teams.length} teams, and related activity data.`);
    await mongoose_1.default.disconnect();
};
seed().catch((error) => {
    console.error('Seeding failed:', error);
    process.exit(1);
});
