import React from 'react';
import {Image, ImageProps, ImageSourcePropType} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container} from './styles';

type ImageComponentProps = ImageProps & {
  source: ImageSourcePropType & {
    uri?: string;
  };
};

export function ImageComponent({...rest}: ImageComponentProps) {
  if (rest.source.uri) {
    return <Image {...rest} />;
  } else {
    return (
      <Container style={rest.style}>
        <Icon name="image-not-supported" size={16} color="#fff" />
      </Container>
    );
  }
}
