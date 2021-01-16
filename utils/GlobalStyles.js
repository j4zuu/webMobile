import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: '#ababab',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    mainImage: {
      flex: 1,
      width: '100%',
      marginBottom: 10,
    },
});
