const { Post } = require('../models');

const postData = [
    {
        id: 1,
        postDescription: "Can anybody tell me what the theme of this novel is?",
        user_id: 5,
        book_id: 6
    },
    {
        id: 2,
        postDescription: "I almost feel that the person they are showing to be the 'Mercedes Killer' isn't the real 'Mercedes Killer'. The 'low-tech', non-specific, randomness of the killings doesn't really fit well with tech savvy Barry. I wonder if Barry figured out who the Mercedes Killer was and is trying to lead the Detective to the real killer. But if that was true, it would mean that the real 'Mercedes Killer' was that lady who said her car was stolen.",
        user_id: 3,
        book_id: 4
    },
    {
        id: 3,
        postDescription: "I just finished reading Huckleberry Finn, and in a few weeks, we are required to write a paper about it. It's a literary analysis, and my teacher assigned me the following question: In Huckleberry Finn, the protagonist (Huck Finn) is a child. Why did Mark Twain decide to use a child as opposed to an adult protagonist?",
        user_id: 1,
        book_id: 1
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;