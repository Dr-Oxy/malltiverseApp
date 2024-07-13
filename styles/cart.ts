import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
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

  cartCard: {
    borderWidth: 1,
    borderColor: 'rgba(42, 42, 42, 0.1)',
    paddingVertical: 28,
    paddingHorizontal: 15,
    marginBottom: 21,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },

  cardImg: {
    height: 78,
    width: 60,
    resizeMode: 'cover',
  },

  cardGroup: {
    flex: 1,
  },

  cardFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardText: {
    flex: 1,
  },

  title: {
    color: '#2A2A2A',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Montserrat-Medium',
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

  qtyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 21,
    flex: 1,
  },

  qtyButton: {
    alignSelf: 'flex-start',
    padding: 4,
    borderColor: '#2A2A2A',
    borderWidth: 1,
  },

  qtyText: {
    fontSize: 12,
    color: '#2A2A2A',
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
  },

  price: {
    color: '#2A2A2A',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
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
    paddingHorizontal: 8,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#2A2A2AB2',
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
});
