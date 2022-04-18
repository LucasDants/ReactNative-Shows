import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {RectButton, PanGestureHandler} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useTheme} from 'styled-components';
import {Search} from '../../components/Search';
import {ShowCard} from '../../components/ShowCard';

import {useShows} from '../../hooks/useShows';

import {Container, Header, ShowsList, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

export function Shows() {
  const [search, setSearch] = useState('');
  const {data, loading, nextPage, searchShowsByName, clearSearch} = useShows();
  const {colors} = useTheme();
  const navigation = useNavigation();

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => ({
    transform: [{translateX: positionX.value}, {translateY: positionY.value}],
  }));

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, context: any) {
      context.positionX = positionX.value;
      context.positionY = positionY.value;
    },
    onActive(event, ctx) {
      positionX.value = event.translationX + ctx.positionX;
      positionY.value = event.translationY + ctx.positionY;
    },
  });

  return (
    <Container>
      <Header />
      <Search
        onSearch={() => {
          searchShowsByName(search);
        }}
        onClear={() => {
          setSearch('');
          clearSearch();
        }}
        onChangeText={text => setSearch(text)}
        onSubmitEditing={() => {
          if (search) {
            searchShowsByName(search);
          }
        }}
        value={search}
        searchEnabled={!!search}
      />
      <Title>Shows</Title>
      <ShowsList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <ShowCard show={item} />}
        onEndReachedThreshold={0.5}
        onEndReached={nextPage}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color={colors.red} /> : null
        }
      />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: 'absolute',
              bottom: 13,
              right: 22,
            },
          ]}>
          <ButtonAnimated
            style={[styles.button, {backgroundColor: colors.red}]}
            onPress={() => navigation.navigate('Favorites')}>
            <Icon name="heart" size={22} color={colors.white} />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
