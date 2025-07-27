export default function OffersScreen({ route }) {
  const { banner } = route.params;
  return (
    <View>
      <Text>Oferta especial: {banner.id}</Text>
    </View>
  );
}