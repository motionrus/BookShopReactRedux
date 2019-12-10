export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "JavaScript: Подробное руководство",
      author: "David Flanagan",
      price: 32,
      coverImage: "https://javascript.ru/files/book/cover/4a49c49ced114.png"
    },
    {
      id: 2,
      title: "React и Redux. Функциональная веб-разработка",
      author: "Бэнкс Алекс, Порселло Ева",
      price: 32,
      coverImage: "https://cdn1.ozone.ru/multimedia/c650/1021367273.jpg"
    }
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          reject(new Error("error"));
        } else resolve(this.data);
      }, 1000);
    });
  }
}
