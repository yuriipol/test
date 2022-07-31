import axios from 'axios';

//созаем и экспортируем класс по дефолту
export default class MoviesSerch {
  //объявляем приватные переменные

  #BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
  #API_KEY = 'tHsmdTBh0voHlTmqoRDalOWmjrFF8TiX';
  //создаем конструктор и обьявляем перемменные
  constructor() {
    this.searchQuery = '';
    // this.searchQueryCountry = null;
    // this.page = 1;
    // this.size = 16;
    // this.serchId = '';
  }

  //создаем метод (делаем его асинхронным), с помощью которого будем делать запросы на сервер
  async bestMoviesSerch() {
    //с помощью бибиотеки axios, делаем запрос, в котором 2-м аргументом прокидываем параметры запроса
    const request = await axios.get(
      `${this.#BASE_URL}?query=${this.searchQuery}&api-key=${this.#API_KEY}`
    );
    return request;
  }

  //геттер и сеттер нужного значения query
  get query() {
    return this.searchQuery;
  }
  set query(newquery) {
    this.searchQuery = newquery;
  }
}
