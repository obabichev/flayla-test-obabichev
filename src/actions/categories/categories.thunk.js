import {getCategoriesListService} from '../../service/categories';
import {setCategoriesListAction} from './categories.actions';
import {getGlobalQuestionsCountService} from '../../service/questions';
import {setGlobalQuestionCounts} from '../questions/questionsCount.actions';

export const getCategoriesListThunk = () => async (dispatch) => {
    const [categories, questionCounts] =
        await Promise.all([getCategoriesListService(), getGlobalQuestionsCountService()]);

    dispatch(setGlobalQuestionCounts(questionCounts));
    dispatch(setCategoriesListAction(categories));
};
