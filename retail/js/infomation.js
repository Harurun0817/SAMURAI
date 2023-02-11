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
    { id: 0, name: "" },
    { id: 1, name: "商品" },
    { id: 2, name: "システム" },
    { id: 3, name: "事務連絡" }
  ];

  db.infomation = [ // 配列
    {
      date: "2022.9.1",
      limit: "2023.2.14",
      title: "aaaaaaaa",
      link: "https://infomaion2.co.jp",
      category: 1,
      contact: "iuiuiuiuiu",
    },
    {
      date: "2022.9.2",
      limit: "2023.2.15",
      title: "aaaaaaaa",
      link: "https://infomaion2.co.jp",
      category: 1,
      contact: "iuiuiuiuiu",
    },
    {
      date: "2022.9.3",
      limit: "2023.2.16",
      title: "aaaaaaaa",
      link: "https://infomaion2.co.jp",
      category: 1,
      contact: "iuiuiuiuiu",
    },
    {
      date: "2022.9.4",
      limit: "2023.2.17",
      title: "aaaaaaaa",
      link: "https://infomaion2.co.jp",
      category: 2,
      contact: "iuiuiuiuiu",
    },
    {
      date: "2022.9.5",
      limit: "2023.2.18",
      title: "bbb",
      link: "https://infomaion2.co.jp",
      category: 3,
      contact: "hhhhhhhhh",
    },
    {
      date: "2022.9.1",
      limit: "2023.2.14",
      title: "aaaaaaaa",
      link: "https://infomaion2.co.jp",
      category: 1,
      contact: "iuiuiuiuiu",
    },
    {
      date: "2022.9.1",
      limit: "2023.2.14",
      title: "aaaaaaaa",
      link: "https://infomaion2.co.jp",
      category: 1,
      contact: "iuiuiuiuiu",
    },
    {
      date: "2022.9.1",
      limit: "2023.2.14",
      title: "aaaaaaaa",
      link: "https://infomaion2.co.jp",
      category: 1,
      contact: "iuiuiuiuiu",
    },
    {
      date: "2022.9.1",
      limit: "2023.2.14",
      title: "aaaaaaaa",
      link: "https://infomaion2.co.jp",
      category: 1,
      contact: "iuiuiuiuiu",
    },
    {
      date: "2022.9.1",
      limit: "2023.2.14",
      title: "aaaaaaaa",
      link: "https://infomaion2.co.jp",
      category: 1,
      contact: "iuiuiuiuiu",
    },
    {
      date: "2022.9.1",
      limit: "2023.2.14",
      title: "aaaaaaaa",
      link: "https://infomaion2.co.jp",
      category: 1,
      contact: "iuiuiuiuiu",
    },
  ];

}());