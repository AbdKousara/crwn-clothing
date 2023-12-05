import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/category.selector";
import {useSelector} from "react-redux";
import Spinner from "../../components/Spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
 // const { categoriesMap } = useContext(CategoriesContext);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      { isLoading ? ( <Spinner/> ) :

       ( Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
              <CategoryPreview key={title} title={title} products={products}/>
          );
        }))
      }
    </Fragment>
  );
};

export default CategoriesPreview;
