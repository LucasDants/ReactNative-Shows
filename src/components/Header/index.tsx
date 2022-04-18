import React, {ReactElement} from 'react';
import {BackButton} from '../BackButton';

import {Container, EmptyView, Title} from './styles';

type Props = {
  hasBackButton?: boolean;
  title: string;
  RightButton?: ReactElement;
};

export function Header({hasBackButton = true, title, RightButton}: Props) {
  return (
    <Container>
      {hasBackButton ? <BackButton /> : <EmptyView />}
      <Title>{title}</Title>
      {RightButton ? RightButton : <EmptyView />}
    </Container>
  );
}
