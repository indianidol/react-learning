import React from 'react';
import Welcome from './Welcome';
import Code from './Code';

function ConditionalComponent() {
  const display = false;
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}

export default ConditionalComponent;
