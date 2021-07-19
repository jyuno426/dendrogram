const build = () => {
  return {
    components: {
      securitySchemes: {
        JWTauth: {
          type: "apiKey",
          in: "header",
          name: "Authorization"
        }
      },
      schemas: {
        ...generals,
        ...bookings,
      },
    },
  };
};

const generals = {
  id: {
    type: "integer",
    description: "general id for all models",
    example: "30"
  },
  search: {
    type: "string",
    description: "search by string",
    example: ""
  },
  pagination: {
    type: "string",
    description: "true or false",
    example: "true",
  },
  page: {
    type: "integer",
    description: "page number",
    example: "1",
  },
  error: {
    // error model
    type: "object", //data type
    properties: {
      code: {
        type: "string", // data type
        description: "Error code", // desc
        example: "UNAUTHORIZED", // example of an error internal code
      },
      message: {
        type: "string", // data type
        description: "Error message", // desc
        example: "이용하시려면 로그인하거나 가입하셔야 합니다.", // example of an error message
      },
    },
  },
};

const getGenerals = (keys) => {
  let res = {};
  keys.forEach(key => {
    res[key] = generals[key];
  });
  return res;
}

const bookings = {
  room_id: {
    type: "integer",
    description: "room's unique id",
    example: "30",
  },
  booking: {
    type: "object",
    description: "Base booking parameters",
    properties: {
      booking: {
        type: "object",
        properties: {
          start: {
            type: "string",
            example: "2021-07-09",
            required: true,
          },
          end: {
            type: "string",
            example: "2021-07-14",
            required: true,
          }
        }
      }
    }
  },
  bookings_create: {

  },
  bookings_show: {

  },
  bookings_update: {

  },
  bookings_destroy: {

  },
  bookings_cancel: {

  },
  bookings_partial_cancel: {

  },
  bookings_send_email_to_user: {

  },
  bookings_send_sms_to_user: {

  }
};

module.exports = build();