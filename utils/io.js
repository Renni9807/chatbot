module.exports = function (io) {
  // about io. Combination of .emit() or .on()
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);
  }); // data of the one who is connected is socket. Make it as argument
};
