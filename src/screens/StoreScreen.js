// StoreScreen.js
import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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

  // Componente de encabezado para el FlatList
  const ListHeader = () => (
    <View style={styles.profileSection}>
      <Image
        source={{
          uri: store.coverImage || "https://via.placeholder.com/350x200",
        }}
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
      <Text style={styles.sectionTitle}>
        Catálogo ({store.products?.length || 0})
      </Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={store.products || []}
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
        contentContainerStyle={[styles.container, {paddingBottom: 20}]}
        style={{flex:1}}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
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
  productsSection: {
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  productsRow: {
    justifyContent: "space-between",
    //marginBottom: 10,
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
});
