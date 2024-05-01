import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import styles from "../styles";

export default function Ulloa() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ulloa Barbershop</Text>
      <Text style={styles.buttonText}>AlejandroUlloaHair.com</Text>
      <View style={styles.imageContainer}>
        <Image source={require("../barbershop.jpg")} style={styles.image} />
      </View>
      <Link push href="/Projects" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Back to Projects</Text>
        </Pressable>
      </Link>
    </View>
  );
}
