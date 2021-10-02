const { Rate } = require('../models');

const rateData = [
    {
        rate: 4,
        reason: '',
        user_id: 1,
    },
    {
        rate: 4,
        reason: '',
        user_id: 1,
    },
    {
        rate: 4,
        reason: '',
        user_id: 1,
    },
    {
        rate: 4,
        reason: '',
        user_id: 1,
    },
    {
        rate: 4,
        reason: '',
        user_id: 1,
    },
];

const seedRate = () => Rate.bulkCreate(rateData);

module.exports = seedRate;