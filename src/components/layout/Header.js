import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function Header({ title, searchQuery, onSearchChange }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.searchBar}>
        <TextInput 
          placeholder="Buscar tiendas..." 
          style={styles.input} 
          value={searchQuery}
          onChangeText={onSearchChange}
          />
        {searchQuery ? (
          <TouchableOpacity 
            onPress={() => onSearchChange('')}
            style={styles.clearButton}
            hitSlop={{top:10, bottom:10, left:10, right:10}}
          >
            <Ionicons name="close-circle" size={20} color="gray" />
          </TouchableOpacity>
        ) : (
          <Ionicons name="search" size={20} color="gray" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
  clearButton:{
    marginLeft: 5, 
    padding: 3
  }
});