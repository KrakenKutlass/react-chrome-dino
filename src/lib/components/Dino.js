import React from 'react';

import Resources from './Resources.js';
import createRunner from './DinoScript.js';
import DinoStyle from './DinoStyle.js';

import './Dino.css';

class ChromeDinoComponent extends React.Component {
  componentDidMount() {
    const Runner = createRunner();
    this.runner = new Runner(this.wrapperEl);
  }

  componentWillUnmount() {
    this.runner.destroy();
  }

    render() {
        return (
          <div>
            <style>{DinoStyle}</style>
            <div id="main-frame-error" className="interstitial-wrapper" ref={el => (this.wrapperEl = el)}>
              <Resources />
            </div>
          </div>
        );
    }
}

export default ChromeDinoComponent;
