import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import theme from '../constants/theme';
import {useForm} from 'react-hook-form';
import {InputField, PrimaryButton, SecondaryHeader} from '../components';
import PrimaryHeader from '../components/Headers/PrimaryHeader';
import Icon from '../constants/Icon';
import QRCodeScanner from 'react-native-qrcode-scanner';

const Scanner = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const [scannerOpen, setscannerOpen] = useState(false);

  console.log('Scanner',)


  return (
    <View style={styles.mainContainer}>
      <PrimaryHeader />
      <View style={styles.sectionContainer}>
      <View style={{  marginTop:80}}>
                <QRCodeScanner
                  onRead={data => Alert.alert(JSON.stringify(data))}
                  
                  reactivate={true}
                  showMarker={true}
                  containerStyle={{
                    backgroundColor: theme.colors.lightdisbaled,
                    width: '100%',
                  }}
                  cameraContainerStyle={{width: '100%'}}
                  cameraStyle={{width: '100%'}}
                  reactivateTimeout={500}
                />
              </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  logoContainer: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: theme.colors.secondary,
    padding: 10,
  },
  sectionContainer: {
    paddingHorizontal: theme.padding.medium,
    marginTop: theme.margins.medium,
  },
  sectionHeading: {
    fontSize: theme.fontSizes.xxl,
    color: theme.colors.primaryText,
    fontWeight: '500',
  },
  sectionDescription: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.secondaryText,
    fontWeight: '500',
    marginVertical: theme.margins.small,
  },
  container: {
    backgroundColor: '#7050E5',
    height: 60,
    width: 60,
    marginHorizontal: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#34BB82',
    height: 60,
    width: 60,
    marginHorizontal: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    backgroundColor: '#F0D473',
    height: 60,
    width: 60,
    marginHorizontal: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container4: {
    backgroundColor: '#FF7273',
    height: 60,
    width: 60,
    marginHorizontal: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Scanner;
