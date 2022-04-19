import React,{useState} from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Trailer from './components/Trailer';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const [movies, setMovies] = useState([
    
    
    {
      id:1,
      title: "The Vow",
      Description:
        "A car accident puts Paige in a coma, and when she wakes up with severe memory loss, her husband Leo works to win her heart again.",
      rating: 6.8,
      
      image:"https://m.media-amazon.com/images/M/MV5BMjE1OTU5MjU0N15BMl5BanBnXkFtZTcwMzI3OTU5Ng@@._V1_FMjpg_UX1000_.jpg",
      link: "https://www.youtube.com/embed/PcL24s-S6ns",
      categorie:'drame'
      
    },
    {
      id:2,
    title: "Fury",
    Description:
      "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
    rating: 7.6,
    
    image:
        "https://img3.cdn.cinoche.com/images/05df333d8640fba563f929bf855244b2.jpg",
      link: "https://www.youtube.com/embed/DNHuK1rteF4",
      categorie:'action',
    },
    {
      id:3,
      title: "The Godfather",
      Description:
        "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      rating: 9.2,
      
      image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      link: "https://www.youtube.com/embed/UaVTIH8mujA",
      categorie:'action'
    },
  
    {
    id:4,
    title: "Troy",
    image:
      'https://d3tvwjfge35btc.cloudfront.net/Assets/02/074/L_p0001707402.jpg',
    rating: 7.3,
    
    
    Description:
      "An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved.",
      link: "https://www.youtube.com/embed/znTLzRJimeY",
      categorie:'action'
    },
    {
    id:5,
    title: 'Gladiator',
    image:
      'https://fr.web.img6.acsta.net/medias/nmedia/18/68/64/41/19254510.jpg',
    rating: 8.5,
    Description:
      'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
      link: "https://www.youtube.com/embed/owK1qxDselE",
    categorie:'action'
    },
    
    {
    id:6,
    title: 'The Equalizer',
    image:
      'https://fr.web.img5.acsta.net/pictures/14/08/28/16/00/452053.jpg',
    rating: 7.2,
    Description:
      'A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters.',
      link: "https://www.youtube.com/embed/VjctHUEmutw",
      categorie:'drame'
    },
    {
    id:7,
    title: 'Equalizer 2',
    image:
      'https://musicart.xboxlive.com/7/c4d45000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    rating: 6.7,
    Description:
      'Robert McCall serves an unflinching justice for the exploited and oppressed, but how far will he go when that is someone he loves?',
      link: "https://www.youtube.com/embed/HyNJ3UrGk_I",
      categorie:'drame'
    },
    {
    id:8,
    title: 'Taken 3',
    image:
      'https://static.pix-geeks.com/2021/07/taken-3-9441-64721.jpg',
    rating: 6,
    Description:
      " Accused of a ruthless murder he never committed or witnessed, Bryan Mills goes on the run and brings out his particular set of skills to find the true killer and clear his name.",
      link: "https://www.youtube.com/embed/JuU0M2xBasc",
      categorie:'action'
    },
    {
      id:9,
      title: 'The Revenant',
      image:
        'https://fr.web.img5.acsta.net/c_310_420/o_club300-310x420.png_0_se/pictures/15/11/10/09/30/165611.jpg',
      rating: 8.5,
      Description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
      link: "https://www.youtube.com/embed/LoebZZ8K5N0",
      categorie:'drame'
    },
    
    {
      id:10,
      title: 'Braveheart',
      image:
        'https://img-4.linternaute.com/JglYFtzNVRha4dupWB5cGnEGxOA=/1500x/smart/cd83c3cfacfd412bbec073475e111b80/ccmcms-linternaute/11396553.jpg',
      rating: 8.5,
      Description: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
      link: "https://www.youtube.com/embed/1NJO0jxBtMo",
      categorie:'action'
    }
  ])
  
  const [search, setSearch] = useState("");
  


  /* get what we type in search box*/ 
  
  const searchMovie = (event) => {
    setSearch(event.target.value);
  }

  
  /*create a new array for the new movie */
  
  const handelAdd = (newMovie) => {
    setMovies([...movies,newMovie])
    
  }
  /*Filter movie list by id as a primairy key*/
  
  const deleteHAndeler = (ID) => {
    setMovies(movies.filter((e) => e.id !== ID));
  };

  
  /* Sort by Title of movies*/ 
  const sortHandler = () => {

   setMovies ([...movies].sort((a, b) => a.title > b.title ? 1 : -1))
  }
  /*Sort by Rating Descendant*/
 const sortByRateDown = () => {

  setMovies ([...movies].sort((a, b) => b.rating - a.rating))
 }
  /*Sort by Rating Ascendant*/
 const sortByRateUp = () => {

  setMovies ([...movies].sort((a, b) => a.rating - b.rating))
 }
 
  
  return (
       
      <div className='container-fluid'>
      <div className='row'>     
        {/* Nav bar*/}
        <Filter searchMovie={searchMovie} />
        
        {/* Router*/ }
         <Routes>
         <Route path="/" element={<MovieList movies={movies}  search={search} deleteHAndeler={deleteHAndeler}  searchMovie={searchMovie} sortHandler={sortHandler} sortByRateUp={sortByRateUp} sortByRateDown={sortByRateDown} />} />
         <Route path="add" element={<AddMovie handelAdd={handelAdd}  />} />
         <Route path="trailer/:IdMovie" element={<Trailer movies={movies} />} />
         </Routes>
      </div>
      </div>
      
  ) 
}

export default App;
