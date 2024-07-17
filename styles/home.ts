import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  errorWrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },

  reloadButton: {
    backgroundColor: '#FF7F7D',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    fontFamily: 'Montserrat-Medium',
  },

  hero: {
    height: 232,
    width: `100%`,
    resizeMode: 'contain',
    marginBottom: 30,
  },

  productContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    marginBottom: 90,
  },

  carousel: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 8,
    backgroundColor: '#FAFAFA',
  },

  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Montserrat-Medium',
  },

  leading: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
  },

  cartButton: {
    height: 64,
    width: 64,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#393535',
    position: 'relative',
  },

  dot: {
    height: 16,
    width: 16,
    borderRadius: 40,
    backgroundColor: 'orange',
    position: 'absolute',
    top: -6,
    right: 0,
  },

  sub: {
    marginTop: 10,
    fontSize: 20,
    color: 'white',
  },
});
