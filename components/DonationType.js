import React from 'react';
import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import styles from './Styles';

export default function DonationType() {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <Image
          style={styles.arrow}
          source={require('../components/images/arrow.png')}
        />
        <Text style={styles.arrowHeaderText}>Тип сбора</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.optButton}>
            <Image
              style={styles.buttonIcon}
              source={require('../components/images/target.png')}
            />
            <Text style={styles.optButtonText}>Целевой сбор</Text>
            <Text style={styles.optButtonNote}>
              Когда есть определённая цель
            </Text>
            <Image
              style={styles.forwardIcon}
              source={require('../components/images/forward.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optButton}>
            <Image
              style={styles.buttonIcon}
              source={require('../components/images/calendar.png')}
            />
            <Text style={styles.optButtonText}>Регулярный сбор</Text>
            <Text style={styles.optButtonNote}>
              Если помощь нужна ежемесячно
            </Text>
            <Image
              style={styles.forwardIcon}
              source={require('../components/images/forward.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
