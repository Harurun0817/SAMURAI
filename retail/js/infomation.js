(function () {
  var db = {
    loadData: function (filter) {
      return $.grep(this.infomation, function (info) {
        return (!filter.date || info.date.indexOf(filter.date) > -1)
          && (!filter.title || info.title.indexOf(filter.title) > -1)
          && (!filter.category || info.category === filter.category);
      });
    }
  };

  window.db = db;

  db.categories = [
    { id: 0, name: "" },
    { id: 1, name: "商品" },
    { id: 2, name: "システム" },
    { id: 3, name: "事務連絡" }
  ];

  db.infomation = [
    { date: "2022.9.1", title: "aaaaaaaaa", category: 1 },
    { date: "2022.9.2", title: "bbb", category: 1 },
    { date: "2022.9.3", title: "ccc", category: 2 },
    { date: "2022.9.4", title: "ddd", category: 3 },
    { date: "2022.9.5", title: "eee", category: 3 },
    { date: "2022.9.6", title: "fff", category: 3 },
    { date: "2022.9.7", title: "fff", category: 3 },
    { date: "2022.9.8", title: "fff", category: 3 },
    { date: "2022.9.9", title: "fff", category: 3 },
    { date: "2022.9.10", title: "fff", category: 3 },
    { date: "2022.9.11", title: "fff", category: 3 },
    { date: "2022.9.12", title: "fff", category: 3 },
    { date: "2022.9.13", title: "fff", category: 3 },
  ];

}());