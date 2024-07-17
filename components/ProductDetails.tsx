import { StyleSheet, Modal, Pressable, View, Image, Text } from 'react-native';
import React, { useState } from 'react';

import { useContext } from 'react';

import { AppContext } from '@/utils/appContext';
import { Item } from '@/utils/@types/context';

import { TabBarIcon } from './navigation/TabBarIcon';
import { converIntl } from '@/utils';

type ModalProps = {
  openModal: boolean;
  hide: () => void;
};

const ProductDetails = ({ openModal, hide }: ModalProps) => {
  const { onAdd, handleUpdate, selected } = useContext(AppContext);

  const [modalQty, setModalQty] = useState(1);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={openModal}>
        <View style={styles.modal}>
          <View style={styles.modalBody}>
            <View style={styles.modalTop}>
              <Image
                style={styles.image}
                source={{
                  uri: `https://api.timbu.cloud/images/${selected?.photos[0]?.url}`,
                }}
              />

              <Pressable onPress={hide} style={[styles.button, styles.close]}>
                <TabBarIcon name="close" color="#000" />
              </Pressable>
            </View>

            <View style={styles.modalBottom}>
              <View>
                <Text style={styles.title}>{selected?.name}</Text>
                <Text style={styles.price}>
                  ${selected?.current_price[0]?.USD[0] * modalQty}
                </Text>
                <Text style={styles.desc}>{selected?.description}</Text>
              </View>

              <View style={styles.ctaWrap}>
                <View style={styles.qtyWrap}>
                  <Pressable
                    onPress={() => setModalQty((prev) => Math.max(prev - 1, 1))}
                    style={styles.qty_button}
                  >
                    <Text style={styles.buttonText}>-</Text>
                  </Pressable>

                  <Pressable style={styles.qty_button}>
                    <Text style={styles.buttonText}>{modalQty}</Text>
                  </Pressable>

                  <Pressable
                    onPress={() => setModalQty((prev) => prev + 1)}
                    style={styles.qty_button}
                  >
                    <Text style={styles.buttonText}>+</Text>
                  </Pressable>
                </View>

                <Pressable
                  onPress={() => {
                    onAdd(selected, modalQty);
                    hide();
                    setModalQty(1);
                  }}
                  style={styles.checkButton}
                >
                  <Text style={styles.checkText}>Add to Cart</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProductDetails;

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },

  modalBody: {
    borderTopWidth: 2,
    borderTopColor: '#00000',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: '90%',
    backgroundColor: '#fafafa',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  modalTop: {
    position: 'relative',
    backgroundColor: '#EDEDEDAB',
    height: 350,
  },

  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },

  close: {
    position: 'absolute',
    top: 12,
    right: 12,
  },

  modalBottom: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 22,
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 30,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },

  price: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Montserrat-Bold',
    marginVertical: 10,
  },

  desc: {
    color: 'gray',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },

  unit: {
    fontSize: 18,
    color: 'black',
  },

  ctaWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 'auto',
  },

  qtyWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },

  qty_button: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderColor: '#F3E3BF',
    borderWidth: 1,
    borderRadius: 8,
  },

  button: {
    alignSelf: 'flex-start',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginLeft: 'auto',
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },

  checkButton: {
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  checkText: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
});
