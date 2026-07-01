import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const scaleAnim = new Animated.Value(0);
  const opacityAnim = new Animated.Value(1);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.delay(1500),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onFinish();
    });
  }, [scaleAnim, opacityAnim, onFinish]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: opacityAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <View style={styles.scannerFrame}>
        <View style={styles.scanLines} />
        <Animated.Text style={styles.sparkle}>✨</Animated.Text>
      </View>
      <Animated.Text style={styles.appName}>FabricLens AI</Animated.Text>
      <Animated.Text style={styles.tagline}>Know Your Clothes Before You Wear Them</Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  scannerFrame: {
    width: 120,
    height: 120,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: '#00D4FF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    shadowColor: '#00D4FF',
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 20,
    marginBottom: 40,
  },
  scanLines: {
    width: '80%',
    height: 2,
    backgroundColor: '#00D4FF',
    marginBottom: 8,
  },
  sparkle: {
    fontSize: 32,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    color: '#B0B0B0',
    fontStyle: 'italic',
  },
});
