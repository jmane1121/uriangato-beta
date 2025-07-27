import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CartScreen from "../screens/CartScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AppNavigator(){
    return (
        <Tab.Navigator
        screenOptions={({route}) =>({
            tabBarIcon:({color, size})=> {
                let iconName;
                if(route.name === "Home") iconName = "home";
                else if (route.name === "Categories") iconName = "list";
                else if (route.name === "CartScreen") iconName = "cart";
                else if (route.name === "Favorites") iconName = "heart";
                return <Ionicons name={iconName} size={size} color={color}/>;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
        })}
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Categories" component={CategoriesScreen}/>
            <Tab.Screen name="CartScreen" component={CartScreen}/>
            <Tab.Screen name="Favorites" component={FavoritesScreen}/>
        </Tab.Navigator>
    );
}