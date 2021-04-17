exports.success = (req, res, message, status) => {
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
