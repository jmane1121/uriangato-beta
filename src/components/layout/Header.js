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
            <Ionicons name="close-circle" size={18} color="gray" />
          </TouchableOpacity>
        ) : (
          <Ionicons name="search" size={18} color="gray" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12, // Reducido de 30
    paddingHorizontal: 15, // Reducido de 30
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e0e0e0", // Color más sutil
  },
  title: {
    fontSize: 18, // Reducido de 20
    fontWeight: "bold",
    marginBottom: 8, // Reducido de 10
    paddingTop: 0 // Eliminado espacio extra
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8, // Bordes ligeramente más pequeños
    paddingHorizontal: 10,
    height: 38, // Altura fija más compacta
  },
  input: {
    flex: 1,
    paddingVertical: 6, // Reducido de 8
    fontSize: 14, // Texto ligeramente más pequeño
  },
  clearButton: {
    marginLeft: 5, 
    padding: 2 // Reducido de 3
  }
});