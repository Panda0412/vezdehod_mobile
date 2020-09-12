import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
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
          <View
            style={{
              width: 186,
              height: 28,
              flexDirection: 'row',
            }}>
            <Image
              style={{margin: 3}}
              source={require('../components/images/gallery.png')}
            />
            <Text style={styles.blueText}>Загрузить обложку</Text>
          </View>
        </View>
        <Text style={styles.formText}>Название сбора</Text>
        <TextInput
          style={styles.inputForm}
          placeholder={' Название сбора'}
          placeholderTextColor={'#818C99'}
        />
        <Text style={styles.formText}>Сумма, ₽</Text>
        <TextInput
          style={styles.inputForm}
          placeholder={' Сколько нужно собрать?'}
          placeholderTextColor={'#818C99'}
          keyboardType="numeric"
        />
        <Text style={styles.formText}>Цель</Text>
        <TextInput
          style={styles.inputForm}
          placeholder={' Например, лечение человека'}
          placeholderTextColor={'#818C99'}
        />
        <Text style={styles.formText}>Описание</Text>
        <TextInput
          style={styles.inputForm}
          multiline
          numberOfLines={2}
          placeholder={' На что пойдут деньги?\n Как они кому-то помогут?'}
          placeholderTextColor={'#818C99'}
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
