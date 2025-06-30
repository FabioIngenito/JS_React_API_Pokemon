import React from 'react';

const Topo = (props) => {
  React.useEffect(() => {
    document.title = props.title + ' | Pokemon';
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description || '');
  }, [props]);

  return null;
};

export default Topo;
