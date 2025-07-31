// StoreScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductCard = ({ product }) => (
  <View style={styles.productCard}>
    <Image
      source={{ uri: product.image || "https://via.placeholder.com/300" }}
      style={styles.productImage}
    />
    <View style={styles.productInfo}>
      <Text style={styles.productName} numberOfLines={2}>
        {product.name}
      </Text>
      <Text style={styles.productPrice}>
        ${product.price?.toFixed(2) || "0.00"}
      </Text>
    </View>
  </View>
);

export default function StoreScreen({ route }) {
  const { store } = route.params;
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [modalVisible, setModalVisible] = useState(false);

  // Asegurar que los productos tengan categorías
  const allProducts = store.products?.map(product => ({
    ...product,
    category: product.category || "Sin categoría"
  })) || [];

  // Extraer categorías únicas
  const categories = ["Todos", ...new Set(allProducts.map(p => p.category))];

  // Filtrar productos
  const filteredProducts = selectedCategory === "Todos" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  // Header con perfil de tienda + filtro
  const ListHeader = () => (
    <View style={styles.profileSection}>
      {/* Sección de perfil de la tienda */}
      <Image
        source={{ uri: store.coverImage || "https://via.placeholder.com/350x200" }}
        style={styles.coverImage}
      />
      <View style={styles.storeInfo}>
        <Image
          source={{ uri: store.logo || "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Text style={styles.storeName}>{store.name}</Text>
        <Text style={styles.storeDescription}>{store.description}</Text>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Ionicons name="location-outline" size={16} color="#555" />
            <Text style={styles.detailText}>
              {store.address || "Dirección no disponible"}
            </Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="time-outline" size={16} color="#555" />
            <Text style={styles.detailText}>
              {store.hours || "Horario no disponible"}
            </Text>
          </View>
        </View>
      </View>
      
      {/* Filtro de categorías */}
      <View style={styles.filterContainer}>
        <Text style={styles.sectionTitle}>
          Catálogo ({filteredProducts.length})
        </Text>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.filterButtonText}>{selectedCategory}</Text>
          <Ionicons name="chevron-down" size={16} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
       <View style={{flex: 1}}>
      <FlatList
        data={filteredProducts}
        ListHeaderComponent={ListHeader}
        numColumns={2}
        columnWrapperStyle={styles.productsRow}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productContainer}
            onPress={() =>
              navigation.navigate("ProductDetail", {
                productId: item.id,
                storeId: store.id,
              })
            }
          >
            <ProductCard product={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
        style={{flex: 1}}
      />

      {/* Modal de filtros */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable 
          style={styles.modalOverlay} 
          onPress={() => setModalVisible(false)}
        />
        <View style={styles.modalContainer}>
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryItem,
                selectedCategory === category && styles.selectedCategory
              ]}
              onPress={() => {
                setSelectedCategory(category);
                setModalVisible(false);
              }}
            >
              <Text style={styles.categoryText}>{category}</Text>
              {selectedCategory === category && (
                <Ionicons name="checkmark" size={16} color="#E53935" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    paddingBottom: 20
  },
   safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  coverImage: {
    width: "100%",
    height: 200,
  },
  storeInfo: {
    padding: 15,
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: -40,
    borderWidth: 3,
    borderColor: "#fff",
  },
  storeName: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  storeDescription: {
    color: "#555",
    marginVertical: 10,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  detailsContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  detailText: {
    marginLeft: 8,
    color: "#555",
    fontSize: 14,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  filterButtonText: {
    marginRight: 5,
    color: '#555',
  },
  productsRow: {
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  productContainer: {
    width: "48%",
    marginBottom: 15
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
    color: "#333",
    height: 40,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E53935",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedCategory: {
    backgroundColor: '#f9f9f9',
  },
  categoryText: {
    fontSize: 16,
  },
});