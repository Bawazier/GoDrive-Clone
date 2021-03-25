/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Footer, Content, Icon} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import HeaderEdit from '../components/HeaderEdit';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import FooterCompleted from '../components/FooterCompleted';
import FooterOrder from '../components/FooterOrder';
import CardTransport from '../components/CardTransport';
import ModalFeedback from '../components/ModalFeedback';
import MapDirection from '../components/MapDirection';
import calculateDistance from '../helpers/calculateDistance';
import action from '../redux/action';

function ConfirmOrder({navigation}) {
  const [isOrder, setIsOrder] = useState(false);
  const [ridePrice, setRidePrice] = useState();
  const [rideEst, setRideEst] = useState();
  const [rideActive, setRideActive] = useState(true);
  const [carPrice, setCarPrice] = useState();
  const [carEst, setCarEst] = useState();
  const [carActive, setCarActive] = useState(false);
  const {
    origin_name,
    origin_location,
    destination_name,
    destination_location,
    order_product,
    order_fund,
    order_price,
    order_tax,
    order_point,
    order_code,
  } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const dist = calculateDistance(
      origin_location.lat,
      origin_location.lng,
      destination_location.lat,
      destination_location.lng,
    );
    const convertMils = dist / 0.001;
    const rideAverageSpeed = 175;
    const carAverageSpeed = 75;
    const calEstRide = convertMils / rideAverageSpeed;
    const calEstCar = convertMils / carAverageSpeed;
    setRideEst(
      `${calEstRide.toFixed(0)} - ${parseInt(calEstRide + 5).toFixed(0)}`,
    );
    setCarEst(
      `${calEstCar.toFixed(0)} - ${parseInt(calEstCar + 5).toFixed(0)}`,
    );
    setRidePrice(18000);
    setCarPrice(28000);
    if (calEstRide > 5) {
      setRidePrice(28000 + 8000);
      setCarPrice(18000 + 8000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [origin_location, destination_location]);

  // ref
  const bottomSheetRef = useRef(null);
  const bottomSheetModalRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ['30%', '50%'], []);
  const snapSheetModalPoints = useMemo(() => ['100%'], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  useEffect(() => {
    if (isOrder) {
      setTimeout(() => {
        handlePresentModalPress();
      }, 10000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOrder]);

  const handlePressTransport = isCar => {
    if (isCar) {
      setCarActive(true);
      setRideActive(false);
    } else {
      setRideActive(true);
      setCarActive(false);
    }
  };

  const handleOrder = () => {
    setIsOrder(true);
    const genCode = Math.floor(Math.random() * Math.floor(100000000000));
    console.log(rideActive);
    if (carActive) {
      const data = {
        order_product: 'GoCar',
        order_fund: 'LinkAja',
        order_price: carPrice,
        order_tax: 2000,
        order_est: carEst,
        order_point: 2,
        order_code: `GC${genCode}`,
      };
      dispatch(action.setOrder(data));
    }
    if (rideActive) {
      const data = {
        order_product: 'GoRide',
        order_fund: 'LinkAja',
        order_price: ridePrice,
        order_tax: 2000,
        order_est: rideEst,
        order_point: 1,
        order_code: `GR${genCode}`,
      };
      console.log(data);
      dispatch(action.setOrder(data));
    }
  };

  return (
    <>
      <MapDirection
        origin={origin_location}
        destination={destination_location}
      />
      <BottomSheetModalProvider>
        <Container
          style={{
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
          }}>
          <HeaderEdit
            originName={origin_name}
            destinationName={destination_name}
          />
          <Content />
          <View
            style={{flex: !isOrder ? 2 : 0, marginBottom: !isOrder ? 0 : 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 10,
                paddingHorizontal: 10,
                flex: 1,
              }}>
              <TouchableOpacity
                onPress={() =>
                  !isOrder ? navigation.goBack() : setIsOrder(!isOrder)
                }
                style={{
                  backgroundColor: 'white',
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="arrow-left"
                  type="FontAwesome5"
                  style={{fontSize: 18, color: 'black'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="my-location"
                  type="MaterialIcons"
                  style={{fontSize: 18, color: 'black'}}
                />
              </TouchableOpacity>
            </View>
            {!isOrder && (
              <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}>
                <View style={{flexDirection: 'column'}}>
                  <CardTransport
                    price={ridePrice}
                    est={rideEst}
                    active={rideActive}
                    handlePress={handlePressTransport}
                  />
                  <CardTransport
                    car
                    price={carPrice}
                    est={carEst}
                    active={carActive}
                    handlePress={handlePressTransport}
                  />
                </View>
              </BottomSheet>
            )}
          </View>
          <Footer
            style={{
              backgroundColor: 'transparent',
              elevation: 0,
              height: 'auto',
              flexDirection: 'column',
            }}>
            {!isOrder ? (
              <FooterOrder
                handleOrder={handleOrder}
                price={carActive ? carPrice : ridePrice}
              />
            ) : (
              <FooterCompleted handleFinish={handlePresentModalPress} />
            )}
          </Footer>
        </Container>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          topInset={40}
          snapPoints={snapSheetModalPoints}
          onChange={handlePresentModalPress}>
          {order_product && (
            <ModalFeedback
              product={order_product}
              sourceFund={order_fund}
              price={order_price}
              tax={order_tax}
              point={order_point}
              code={order_code}
            />
          )}
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
}

const styles = StyleSheet.create({
  baseText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ConfirmOrder;
