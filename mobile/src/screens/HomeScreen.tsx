import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
  Animated,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const scaleAnim = new Animated.Value(0.8);

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleScanPress = () => {
    navigation.navigate('Camera');
  };

  const popularFabrics = [
    { name: 'Cotton', icon: 'leaf', color: '#E8D5C4' },
    { name: 'Polyester', icon: 'flash', color: '#B8D4E8' },
    { name: 'Silk', icon: 'sparkles', color: '#F4D5E8' },
    { name: 'Wool', icon: 'sheep', color: '#D5E8C4' },
  ];

  const tips = [
    'Always check fabric care labels before washing',
    'Natural fabrics breathe better than synthetic ones',
    'Delicate fabrics require special care',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome Back</Text>
          <Text style={styles.subGreeting}>Scan and analyze your fabrics</Text>
        </View>

        <View style={styles.scanButtonContainer}>
          <Animated.View
            style={[
              styles.scanButton,
              {
                transform: [{ scale: scaleAnim }],
              },
            ]}
          >
            <TouchableOpacity
              style={styles.scanButtonTouchable}
              onPress={handleScanPress}
              activeOpacity={0.8}
            >
              <Icon name="camera-iris" size={60} color="#FFF" />
              <Text style={styles.scanButtonText}>Start Scanning</Text>
              <Text style={styles.scanButtonSubtext}>Take or upload a photo</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Fabrics</Text>
          <View style={styles.fabricGrid}>
            {popularFabrics.map((fabric, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.fabricCard, { backgroundColor: fabric.color }]}
              >
                <Icon name={fabric.icon} size={32} color="#000" />
                <Text style={styles.fabricName}>{fabric.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daily Tips</Text>
          {tips.map((tip, index) => (
            <View key={index} style={styles.tipCard}>
              <Icon name="lightbulb" size={20} color="#FFD700" />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
  },
  scanButtonContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  scanButton: {
    borderRadius: 24,
    overflow: 'hidden',
  },
  scanButtonTouchable: {
    backgroundColor: '#1E88E5',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    shadowColor: '#1E88E5',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  scanButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 12,
  },
  scanButtonSubtext: {
    fontSize: 12,
    color: '#E3F2FD',
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  fabricGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  fabricCard: {
    width: '48%',
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  fabricName: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 8,
    color: '#000',
  },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  tipText: {
    fontSize: 12,
    color: '#333',
    marginLeft: 12,
    flex: 1,
  },
});
