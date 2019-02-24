import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ErrorModalComponent.css';

export class ErrorModalComponent extends Component {

    onHideErrorClick = () => {
        const {closeHint} = this.props;

        closeHint();
    };

    render() {
        const {error} = this.props;

        if (!error) {
            return null;
        }

        return <div className="error-modal__container">
            {error.message}
            <button onClick={this.onHideErrorClick}
                    className="hide-error-button">
                <svg className="hide-error-button-image" viewBox="0 0 12 16" version="1.1" width="12" height="16"
                     aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path>
                </svg>
            </button>
        </div>;
    }

    static propTypes = {
        error: PropTypes.object,
        closeHint: PropTypes.func.isRequired
    }
}
