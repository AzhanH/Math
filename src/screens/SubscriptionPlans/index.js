import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import images from '../../assets/images';
import buttonRed from '../../assets/svgs/buttonRed';
import {BackgroundWrapper, Header, Icons, Text} from '../../components';
import {fontSizes} from '../../utils/units';
import {SinglePlanType} from './components';
import styles from './styles';
const SubscriptionPlans = () => {
  const plans = [
    {id: 1, name: 'Standard'},
    {id: 2, name: 'Pro Plan'},
    {id: 3, name: 'Free'},
  ];

  const [selecetdType, setSelectedType] = useState(plans[0]?.name);

  const renderPlanType = ({item, index}) => (
    <SinglePlanType
      onPressType={() => setSelectedType(item?.name)}
      selecetdType={selecetdType}
      key={index}
      type={item?.name}
    />
  );
  return (
    <BackgroundWrapper>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <Header heading={'SUBSCRIPTION PLANS'} />
      <View style={styles.contentContainer}>
        <FlatList renderItem={renderPlanType} numColumns={3} data={plans} />
        <ImageBackground
          source={
            selecetdType === 'Standard'
              ? images.standardPlan
              : selecetdType === 'Pro Plan'
              ? images.standardPlan2
              : images.standardPlan3
          }
          style={styles.planImage}
          resizeMode="contain">
          <View style={styles.planImageTextView}>
            <Text
              style={styles.planHeadings}
              text={
                selecetdType === 'Standard'
                  ? 'STANDARD MONTHLY'
                  : selecetdType === 'Pro Plan'
                  ? 'PRO MONTHLY'
                  : 'FREE TRIAL'
              }
            />
            <Text style={styles.planHeadings} text={'PLAN'} />
            <Text
              text={
                <>
                  {selecetdType !== 'Free' && (
                    <Text style={styles.planPriceHeading} text={'$'} />
                  )}
                  <Text
                    style={styles.planPriceHeading}
                    text={
                      selecetdType === 'Standard'
                        ? 1
                        : selecetdType == 'Pro Plan'
                        ? 7
                        : 2
                    }
                  />
                  {selecetdType !== 'Free' && (
                    <>
                      <Text style={styles.planPriceHeading2} text={'.47'} />

                      <Text
                        style={[
                          styles.planPriceHeading2,
                          {fontSizes: fontSizes.f16},
                        ]}
                        text={'/ month'}
                      />
                    </>
                  )}
                  {selecetdType == 'Free' && (
                    <Text
                      style={styles.planPriceHeading2}
                      text={' weeks free trial'}
                    />
                  )}
                </>
              }
            />
          </View>
        </ImageBackground>
        <View style={styles.planDescView}>
          <Text
            style={styles.planDescText}
            text={
              selecetdType === 'Standard'
                ? 'The standard monthly plan is an automatic-renewal of the monthly subscription price at $1.47 per month. This makes the plan cost $8.82 for a 6-month period, but it renews automatically every month, until the subscription is cancelled.'
                : selecetdType === 'Pro Plan'
                ? 'The Pro-Player plan provides a discount to parents who sign-up for an automatic-renewal of the 6-month subscription at $7.77 for six months. The parent saves $1.05 for buying six months at a time.'
                : 'No tournament participation.'
            }
          />
        </View>
        <TouchableOpacity style={styles.buttonView} onPress={() => {}}>
          <Icons name={buttonRed({})} />
          <Text style={styles.buttonText} text={'GET IT'} />
        </TouchableOpacity>
      </View>
    </BackgroundWrapper>
  );
};
export default SubscriptionPlans;
