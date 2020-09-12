import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
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
        <Text style={styles.arrowHeaderText}>Основное</Text>
      </View>
      <ScrollView style={{marginLeft: 12, marginRight: 12}}>
        <View style={styles.dashedBorder}>
          <Image
            style={{
              borderRadius: 10,
              width: Dimensions.get('window').width - 24,
            }}
            source={require('../components/images/Photo.png')}
          />
        </View>
        <Text style={styles.formText}>Название сбора</Text>
        <TextInput
          style={styles.inputForm}
          placeholder={' Название сбора'}
          placeholderTextColor={'#818C99'}
          value={'Добряши помогают котикам'}
        />
        <Text style={styles.formText}>Сумма, ₽</Text>
        <TextInput
          style={styles.inputForm}
          placeholder={' Сколько нужно собрать?'}
          placeholderTextColor={'#818C99'}
          keyboardType="numeric"
          value={'10 000 ₽'}
        />
        <Text style={styles.formText}>Цель</Text>
        <TextInput
          style={styles.inputForm}
          placeholder={' Например, лечение человека'}
          placeholderTextColor={'#818C99'}
          value={'Корм и уход для котиков в приюте'}
        />
        <Text style={styles.formText}>Описание</Text>
        <TextInput
          style={styles.inputForm}
          multiline
          numberOfLines={2}
          placeholder={' На что пойдут деньги?\n Как они кому-то помогут?'}
          placeholderTextColor={'#818C99'}
          value={'Привет-привет! \n...'}
        />
        <Text style={styles.formText}>Куда получать деньги</Text>
        <TextInput
          style={styles.inputForm}
          placeholderTextColor={'#818C99'}
          value={'Счёт VK Pay · 1234'}
        />
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.buttonText}>Далее</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
