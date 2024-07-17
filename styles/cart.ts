import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    position: 'relative',
  },

  emptyCart: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    color: '#2A2A2A',
    fontSize: 24,
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
  },

  checkout: {
    flex: 1,
    paddingHorizontal: 22,
    backgroundColor: '#FAFAFA',
    position: 'relative',
    marginBottom: 90,
  },

  sub: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: '#2A2A2A',
    fontWeight: '400',
    marginTop: 4,
    marginBottom: 12,
  },

  delButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  totalWrap: {
    paddingHorizontal: 17,
    paddingVertical: 20,
    backgroundColor: '#EDEDEDAB',
    marginBottom: 30,
  },

  headingT: {
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#2A2A2A',
    marginBottom: 25,
  },

  lead: {
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: '#2A2A2ACC',
  },

  subT: {
    fontWeight: '500',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#2A2A2ACC',
  },

  discount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
    marginBottom: 41,
  },

  inputField: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    paddingVertical: 8,
    paddingHorizontal: 17,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#979797',
    flex: 1,
  },

  discountButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#FF7F7D',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 10,
  },

  wrapT: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  totalPriceWrap: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#2A2A2A80',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 23,
  },

  totalPrice: {
    fontSize: 32,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 40,
    color: 'black',
    fontWeight: '600',
  },

  totalButton: {
    backgroundColor: '#FF7F7D',
    width: `100%`,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginTop: 34,
    borderRadius: 12,
  },

  buttonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
  },

  hero: {
    height: 232,
    width: `100%`,
    resizeMode: 'contain',
    marginBottom: 30,
  },

  header: {
    height: 100,
    width: `100%`,
    backgroundColor: '#FAFAFA',
    paddingTop: 40,
    paddingHorizontal: 22,

    flexDirection: 'row',
    alignItems: 'center',
    gap: 34,
  },

  logo: {
    height: 31,
    width: 99,
    resizeMode: 'contain',
  },

  headerText: {
    color: '##2A2A2A',
    fontSize: 19,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
  },

  cardLead: {
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#2A2A2ACC',
    marginBottom: 12,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '',
  },

  paymentLead: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Monsterrat-SemiBold',
    marginTop: 24,
  },

  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
});
