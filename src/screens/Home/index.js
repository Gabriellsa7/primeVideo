import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieThenWheel from "../../assets/movies/the_wheel_of_time.png";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MoviesCard } from "../../components/MovieCard";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";
export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
        <Image style={styles.amazonLogoImg} source={AmazonLogo} />
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.movieImageThumbnail}>
        <Image style={styles.movieImage} source={MovieThenWheel} />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentMovies}
      >
        <Text style={styles.movieText}>Continue Watching</Text>

        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.movieText}>Continue Watching</Text>

        <FlatList
          data={MOVIESCRIME}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.movieText}>Continue Watching</Text>

        <FlatList
          data={MOVIESWATCH}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232F3E",
    flex: 1,
    alignItems: "flex-start",
  },

  header: {
    width: "100%",
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
  },

  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 15,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFF",
  },

  movieText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    padding: 15,
  },

  movieImageThumbnail: {
    width: "100%",
    alignItems: "center",
  },

  contentList: {
    paddingLeft: 18,
    paddingRight: 30,
  },

  contentMovies: {},
});
