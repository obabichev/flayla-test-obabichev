import React, {Component} from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import {QuestionsListContainer} from '../../containers/questions/QuestionsListContainer';
import _ from 'lodash';
import {navigateForward} from '../../helpers/history/history';
import './QuestionsScreenComponent.css';


export class QuestionsScreenComponent extends Component {

    state = {
        selectedOption: null,
    };

    componentDidMount() {
        const {getCategoriesList, categoriesSelectInput} = this.props;

        if (_.isEmpty(categoriesSelectInput)) {
            getCategoriesList();
        }
        this.updateSelectedValue();
    }

    componentDidUpdate(prevProps) {
        if (this.isCategoriesOrRouteChanged(prevProps, this.props)) {
            this.updateSelectedValue();
        }
    }

    isCategoriesOrRouteChanged = (prevProps, props) => {
        return this.getCategoryIdFromRoute(prevProps) !== this.getCategoryIdFromRoute(props)
            || prevProps.categoriesSelectInput !== props.categoriesSelectInput;
    };

    updateSelectedValue = () => {
        const {categoriesSelectInput} = this.props;

        const categoryId = parseInt(this.getCategoryIdFromRoute(this.props));

        const selectedOption = _.find(categoriesSelectInput, {value: categoryId}) || null;
        this.setState({selectedOption});
    };

    handleChange = (selectedOption) => {
        if (selectedOption.value !== _.get(this.state, 'selectedOption.value')) {
            this.setState({selectedOption});
            navigateForward(`/questions/${selectedOption.value}`);
        }
    };

    render() {
        const {selectedOption} = this.state;
        const {categoriesSelectInput, isLoading} = this.props;

        return <div>
            <div className="questions-screen__select-container">
                <Select
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    placeholder={this.selectPlaceholder()}
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={categoriesSelectInput}
                />
            </div>
            {this.renderQuestionsList()}
        </div>
    }

    selectPlaceholder = () => {
        const {isLoading} = this.props;
        if (isLoading) {
            return 'Loading...';
        } else {
            return 'Select category...';
        }
    };

    renderQuestionsList = () => {
        const {selectedOption} = this.state;

        if (!selectedOption) {
            return null;
        }

        const categoryId = selectedOption.value;
        return <QuestionsListContainer
            categoryId={categoryId}/>;
    };

    getCategoryIdFromRoute = props => {
        return _.get(props, 'match.params.categoryId', null);
    };

    static propTypes = {
        categoriesSelectInput: PropTypes.array.isRequired,
        isLoading: PropTypes.bool,
        getCategoriesList: PropTypes.func.isRequired
    };
}
