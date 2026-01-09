import MovieCard from "./MovieCard";
import { ScrollView, Text } from "react-native";

export default function MovieList(props) {
  return (
    <>
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: 500,
        }}
      >
        Movie Catalog
      </Text>

      <ScrollView style={{marginBottom: 50}}>
        {props.movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            imageUrl={movie.imageUrl}
            year={movie.releaseYear}
            onPress={props.moviePressHandler}
          />
        ))}
      </ScrollView>
    </>
  );
}
