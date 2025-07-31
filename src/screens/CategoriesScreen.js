import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mockStores } from '../data/mockStores';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CategoriesScreen() {
  const navigation = useNavigation();

  // Estado y categorías
  const [selectedType, setSelectedType] = useState('Todos');
  const productTypes = ['Todos', 'Mujer', 'Hombre', 'Niño', 'Niña', 'Unisex'];

  // Filtrar tiendas por tipo de producto
  const filteredStores = selectedType === 'Todos' 
    ? mockStores
    : mockStores.filter(store => store.productType.includes(selectedType));

  // Componente StoreCard actualizado con navegación
  const StoreCard = ({ store }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('StoreScreen', { store })} // Navegación añadida
    >
      <Image source={{ uri: store.coverImage }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{store.name}</Text>
        
        <View style={styles.typeContainer}>
          {store.productType.map((type, index) => (
            <View key={index} style={styles.typeBadge}>
              <Text style={styles.typeText}>{type}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.detailRow}>
          <Ionicons name="location" size={14} color="#666" />
          <Text style={styles.detailText} numberOfLines={1}>{store.address}</Text>
        </View>
        
        <View style={styles.footer}>
          <View style={styles.rating}>
            <Ionicons name="star" size={16} color="gold" />
            <Text>{store.rating}</Text>
          </View>
          <Text style={styles.categoryText}>{store.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
      {/* Filtro horizontal */}
      <View style={styles.filterOuterContainer}>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollContainer}
        >
          {productTypes.map(type => (
            <TouchableOpacity
              key={type}
              style={[
                styles.filterButton,
                selectedType === type && styles.activeFilter
              ]}
              onPress={() => setSelectedType(type)}
            >
              <Text style={[
                styles.filterText,
                selectedType === type && styles.activeText
              ]}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Cuadrícula de 2 columnas */}
      <FlatList
        data={filteredStores}
        renderItem={({ item }) => <StoreCard store={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        style={styles.flatList}
      />
    </View>
    </SafeAreaView>
  );
}

// Estilos (igual que en el código anterior)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
   safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  flatList: {
    flex: 1,
  },
  filterOuterContainer: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0',
  },
  filterScrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  filterButton: {
    height: 36,
    minWidth: 80,
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
  },
  activeText: {
    color: 'white',
    fontWeight: '600',
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    width: '48%',
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  typeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  typeBadge: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 5,
    marginBottom: 5,
  },
  typeText: {
    fontSize: 12,
    color: '#555',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  detailText: {
    marginLeft: 5,
    color: '#666',
    fontSize: 12,
    flexShrink: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
  listContent: {
    paddingBottom: 20,
    paddingTop: 10,
  },
});