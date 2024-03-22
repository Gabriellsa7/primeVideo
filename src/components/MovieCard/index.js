import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export const MoviesCard = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <Image style={styles.img} source={props.movieURL} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    marginRight: 20,
  },
});
