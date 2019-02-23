import React, {Component} from 'react';
import Select from 'react-select';
import {QuestionsListContainer} from '../../containers/questions/QuestionsListContainer';
import _ from 'lodash';
import {navigateForward} from '../../helpers/history/history';
import './QuestionsScreenComponent.css';


export class QuestionsScreenComponent extends Component {

    state = {
        selectedOption: null,
    };

    componentDidMount() {
        const {getCategoriesList} = this.props;

        getCategoriesList();

        this.findSelectedValue();
    }

    findSelectedValue = () => {
        const {categoriesSelectInput, match} = this.props;

        const categoryId = parseInt(_.get(match, 'params.categoryId'));

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
        const {categoriesSelectInput} = this.props;

        return <div>
            <div className="questions-screen__select-container">
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={categoriesSelectInput}
                />
            </div>
            {this.renderQuestionsList()}
        </div>
    }

    renderQuestionsList = () => {
        const {selectedOption} = this.state;

        if (!selectedOption) {
            return null;
        }

        const categoryId = selectedOption.value;

        return <QuestionsListContainer
            categoryId={categoryId}/>;
    }
}
