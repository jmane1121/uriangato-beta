import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  { id: "all", name: "Todas", icon: "apps" },
  { id: "Moda casual", name: "Casual", icon: "shirt-outline" },
  { id: "Ropa económica", name: "Económica", icon: "pricetag-outline" },
  { id: "Estilo juvenil", name: "Juvenil", icon: "happy-outline" },
  { id: "Tendencias", name: "Trendy", icon: "trending-up-outline" },
];

export default function FilterButtons() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const animatedValues = React.useRef(
    categories.reduce((acc, category) => {
      acc[category.id] = new Animated.Value(1);
      return acc;
    }, {})
  ).current;

  const handlePress = (categoryId) => {
    setSelectedCategory(categoryId);
    
    // Animación de "pulse" sutil
    categories.forEach(cat => {
      Animated.sequence([
        Animated.timing(animatedValues[cat.id], {
          toValue: cat.id === categoryId ? 0.95 : 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.spring(animatedValues[cat.id], {
          toValue: 1,
          friction: 3,
          useNativeDriver: true,
        })
      ]).start();
    });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category) => (
        <Animated.View
          key={category.id}
          style={[
            styles.button,
            selectedCategory === category.id && styles.selectedButton,
            { transform: [{ scale: animatedValues[category.id] }] }
          ]}
        >
          <TouchableOpacity
            onPress={() => handlePress(category.id)}
            style={styles.touchable}
            activeOpacity={0.7}
          >
            <Ionicons
              name={category.icon}
              size={18}
              color={selectedCategory === category.id ? "#fff" : "#555"}
              style={styles.icon}
            />
            <Text style={[
              styles.text,
              selectedCategory === category.id && styles.selectedText
            ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 60, // Altura fija del contenedor
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginRight: 10,
    height: 40, // Altura fija
    minWidth: 90, // Ancho mínimo consistente
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedButton: {
    backgroundColor: '#ff3a4a',
    shadowColor: '#ff3a4a',
    shadowOpacity: 0.2,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: '#555',
    fontSize: 14,
    fontWeight: '500',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '600',
  },
});