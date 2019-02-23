import React, {Component} from 'react';
import Select from 'react-select';

export class QuestionsListComponent extends Component {

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
        console.log('[obabichev] QuestionsListComponent.props', this.props);
        const {selectedOption} = this.state;
        const {categoriesSelectInput} = this.props;

        return <div>
            QuestionsList

            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={categoriesSelectInput}
            />
        </div>;
    }

}
