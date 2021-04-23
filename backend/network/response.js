const statusMessages = {
  200: "Done",
  201: "Created",
  400: "Invalid format",
  500: "Internal error",
};

exports.success = (req, res, message, status) => {
  let statusCode = status;
  let statusMessage = message;

  if (!status) {
    status = 200;
  }
  if (!message) {
    statusMessage = statusMessages[status];
  }

  res.status(status || 200).send({
    error: "",
    body: message,
  });
};

exports.error = (req, res, errorMessage, status, detail) => {
  console.error("[response error]: " + detail);
  res.status(status || 500).send({
    error: errorMessage,
    body: "",
  });
};
