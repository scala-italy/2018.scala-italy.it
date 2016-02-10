import React from 'react';
import { t, props, pure } from 'revenge';
import Cover from 'Cover/Cover';
import Footer from 'Footer/Footer';
import { FlexView } from 'Basic';

@pure
@props({
  app: t.Object,
  params: t.Object,
  query: t.maybe(t.Object)
})
export default class LandingContainer extends React.Component {

  render() {
    return (
      <FlexView column>
        <Cover />
        <Footer />
      </FlexView>
    );
  }

}
