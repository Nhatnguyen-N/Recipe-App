import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { TransformedMeal } from "@/types/meal.types";

const FavoritesScreen = () => {
  const { signOut } = useClerk();
  const { user } = useUser();
  const [favoriteRecipes, setFavoriteRecipes] = useState<TransformedMeal[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const response = await fetch(``);
      } catch (error) {}
    };

    loadFavorites();
  }, []);
  return (
    <View>
      <Text>fovorites</Text>
    </View>
  );
};

export default FavoritesScreen;
