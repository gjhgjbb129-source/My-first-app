import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
  Text,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export const CameraScreen: React.FC = () => {
  const cameraRef = useRef<RNCamera>(null);
  const navigation = useNavigation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [flashMode, setFlashMode] = useState<'on' | 'off' | 'auto'>('auto');

  const handleTakePicture = async () => {
    if (cameraRef.current && !isProcessing) {
      try {
        setIsProcessing(true);
        const options = {
          quality: 0.9,
          base64: false,
          skipProcessing: false,
        };
        const data = await cameraRef.current.takePictureAsync(options);
        navigation.navigate('Analysis', { imageUri: data.uri });
      } catch (error) {
        console.error('Error taking picture:', error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const toggleFlash = () => {
    setFlashMode((prev) => {
      if (prev === 'on') return 'off';
      if (prev === 'off') return 'auto';
      return 'on';
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode[flashMode.toUpperCase()]}
        captureAudio={false}
      >
        <View style={styles.frameContainer}>
          <View style={styles.frame} />
        </View>

        <View style={styles.topControls}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="close" size={28} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomControls}>
          <TouchableOpacity
            style={styles.flashButton}
            onPress={toggleFlash}
          >
            <Icon
              name={flashMode === 'on' ? 'flash' : 'flash-off'}
              size={24}
              color="#FFF"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.captureButton}
            onPress={handleTakePicture}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <ActivityIndicator size="large" color="#1E88E5" />
            ) : (
              <View style={styles.captureButtonInner} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.galleryButton}
            onPress={() => navigation.navigate('Gallery')}
          >
            <Icon name="image" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </RNCamera>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  frameContainer: {
    position: 'absolute',
    top: '15%',
    left: '10%',
    width: width * 0.8,
    height: height * 0.5,
    borderRadius: 20,
  },
  frame: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#1E88E5',
    opacity: 0.6,
  },
  topControls: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  closeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomControls: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  flashButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1E88E5',
  },
  galleryButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
