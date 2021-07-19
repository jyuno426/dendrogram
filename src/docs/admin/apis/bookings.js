const build = () => {
  return {
    '/bookings': {
      ...readBookings
    },
    '/bookings/{id}': {
      ...readBooking,
      ...updateBooking,
      ...deleteBooking
    },
    '/bookings/{id}/cancel': {

    },
    '/bookings/{id}/partial_cancel': {

    },
    '/bookings/{id}/send_main_to_user': {

    },
    '/bookings/{id}/send_sms_to_user': {

    }
  };
}

const readBookings = {
  get: {
    tags: ["Bookings"],
    description: "Read bookings",
    operationId: "bookings-index",
    parameters: ["room_id", "pagination", "page", "search"].map(key => ({
      name: key,
      in: "query",
      schema: {
        $ref: `#/components/schemas/${key}`
      }
    })),
  }
};

const readBooking = {
  get: {
    tags: ["Bookings"],
    description: "Read booking by id",
    operationId: "bookings-show",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: `#/components/schemas/id`
        },
        required: true,
      }
    ],
  }
};

const updateBooking = {
  put: {
    tags: ["Bookings"],
    description: "Update booking by id",
    operationId: "bookings-update",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: `#/components/schemas/id`
        },
        required: true,
      }
    ],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/booking"
          }
        }
      }
    },
    responses: {
      200: {
        description: "a booking obtained",
      },
      400: {
        description: "bad request",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/error"
            }
          }
        }
      },
      401: {
        description: "unauthorized",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/error"
            }
          }
        }
      }
    }
  }
}

const deleteBooking = {
  delete: {
    tags: ["Bookings"],
    description: "Delete booking by id",
    operationId: "bookings-destroy",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: `#/components/schemas/id`
        },
        required: true,
      }
    ],
  }
}


module.exports = build();