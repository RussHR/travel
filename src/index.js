import React from 'react';
import { render } from 'react-dom';
import GygAssessmentApp from './GygAssessmentApp';

if (module.hot) {
    module.hot.accept();
}

import './style/main.scss';

render(<GygAssessmentApp />, document.getElementById('gyg-assessment-app'));