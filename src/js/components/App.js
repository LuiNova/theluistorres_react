import React from 'react';
import Headline from './Headline';

const headlineImages = {
    small: 'dist/img/the-spark-xs.jpg',
    medium: 'dist/img/the-spark.jpg',
    large: 'dist/img/the-spark-2.jpg'
};

class App extends React.Component {
    render() {
        return (
            <div>
                <Headline 
                    small={headlineImages.small}
                    medium={headlineImages.medium}
                    large={headlineImages.large} />
            </div>
        );
    }
}

module.exports = App;