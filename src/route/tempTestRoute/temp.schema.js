const postReqBody = {
  type: 'object',
  required: ['title'],
  properties: {
    title: {
      type: 'string',
      minLength: 10,
    },
  },
};

const postResBody = {
  201: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' },
    },
  },
};

const getResBody = {
  200: {
    type: 'object',
    required: ['temps'],
    properties: {
      temps: {
        type: 'array',
        items: {
          type: 'object',
          required: ['id', 'title'],
          properties: {
            id: { type: 'string' },
            title: {
              type: 'string',
              minLength: 10,
            },
          },
        },
      },
    },
  },
};

module.exports = {
  postReqBody,
  postResBody,
  getResBody,
};
