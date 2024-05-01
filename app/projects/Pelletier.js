import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import styles from "../styles";

export default function Pelletier() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pelletier Construction Group</Text>
      <Text style={styles.buttonText}>
        https://pelletierconstructiongroup.com/
      </Text>
      <Text style={styles.buttonText}>Product Owner</Text>
      <View style={styles.imageContainer}>
        <Image source={require("../pcg.png")} style={styles.image} />
      </View>
      <Link push href="/Projects" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Back to Projects</Text>
        </Pressable>
      </Link>
    </View>
  );
}
