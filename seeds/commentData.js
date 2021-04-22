const { Comment } = require('../models');

const commentData = [
  {
    comment_body: "Bruh WTFFFFF",
    user_id: "1",
    post_id:"1"
  },
  {
    comment_body: "Bruhhhhhh WTFFFFF",
    user_id: "2",
    post_id:"3"
  },
  {
    comment_body: "Bruh WTFFFFFFFFFFFFFFF",
    user_id: "3",
    post_id:"3"
  },
  {
    comment_body: "Bruh WTFF",
    user_id: "1",
    post_id:"2"
  },
  {
    comment_body: "Bruh WTFFFFFFFFF",
    user_id: "2",
    post_id:"2"
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
