import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CategoriesScreen() {
  // Datos de tiendas
  const shopsData = [
    {
      id: 1,
      name: "Boutique Femme",
      category: "Mujer",
      image: "https://via.placeholder.com/150",
      address: "Av. Principal 123",
      phone: "555-1234",
      rating: 4.5,
      isOpen: true,
    },
    {
      id: 2,
      name: "Estilo Hombre",
      category: "Hombre",
      image: "https://via.placeholder.com/150",
      address: "Calle Secundaria 456",
      phone: "555-5678",
      rating: 4.2,
      isOpen: false,
    },
    {
      id: 3,
      name: "Kids Paradise",
      category: "Niños",
      image: "https://via.placeholder.com/150",
      address: "Boulevard Infantil 789",
      phone: "555-9012",
      rating: 4.7,
      isOpen: true,
    },
  ];

  // Estado y categorías
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const categories = ['Todos', 'Mujer', 'Hombre', 'Niños', 'Deportivo', 'Calzado', 'Accesorios'];

  // Filtrar tiendas
  const filteredShops = selectedCategory === 'Todos' 
    ? shopsData 
    : shopsData.filter(shop => shop.category === selectedCategory);

  return (
       <View style={styles.container}>
      {/* Contenedor del filtro con altura fija */}
      <View style={styles.filterOuterContainer}>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollContainer}
          style={styles.filterScrollView}
        >
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              style={[
                styles.filterButton,
                selectedCategory === category && styles.activeFilter
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[
                styles.filterText,
                selectedCategory === category && styles.activeText
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Lista de tiendas */}
      <FlatList
        data={filteredShops}
        renderItem={({ item }) => <ShopCard shop={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

// Componente ShopCard separado para mejor legibilidad
const ShopCard = ({ shop }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: shop.image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name}>{shop.name}</Text>
      <View style={styles.detailRow}>
        <Ionicons name="location" size={14} color="#666" />
        <Text style={styles.detailText}>{shop.address}</Text>
      </View>
      <View style={styles.detailRow}>
        <Ionicons name="call" size={14} color="#666" />
        <Text style={styles.detailText}>{shop.phone}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.rating}>
          <Ionicons name="star" size={16} color="gold" />
          <Text>{shop.rating}</Text>
        </View>
        <Text style={[styles.status, shop.isOpen ? styles.open : styles.closed]}>
          {shop.isOpen ? 'Abierto' : 'Cerrado'}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

// Estilos optimizados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  filterContainer: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0'
  },
  filterOuterContainer: {
    height: 60, // Altura fija para el contenedor padre
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0',
  },
  filterScrollView:{
    flexGrow: 0,
    paddingVertical: 10
  },
  filterScrollContainer:{
    alignItems: 'center',
    paddingHorizontal: 10
  },
  filterButton: {
    height: 36, // Altura fija
    minWidth: 80, // Ancho mínimo
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 18,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  activeFilter: {
    backgroundColor: 'tomato',
    borderColor: 'tomato',
  },
  filterText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  activeText: {
    color: 'white',
    fontWeight: '600',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  detailText: {
    marginLeft: 5,
    color: '#666',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  open: {
    color: 'green',
  },
  closed: {
    color: 'red',
  },
  listContent: {
    paddingBottom: 20,
  },
});