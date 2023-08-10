import lodash from 'lodash';
import { addResult, clearAllResults, removeCurrentResult, removeResult } from '../redux/slices/resultSlice';
import { useAppDispatch } from './useRedux';
import { ResultItem } from './useResultDispatcher.initerface';

const useResultDispatcher = () => {
  const dispatch = useAppDispatch();

  const createResult = ({ title, message, type }: ResultItem) => {
    dispatch(addResult({ title, message, type, id: lodash.uniqueId() }));
  };

  const removeSpecificResult = ({ id }: { id: string }) => {
    dispatch(removeResult({ id }));
  };

  const removeLastResult = () => {
    dispatch(removeCurrentResult());
  };

  const removeAllResults = () => dispatch(clearAllResults());

  return {
    createResult,
    removeSpecificResult,
    removeLastResult,
    removeAllResults,
  };
};

export default useResultDispatcher;
