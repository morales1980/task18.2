var movies = [
  {
    id: '1',
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    poster: 'img/harry.jpg'
  },
  {
    id: '2',
    title: 'Król lew',
    desc: 'Film o lwie',
    poster: 'img/lew.jpg'
  },
  {
    id: '3',
    title: 'Kasyno',
    desc: 'Film o gangsterach',
    poster: 'img/kasyno.jpg'
  },
  {
    id: '4',
    title: 'Śmierć w Wenecji',
    desc: 'Film o facecie w lódce',
    poster: 'img/wenecja.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id}, React.createElement('h2', {}, movie.title), React.createElement('p', {}, movie.desc), React.createElement('img', {src: movie.poster}));
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
