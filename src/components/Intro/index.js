import React from 'react';

// (props) da yazila biler. ancaq bir arqument oturulurse onda morterize siline biler.
const Intro = props => ( // morterizeden sonra gelen return-dir
  <p className="App-intro">
    {props.msg}
  </p>
);

export default Intro;