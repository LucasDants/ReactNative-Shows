import React, {ReactNode} from 'react';
import {ImageBackground, ImageProps, ImageSourcePropType} from 'react-native';
import {Container, MaterialIcon} from './styles';

type ImageBGComponentProps = ImageProps & {
  source: ImageSourcePropType & {
    uri?: string;
  };
  children: ReactNode;
};

export function BackgroundImage({...rest}: ImageBGComponentProps) {
  if (rest.source.uri) {
    return <ImageBackground {...rest} />;
  } else {
    return (
      <Container style={rest.style}>
        <MaterialIcon name="image-not-supported" />
        {rest.children}
      </Container>
    );
  }
}
