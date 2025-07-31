import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import Header from "../components/layout/Header";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { mockStores } from "../data/mockStores";

// Banners
const banners = [
  {
    id: 1,
    image: "https://picsum.photos/id/1062/800/400" ,
    url: "/ofertas",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/1059/800/400",
    url: "/nuevas",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/1033/800/400",
    url: "/blackfriday",
  },
];

// Categorías
const categories = [
  { id: "all", name: "Todas" },
  { id: "Moda casual", name: "Casual" },
  { id: "Economica", name: "Económica" },
  { id: "Juvenil", name: "Juvenil" },
  { id: "Tendencias", name: "Tendencias" },
];

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 30) / 2;

export default function HomeScreen() {
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState(""); // Añade este estado

   // Filtra tiendas por categoría y búsqueda
  const filteredShops = mockStores.filter(shop => {
    const matchesCategory = activeCategory === "all" || shop.category === activeCategory;
    const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         shop.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const ShopCard = ({ shop }) => (
    <TouchableOpacity
      style={[styles.card, { width: CARD_WIDTH }]}
      onPress={() => navigation.navigate("StoreProfile", { store: shop })}
    >
      <Image source={{ uri: shop.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {shop.name}
        </Text>
        <Text style={styles.category} numberOfLines={1}>
          {shop.category}
        </Text>
        <View style={styles.rating}>
          <Ionicons name="star" size={14} color="gold" />
          <Text style={styles.ratingText}>{shop.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            title="Tiendas de Ropa"
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </View>

        {/* Carrusel de banners con altura fija */}
        <View style={styles.bannerWrapper}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {banners.map((banner) => (
              <View key={banner.id} style={styles.bannerSlide}>
                <Image
                  source={{ uri: banner.image }}
                  style={styles.bannerImage}
                  resizeMode="cover"
                />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Filtros de categoría */}
        <View style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterContent}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.filterButton,
                  activeCategory === category.id && styles.activeFilterButton,
                ]}
                onPress={() => setActiveCategory(category.id)}
              >
                <Text
                  style={[
                    styles.filterText,
                    activeCategory === category.id && styles.activeFilterText,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Lista de tiendas */}
        <FlatList
          data={filteredShops}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ShopCard shop={item} />}
          numColumns={2}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  // Banner styles
  bannerWrapper: {
    height: 150, // Altura fija
    marginTop: 10,
  },
  bannerSlide: {
    width: width - 20,
    marginHorizontal: 10,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  // Filter styles
  filterWrapper: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e0e0e0",
  },
  filterContent: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 16,
    backgroundColor: "#f0f0f0",
  },
  activeFilterButton: {
    backgroundColor: "tomato",
  },
  filterText: {
    fontSize: 14,
    color: "#333",
  },
  activeFilterText: {
    color: "#fff",
    fontWeight: "600",
  },
  // List styles
  listContent: {
    padding: 10,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 5,
    elevation: 2,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120,
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
   headerContainer: {
    backgroundColor: 'white',
    zIndex: 1, // Para que quede por encima del contenido
    elevation: 2, // Sombra sutil en Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,

  },
});
