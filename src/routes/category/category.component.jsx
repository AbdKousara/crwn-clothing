import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext, Fragment } from 'react';
import {selectCategoriesMap} from "../../store/categories/categories.selector";
import './category.styles.scss';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import {useSelector} from "react-redux";

const Category = () => {
  const { category } = useParams();
/*  const { categoriesMap } = useContext(CategoriesContext);*/
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment >
    <h2 className='category-title'>{category.toLocaleUpperCase()}</h2>
    <div className='category-container'>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
    </Fragment>
  );
};

export default Category;
