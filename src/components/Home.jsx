import styles from './Home.module.css';

const DUMMY_MOVIE_LIST = [
  {
    id: 1,
    url: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMzguNksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00362090-heamezcsbr-portrait.jpg',
    name: 'Mission Raniganj',
    rating: 9,
    genres: ['Drama', 'Thriller'],
    duration: 138,
    release_date: '2023-10-06',
    certification: 'UA',
    description: 'Based on one of the world`s largest and most successful Coal Mine Rescue Missions - headed by Akshay kumar and his team to help save trapped miners in the coal mine-inspired by Bharat`s true hero Engineer Jaswant Singh Gill who carried out this edge of the seat rescue in Raniganj on 13th November 1989.',
    languages: ['Hindi']
  },
  {
    id: 2,
    url: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICA2MDQuN0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330424-mccryrbvyf-portrait.jpg',
    name: 'Jawan',
    rating: 8.4,
    genres: ['Action', 'Thriller'],
    duration: 169,
    release_date: '2023-09-07',
    certification: 'UA',
    description: 'A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in society.',
    languages: ['Hindi', 'Tamil', 'Telugu']
  },
  {
    id: 3,
    url: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4xLzEwICA1Ny4zSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00350845-nxeptllcsg-portrait.jpg',
    name: 'Fukrey 3',
    rating: 7.1,
    genres: ['Comedy'],
    duration: 150,
    release_date: '2023-09-28',
    certification: 'UA',
    description: 'Iss baar hoga chamatkaar, straight from Jamnapaar! The Fukras are back with 3X more fukrapanti.',
    languages: ['Hindi']
  },
  {
    id: 4,
    url: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICAzMDIuNEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-pyjceycgfg-portrait.jpg',
    name: 'Gadar 2: The Katha Contiues',
    rating: 8.1,
    genres: ['Drama', 'Action', 'Period'],
    duration: 170,
    release_date: '2023-08-11',
    certification: 'UA',
    description: 'Gadar 2 brings back India`s most loved family of Tara, Sakeena and Jeete; 22 years after its predecessor. Set against the backdrop of Indo-Pakistan war of 1971, Tara Singh, once again, will face every enemy to protect the honor of country and family.',
    languages: ['Hindi']
  },
  {
    id: 5,
    url: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NS43LzEwICAxMC40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365534-bhphrymzvb-portrait.jpg',
    name: 'The Exorcist: Believer',
    rating: 5.7,
    genres: ['Horror', 'Thriller'],
    duration: 119,
    release_date: '2023-10-06',
    certification: 'A',
    description: 'Since the death of his pregnant wife in a Haitian earthquake 12 years ago, Victor Fielding has raised their daughter, Angela on his own. But when Angela and her friend Katherine, disappear in the woods, only to return three days later with no memory of what happened to them, it unleashes a chain of events that will force Victor to confront the nadir of evil. In his terror and desperation, seek out the only person alive who has witnessed anything like it before: Chris MacNeil.',
    languages: ['English', 'Hindi', 'Tamil', 'Telugu']
  }
]

const Home = () => {
  return (
    <main className={styles['home-content']}>
      {DUMMY_MOVIE_LIST.map(movie => (
        <div className={styles['movie-card']} key={movie.id}>
          <img src={movie.url} />
          <p className={styles['movie-title']}>{movie.name}</p>
          {movie.genres.map(genre => (
            <span key={genre}>{genre} </span>
          ))}
          <p>{movie.rating}/10</p>        
        </div>
      ))}
      
    </main>
  )
}

export default Home