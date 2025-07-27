import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const FavoritesScreen= () =>{

  //Estado de productos favoritos 
  const [favorites, setFavorites] = useState([
    {
      id: '1', 
      name: 'Vestido Floral',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
      store: 'Zara',
      category: 'Ropa',
      isFavorite: true
    },
    {
      id: '2', 
      name: 'Sneakers vans',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
      store: 'vans',
      category: 'Calzado',
      isFavorite: true
    },
    {
      id: '3', 
      name: 'Chamarra mezclilla',
      price: 59.99,
      image: 'https://via.placeholder.com/150',
      store: 'Guess',
      category: 'Ropa',
      isFavorite: true
    },
    {
      id: '4', 
      name: 'Botas chelsea',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
      store: 'Toro',
      category: 'calzado',
      isFavorite: true
    },
    {
      id: '5', 
      name: 'Botas',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
      store: 'Dr. Martens',
      category: 'Calzado',
      isFavorite: true
    },
  ]); 
    //estado para filtros
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Ropa', 'Calzado', 'Accesorios'];

  //Filtrar productos
  const filteredFavorites = filter === 'Todos' 
  ? favorites 
  : favorites.filter(item => item.category === filter);

  //Eliminar de favoritos 
  const removeFavorite=(id)=>{
    setFavorites(favorites.filter(item => item.id !== id));
  };

  //renderizar cada item
  const renderItem=({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage}/>

      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemStore}>{item.store}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        onPress={() => removeFavorite(item.id)}
        style={styles.favoriteButton}
      >
        <Ionicons name="heart" size={24} color="#ff3b30"/>
      </TouchableOpacity>
    </View>
  );

   // Estilo de sombra compatible con ambos SO
  const shadowStyle = Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    android: {
      elevation: 2,
    },
  });

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Tus favoritos</Text>
      {/* Filtros*/}
      <View style={styles.filterContainer}>
        {categories.map(category=>(
          <TouchableOpacity
            key={category}
            style={[
              styles.filterButton,
              filter === category && styles.activeFilter,
              shadowStyle
            ]}
            onPress={() => setFilter(category)}
          >
            <Text
              style={[
                styles.filterText,
                filter==category && styles.activeFilterText
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
       {filteredFavorites.length > 0 ? (
        <FlatList
          data={filteredFavorites}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          ListFooterComponent={<View style={{ height: 30 }} />}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="heart-outline" size={100} color="#ccc" />
          <Text style={styles.emptyText}>
            {filter === 'Todos' 
              ? 'No tienes favoritos aún' 
              : `No hay favoritos en ${filter}`}
          </Text>
          <Text style={styles.emptySubtext}>
            {filter === 'Todos' 
              ? 'Guarda tus productos favoritos aquí' 
              : 'Explora otras categorías'}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    marginRight: 10,
    marginBottom: 10,
  },
  activeFilter: {
    backgroundColor: '#007bff',
  },
  filterText: {
    color: '#333',
  },
  activeFilterText: {
    color: 'white',
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  itemStore: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2a2a2a',
  },
  favoriteButton: {
    padding: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
    marginTop: 20,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
});

export default FavoritesScreen;