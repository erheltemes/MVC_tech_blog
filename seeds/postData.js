const { Post } = require('../models');

const postData = [
  {
    post_title: 'Hello',
    post_body: 'Derp derp',
    user_id: '1',
  },
  {
    post_title: 'Like zoinks',
    post_body: 'Scoob',
    user_id: '2',
  },
  {
    post_title: 'Plutos not a planet',
    post_body: 'SPACEX',
    user_id: '3',
  },
  {
    post_title: 'Silly Rabiit',
    post_body: 'Trix are for kids',
    user_id: '1',
  },
  {
    post_title: 'Did you know',
    post_body: 'birds arent real',
    user_id: '1',
  },
  {
    post_title: 'I like to eat eat eat',
    post_body: 'apples and spleens',
    user_id: '2',
  },
  {
    post_title: 'There aint room in this town for the 2 of us',
    post_body: 'Someone poisoned the water hole',
    user_id: '3',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
