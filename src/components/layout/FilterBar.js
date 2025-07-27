import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FilterBar({ categories, selectedCategory, onSelectCategory }) {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.filterButton,
              selectedCategory === category && styles.selectedButton
            ]}
            onPress={() => onSelectCategory(category)}
          >
            <Text style={[
              styles.filterText,
              selectedCategory === category && styles.selectedText
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0',
  },
  scrollContent: {
    paddingHorizontal: 12,
  },
  filterButton: {
    height: 32, // Altura fija
    minWidth: 80, // Ancho mínimo
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedButton: {
    backgroundColor: 'tomato',
    borderColor: 'tomato',
    // Mantener exactamente las mismas dimensiones
    height: 32,
    minWidth: 80,
    paddingHorizontal: 16,
  },
  filterText: {
    fontSize: 14,
    color: '#333',
    includeFontPadding: false, // Elimina espacio extra alrededor del texto
    textAlign: 'center',
  },
  selectedText: {
    color: 'white',
    fontWeight: '600', // Semi-bold en vez de bold para menos cambio de tamaño
  },
});