import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function ShopCard({ shop }) {
  return (
    <TouchableOpacity style={styles.card}>
        <Image source={{ uri: shop.image }} style={styles.image}/>
        <View style={styles.info}>
            <Text style={styles.name}>{shop.name}</Text>
            <Text style={styles.category}>{shop.category}</Text>
            <View style={styles.rating}>
                <Ionicons name="star" size={16} color="gold"/>
                <Text style={styles.ratingText}>{shop.rating}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  category: {
    color: "gray",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
  },
});