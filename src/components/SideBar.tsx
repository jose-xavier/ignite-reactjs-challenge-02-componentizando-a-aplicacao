
import { UseMovies } from "../MoviesContext";
import { Button } from "./Button";

export function SideBar() {
  // Complete aqui
  const {genres, handleClickButton, selectedGenreId} = UseMovies();

  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>
  
    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  
  </nav>
  )
}