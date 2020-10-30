("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "results",
      [
        {
          id: 1,
          name: "ゴルフネットワーク選手権 RomaRo CUP",
          year: 2014,
          month: 11,
          rank: "21",
          url: "https://sp.golfnetwork.co.jp/gncup_2019/2014_leader_board.html",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "ゴルフネットワーク選手権 RomaRo CUP",
          year: 2013,
          month: 11,
          rank: "43",
          url: "https://sp.golfnetwork.co.jp/gncup_2019/2013_leader_board.html",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("results", null, {});
  },
};
