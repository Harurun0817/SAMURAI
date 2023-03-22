(function () {
  var db = {
    loadData: function (filter) {
      return $.grep(this.infomation, function (info) {
        return (!filter.date || info.date.indexOf(filter.date) > -1)
          && (!filter.limit || info.limit.indexOf(filter.limit) > -1)
          && (!filter.title || info.title.indexOf(filter.title) > -1)
          && (!filter.contact || info.contact.indexOf(filter.contact) > -1)
          && (!filter.category || info.category === filter.category);
      });
    }
  };

  window.db = db;

  db.categories = [
    { id: 1, name: "五十音" },
    { id: 2, name: "銘柄" },
  ];

  db.infomation = [ // 配列
    {
      go: "あ",
      name: "青空銀行",
    },
    {
      go: "あ",
      name: "青色株式会社",
    },
    {
      go: "い",
      name: "色々株式会社",
    },

  ];

}());