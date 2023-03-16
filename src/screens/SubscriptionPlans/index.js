import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import images from '../../assets/images';
import {BackgroundWrapper, Button, Loader, Text} from '../../components';
import {usePlans} from '../../hooks';
import {fontSizes} from '../../utils/units';
import {SinglePlanType} from './components';
import styles from './styles';
const SubscriptionPlans = ({navigation, route}) => {
  const token = route?.params?.token;

  const {readPlans} = usePlans();
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [plans, setPlans] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);
      let res = await readPlans(token);
      if (res?.length > 0) {
        setPlans(res?.filter((v, i) => i <= 2));
        setSelectedPlan(res[0]);
      } else {
        setPlans(null);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const renderPlanType = ({item, index}) => (
    <SinglePlanType
      onPressType={() => setSelectedPlan(item)}
      selectedPlan={selectedPlan}
      key={index}
      type={item?.title}
    />
  );

  const ListFooterComponent = (
    <View>
      <ImageBackground
        source={
          selectedPlan?.title === 'Standard'
            ? images.standardPlan
            : selectedPlan?.title === 'Pro Plan'
            ? images.standardPlan2
            : images.standardPlan3
        }
        style={styles.planImage}
        resizeMode="contain">
        <View style={styles.planImageTextView}>
          <Text
            style={styles.planHeadings}
            text={
              selectedPlan?.title !== 'Free'
                ? selectedPlan?.title?.toUpperCase() + ' ' + 'MONTHLY'
                : 'FREE TRIAL'
            }
          />
          <Text style={styles.planHeadings} text={'PLAN'} />
          <Text
            text={
              <>
                {selectedPlan !== 'Free' && (
                  <Text style={styles.planPriceHeading} text={'$'} />
                )}
                <Text
                  style={styles.planPriceHeading}
                  text={selectedPlan?.price_per_month}
                />
                {selectedPlan !== 'Free' && (
                  <Text
                    style={[
                      styles.planPriceHeading2,
                      {fontSizes: fontSizes.f16},
                    ]}
                    text={'/ month'}
                  />
                )}
                {selectedPlan == 'Free' && (
                  <Text
                    style={styles.planPriceHeading2}
                    text={'weeks free trial'}
                  />
                )}
              </>
            }
          />
        </View>
      </ImageBackground>
      {selectedPlan?.description?.length > 0 && (
        <View style={styles.planDescView}>
          <Text
            style={styles.planDescText}
            text={selectedPlan?.description?.map(v => v?.description)}
          />
        </View>
      )}

      <Button
        onPress={() =>
          navigation.navigate('Payment', {plan: selectedPlan, token})
        }
        black
        btnText={'GET IT'}
      />
    </View>
  );

  return (
    <BackgroundWrapper>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          style={styles.contentContainer}
          ListFooterComponent={ListFooterComponent}
          renderItem={renderPlanType}
          numColumns={3}
          data={plans}
        />
      )}
    </BackgroundWrapper>
  );
};
export default SubscriptionPlans;
