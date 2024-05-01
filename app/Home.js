import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lars' Portfolio</Text>
      <Image source={require("./lars-round.png")} style={styles.image}/>
        <Link href="/Projects" asChild>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Projects</Text>
            </Pressable>  
        </Link>
        <Link href="/Skills" asChild>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Skills</Text>
            </Pressable>
        </Link>
        <Link href="/Contact" asChild>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Contact</Text>
            </Pressable>
        </Link>
    </View>
  );
}

