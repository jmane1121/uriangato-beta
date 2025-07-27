import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import Header from "../components/layout/Header";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


//banners 
const banners = [
  { id: 1, image: "https://via.placeholder.com/400x200?text=Oferta+50%", url: "/ofertas" },
  { id: 2, image: "https://via.placeholder.com/400x200?text=Nuevas+Tiendas", url: "/nuevas" },
  { id: 3, image: "https://via.placeholder.com/400x200?text=Black+Friday", url: "/blackfriday" },
];
// categorias
const categories =[
  {id: "all", name: "Todas"},
  {id: "Moda casual", name: "Casual"},
  {id: "Ropa económica", name: "Económica"},
  {id: "Estilo juvenil", name: "Juvenil"},
  {id: "all", name: "Tendencias"},
]
// Datos de ejemplo (tiendas de ropa)
const shops = [
  {
    id: 1,
    name: "Zara",
    rating: 4.5,
    category: "Moda casual",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "H&M",
    rating: 4.2,
    category: "Ropa económica",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Pull & Bear",
    rating: 4.0,
    category: "Estilo juvenil",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Bershka",
    rating: 3.9,
    category: "Tendencias",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Tommy",
    rating: 4.0,
    category: "Estilo juvenil",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Guess",
    rating: 3.9,
    category: "Tendencias",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Gucci",
    rating: 4.0,
    category: "Estilo juvenil",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Louis Vuitton",
    rating: 3.9,
    category: "Tendencias",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Loro Pianna",
    rating: 4.0,
    category: "Estilo juvenil",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Bershka",
    rating: 3.9,
    category: "Tendencias",
    image: "https://via.placeholder.com/150",
  },
  
  
];

// Ancho de la pantalla para calcular el tamaño de las cards
const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 30) / 2; // 2 columnas con margen

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title="Tiendas de Ropa" />
      
      {/* FlatList con grid de 2 columnas */}
      <FlatList
        data={shops}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ShopCard shop={item} cardWidth={CARD_WIDTH} />}
        numColumns={2} // 👈 Esto hace el grid
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// Componente ShopCard ajustado para el grid
const ShopCard = ({ shop, cardWidth }) => (
  <TouchableOpacity 
    style={[styles.card, { width: cardWidth }]} 
    activeOpacity={0.8}
  >
    <Image source={{ uri: shop.image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name} numberOfLines={1}>{shop.name}</Text>
      <Text style={styles.category} numberOfLines={1}>{shop.category}</Text>
      <View style={styles.rating}>
        <Ionicons name="star" size={14} color="gold" />
        <Text style={styles.ratingText}>{shop.rating}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

// Estilos optimizados para el grid
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  list: {
    padding: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 5, // Margen entre cards
    elevation: 2,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120, // Altura fija para uniformidad
    resizeMode: "cover",
  },
  info: {
    padding: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  category: {
    fontSize: 12,
    color: "gray",
    marginBottom: 4,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 4,
  },
});