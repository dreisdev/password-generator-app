import React from 'react';
import { Text, Image } from 'react-native';
import batLogo from '../../../assets/pictures/bat-logo.png';

import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
    <>
    <Text style={styles.title}>
        BAT PASS GENERATOR
        </Text>
        <Image 
        source={batLogo} 
        style={{
          resizeMode:'contain',
          height:180,
        }} 
        />
    </>
  );
}