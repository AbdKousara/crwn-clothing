import {useParams} from 'react-router-dom';
import {useEffect, useState, useContext, Fragment} from 'react';
import './category.styles.scss';
import {CategoriesContext} from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component'
import {gql, useQuery} from "@apollo/client";

const GET_CATEGORY = gql`
query($title: String!){
    getCollectionsByTitle(title: $title)
    {
        id
        title
        items
        {
            id
            name
            price
            imageUrl
        }
    }
}
`


const Category = () => {
    const {category} = useParams();

    const {loading, error, data} = useQuery(GET_CATEGORY, {
        variables: {
            title: category
        }
    });

    console.log(data)
   // const {categoriesMap, loading} = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
       if(data){
           const {getCollectionsByTitle: {items} } = data
           setProducts(items)
       }
    }, [data, category]);

    return (
        <Fragment>
            {
                loading ? <Spinner/> :

                    (
                        <Fragment>
                            <h2 className='category-title'>{category.toLocaleUpperCase()}</h2>
                            <div className='category-container'>
                                {products &&
                                    products.map((product) => (
                                        <ProductCard key={product.id} product={product}/>
                                    ))}
                            </div>
                        </Fragment>
                    )
            }
        </Fragment>
    );
};

export default Category;
