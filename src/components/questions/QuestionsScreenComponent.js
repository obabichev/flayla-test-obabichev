import React, {Component} from 'react';
import Select from 'react-select';
import {QuestionsListContainer} from '../../containers/questions/QuestionsListContainer';

export class QuestionsScreenComponent extends Component {

    state = {
        selectedOption: null,
    };

    componentDidMount() {
        const {getCategoriesList} = this.props;

        getCategoriesList();
    }

    handleChange = (selectedOption) => {

        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    };

    render() {
        const {selectedOption} = this.state;
        const {categoriesSelectInput} = this.props;

        return <div>
            QuestionsList

            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={categoriesSelectInput}
            />

            {this.renderQuestionsList()}
        </div>;
    }

    renderQuestionsList = () => {
        const {selectedOption} = this.state;

        if (!selectedOption) {
            return <div>CHOOOOSE SMTH</div>;
        }

        const categoryId = selectedOption.value;

        return <QuestionsListContainer
            categoryId={categoryId}/>;
    }
}
