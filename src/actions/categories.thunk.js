import {getCategoriesListService} from '../service/categories';
import {setCategoriesListAction} from './categories.actions';
import {getGlobalQuestionsCountService} from '../service/questions';
import {setGlobalQuestionCounts} from './questionsCount.actions';

export const getCategoriesListThunk = () => async (dispatch) => {
    const [categories, questionCounts] =
        await Promise.all([getCategoriesListService(), getGlobalQuestionsCountService()]);

    dispatch(setCategoriesListAction(categories));
    dispatch(setGlobalQuestionCounts(questionCounts));
};
