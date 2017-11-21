import React, { Component } from 'react';
import { connect } from 'react-redux';

class SkillListItem extends Component {
  constructor(props) {
    super(props);
    this.renderCircle = this.renderCircle.bind(this);
  }

  render() {
    return (
      <li className="skills-list__item">
        {this.props.name}
        <div className="circle-container">
          {this.props.ratings.map(this.renderCircle)}
          <div className="circle-container__tip">
            {this.props.rating.description}
          </div>
        </div>
      </li>
    );
  }

  renderCircle(rating) {
    return (
      <div
        className={
          'circle' +
          (this.props.rating.displayOrder >= rating.displayOrder
            ? ' circle--filled'
            : '')
        }
        key={rating._id}
      />
    );
  }
}

function mapStateToProps({ data }) {
  return {
    ratings: data.ratings.sort((a, b) => a.displayOrder > b.displayOrder),
  };
}

export default connect(mapStateToProps)(SkillListItem);
