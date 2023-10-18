import React from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import {BackgroundWrapper, Button, Loader, Text} from '../../components';
import {fontSizes, vh} from '../../utils/units';
import {SinglePlanType} from './components';
import styles from './styles';
const SubscriptionPlansView = ({
  data,
  loading,
  planImages,
  selectedPlan,
  onPressSelectedPlan,
  onPressGetIt,
  selectedIndex,
}) => {
  const renderPlanType = ({item, index}) => (
    <SinglePlanType
      onPressType={() => onPressSelectedPlan(item, index)}
      selectedPlan={selectedPlan}
      key={index}
      type={item?.title}
    />
  );
  return (
    <BackgroundWrapper>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderPlanType}
        data={data}
      />
      {loading ? (
        <Loader style={styles.loader} />
      ) : (
        data && (
          <ImageBackground
            source={planImages[selectedIndex % 3]}
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
                    {selectedPlan?.title !== 'Free' && (
                      <Text style={styles.planPriceHeading} text={'$'} />
                    )}
                    {selectedPlan?.title !== 'Free' && (
                      <Text
                        style={styles.planPriceHeading}
                        text={selectedPlan?.amount}
                      />
                    )}
                    {selectedPlan?.title !== 'Free' && (
                      <Text
                        style={[
                          styles.planPriceHeading2,
                          {fontSizes: fontSizes.f16},
                        ]}
                        text={'/ month'}
                      />
                    )}
                    {selectedPlan?.title == 'Free' && (
                      <Text
                        style={styles.planPriceHeading2}
                        text={'Free trial'}
                      />
                    )}
                  </>
                }
              />
            </View>
          </ImageBackground>
        )
      )}
      {!loading && selectedPlan?.description?.length > 0 && (
        <View style={styles.planDescView}>
          <Text style={styles.planDescText} text={selectedPlan?.description} />
        </View>
      )}
      {!loading && selectedPlan && (
        <Button onPress={onPressGetIt} black btnText={'GET IT'} />
      )}
    </BackgroundWrapper>
  );
};
export default SubscriptionPlansView;
