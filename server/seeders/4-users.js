("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "junwatanabe72",
          profileImage:
            "http://localhost:3000/uploads/RESIZE-IMAGE-1603256609451.jpg",
          facebook: "junwatanabe72",
          twitter: "junwata72",
          instagram: undefined,
          youtube: "UC-hTmh_CtqIUphbwd8Eu6EQ",
          sex: 1,
          residence: "兵庫県",
          birthPlace: "栃木県",
          school: "学習院大学",
          hobby: "プログラミング",
          bestScore: 69,
          averageDistance: 250,
          homeCourse: "姉ヶ崎CC",
          email: "junwatanabe72@gmail.com",
          password: "Password",
          job: "フリーランス",
          clubImage: `http://localhost:3000/uploads/RESIZE-IMAGE-1603256609471.jpg`,
          show: 1,
          typeId: 32,
          favourite: "タイガーウッズ",
          blood: 1,
          history: 3,
          hcap: 9,
          classification: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
