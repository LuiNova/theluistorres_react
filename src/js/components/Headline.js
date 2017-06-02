import React from 'react';

class Headline extends React.Component {
    render() {
        return (
            <section id="the-spark-jumbotron" className="jumbotron">
                <img 
                    className="js-img-preload progressiveMedia img-preload" 
                    data-loaded="small" 
                    data-medium={this.props.medium} 
                    data-large={this.props.large} 
                    src={this.props.small} />
            </section>
        );
    }
}

Headline.propTypes = {
    small: React.PropTypes.string,
    medium: React.PropTypes.string,
    large: React.PropTypes.string
};

module.exports = Headline;