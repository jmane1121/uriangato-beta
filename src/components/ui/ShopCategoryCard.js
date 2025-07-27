import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expor/vector-icons';


export default function ShopCategoryCard({ shop }) {
  return (
    <TouchableOpacity style={styles.card}> 
        <Image source={{ uri: shop.image }} style={styles.image} />
        <View style={styles.info}>
            <Text style={styles.name}>{shop.name}</Text>
            <View style={styles.details}>
                <Ionicons name="location" size={14} color="#666" />
                <Text style={styles.detailText}>{shop.addres}</Text>
            </View>
            <View style={styles.details}>
                <Ionicons name="call" size={14} color="#666" />
                <Text style={styles.detailText}>{shop.phone}</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.rating}>
                    <Ionicons name="star" size={16} color="gold" />
                    <Text style={styles.ratingText}>{shop.rating}</Text>
                </View>
                <Text style={[
                    style.status,
                    shop.isOpen ? styles.open : styles.closed
                ]}>
                    {shop.isOpen ? 'Abierto' : 'Cerrado'}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 10,
        overflow: 'hidden',
        elevation: 2,
    },
    image:{
        width: '100%',
        height: 150,
    },
    info:{
        padding: 10,
    },
    name:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3
    },
    detailText:{
        marginLeft: 5,
        color: '#666',
        fontSize: 14,
    },
    footer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    rating:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingText:{
        marginLeft: 5,
    },
    status:{
        fontWeight: 'bold',
        fontSize: 14
    },
    open:{
        color: 'green',
    },
    closed: {
        color: 'red'
    }
});