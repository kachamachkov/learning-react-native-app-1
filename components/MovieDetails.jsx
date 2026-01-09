import { View, Image, Text, Button } from "react-native";

export default function MovieDetails(props) {
  return (
    <View style={{ alignItems: "center", gap: 10 }}>
      <Image
        style={{ borderRadius: 5 }}
        source={{
          uri: props.movie.imageUrl,
          width: 184,
          height: 273,
        }}
      />

      <Text>Title: {props.movie.title}</Text>
      <Text>Year: {props.movie.releaseYear}</Text>
      <Text>Director: {props.movie.director}</Text>
      <Text>Genre: {props.movie.genre.join(', ')}</Text>
      <Text>Duration: {props.movie.duration} minutes</Text>
      <Text>Rating: {props.movie.rating} / 10 ★</Text>


      <Button title="Go Back" onPress={props.onClose} />
    </View>
  );
}
