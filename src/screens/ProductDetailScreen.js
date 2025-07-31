import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  FlatList,
  Dimensions,
  TextInput,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { mockStores } from '../data/mockStores';

const { width } = Dimensions.get('window');

const ProductDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { productId, storeId } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [comment, setComment] = useState('');

  // Encontrar la tienda y producto
  const store = mockStores.find(s => s.id === storeId);
  const product = store?.products.find(p => p.id === productId);

  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text>Producto no encontrado</Text>
      </View>
    );
  }

  // Función para manejar añadir al carrito
  const handleAddToCart = () => {
    // Lógica para añadir al carrito
    alert(`Añadido al carrito: ${product.name} x${quantity}`);
  };

  // Función para manejar compra
  const handleBuyNow = () => {
    // Lógica para comprar ahora
    alert(`Comprando: ${product.name} x${quantity}`);
  };

  // Función para enviar comentario
  const handleSubmitComment = () => {
    if (comment.trim()) {
      // Lógica para enviar comentario
      alert(`Comentario enviado: ${comment}`);
      setComment('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Galería de imágenes */}
        <FlatList
          horizontal
          pagingEnabled
          data={product.images || [product.image]}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.productImage} />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />

        {/* Información del producto */}
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.storeName}>Vendido por: {store.name}</Text>
          
          <View style={styles.priceRatingContainer}>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={18} color="#FFD700" />
              <Text style={styles.ratingText}>{product.rating}</Text>
            </View>
          </View>

          {/* Características */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Características</Text>
            {product.features?.map((feature, index) => (
              <Text key={index} style={styles.featureText}>• {feature}</Text>
            ))}
          </View>

          {/* Selección de talla */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Selecciona tu talla</Text>
            <View style={styles.sizeContainer}>
              {product.sizes?.map(size => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.selectedSizeButton
                  ]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text style={[
                    styles.sizeText,
                    selectedSize === size && styles.selectedSizeText
                  ]}>
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Selección de color */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Selecciona color</Text>
            <View style={styles.colorContainer}>
              {product.colors?.map(color => (
                <TouchableOpacity
                  key={color}
                  style={[
                    styles.colorButton,
                    selectedColor === color && styles.selectedColorButton,
                    { backgroundColor: getColorHex(color) }
                  ]}
                  onPress={() => setSelectedColor(color)}
                />
              ))}
            </View>
          </View>

          {/* Disponibilidad */}
          <View style={styles.availabilityContainer}>
            <Ionicons 
              name={product.stock > 0 ? "checkmark-circle" : "close-circle"} 
              size={20} 
              color={product.stock > 0 ? "#4CAF50" : "#F44336"} 
            />
            <Text style={styles.availabilityText}>
              {product.stock > 0 ? `Disponible (${product.stock} unidades)` : "Agotado"}
            </Text>
          </View>
        </View>

        {/* Sección de compra */}
        <View style={styles.purchaseContainer}>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityLabel}>Cantidad:</Text>
            <View style={styles.quantitySelector}>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={() => setQuantity(prev => Math.max(1, prev - 1))}
                disabled={quantity <= 1}
              >
                <Ionicons name="remove" size={20} color={quantity <= 1 ? "#CCC" : "#333"} />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={() => setQuantity(prev => prev + 1)}
                disabled={quantity >= product.stock}
              >
                <Ionicons name="add" size={20} color={quantity >= product.stock ? "#CCC" : "#333"} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalPrice}>${(product.price * quantity).toFixed(2)}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.actionButton, styles.addToCartButton]}
              onPress={handleAddToCart}
              disabled={product.stock <= 0}
            >
              <Text style={styles.buttonText}>Añadir al carrito</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.actionButton, styles.buyButton]}
              onPress={handleBuyNow}
              disabled={product.stock <= 0}
            >
              <Text style={styles.buttonText}>Comprar ahora</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección de comentarios */}
        <View style={styles.commentsContainer}>
          <Text style={styles.sectionTitle}>Opiniones de clientes</Text>
          
          {product.reviews?.length > 0 ? (
            product.reviews.map(review => (
              <View key={review.id} style={styles.reviewCard}>
                <Text style={styles.reviewUser}>{review.user}</Text>
                <View style={styles.reviewRating}>
                  {[...Array(5)].map((_, i) => (
                    <Ionicons 
                      key={i} 
                      name={i < review.rating ? "star" : "star-outline"} 
                      size={16} 
                      color="#FFD700" 
                    />
                  ))}
                </View>
                <Text style={styles.reviewText}>{review.comment}</Text>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noReviewsText}>No hay opiniones aún</Text>
          )}

          {/* Formulario para nuevo comentario */}
          <View style={styles.commentForm}>
            <Text style={styles.commentTitle}>Deja tu opinión</Text>
            <TextInput
              style={styles.commentInput}
              placeholder="Escribe tu comentario..."
              value={comment}
              onChangeText={setComment}
              multiline
              numberOfLines={4}
            />
            <TouchableOpacity 
              style={styles.submitCommentButton}
              onPress={handleSubmitComment}
              disabled={!comment.trim()}
            >
              <Text style={styles.submitCommentText}>Enviar comentario</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Función auxiliar para colores
const getColorHex = (colorName) => {
  const colors = {
    "Negro": "#000000",
    "Blanco": "#FFFFFF",
    "Azul": "#0000FF",
    "Rojo": "#FF0000",
    "Verde": "#00FF00",
    "Azul marino": "#000080",
    "Beige": "#F5F5DC",
    "Gris": "#808080",
    // Añade más colores según necesites
  };
  return colors[colorName] || "#CCCCCC";
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  productImage: {
    width: width,
    height: 350,
    resizeMode: 'contain'
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  storeName: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15
  },
  priceRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E53935'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  featureText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555'
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  sizeButton: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10
  },
  selectedSizeButton: {
    borderColor: '#E53935',
    backgroundColor: 'rgba(229, 57, 53, 0.1)'
  },
  sizeText: {
    fontSize: 16
  },
  selectedSizeText: {
    color: '#E53935',
    fontWeight: 'bold'
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DDD'
  },
  selectedColorButton: {
    borderWidth: 2,
    borderColor: '#E53935'
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  availabilityText: {
    marginLeft: 5,
    fontSize: 14
  },
  purchaseContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  quantityLabel: {
    fontSize: 16,
    fontWeight: '500'
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5
  },
  quantityText: {
    width: 60,
    textAlign: 'center',
    fontSize: 18
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEE'
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E53935'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actionButton: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addToCartButton: {
    backgroundColor: '#333',
    marginRight: 10
  },
  buyButton: {
    backgroundColor: '#E53935'
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  commentsContainer: {
    padding: 20,
    backgroundColor: '#FFF'
  },
  reviewCard: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE'
  },
  reviewUser: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  reviewRating: {
    flexDirection: 'row',
    marginBottom: 5
  },
  reviewText: {
    color: '#555',
    marginBottom: 5
  },
  reviewDate: {
    fontSize: 12,
    color: '#999'
  },
  noReviewsText: {
    color: '#999',
    textAlign: 'center',
    marginVertical: 20
  },
  commentForm: {
    marginTop: 20
  },
  commentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    minHeight: 100,
    marginBottom: 10,
    textAlignVertical: 'top'
  },
  submitCommentButton: {
    backgroundColor: '#E53935',
    padding: 15,
    borderRadius: 5
  },
  submitCommentText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProductDetailScreen;