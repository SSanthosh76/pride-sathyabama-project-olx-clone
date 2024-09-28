import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Product = {
    title: ReactNode;
    category: ReactNode;
    id: string | number; 
    image: string;
    price: number;
};
  
type ProductProps = {
    products: Product[];
    search: string; // Make sure this is a string
    Menu:any
};
  
const Home = (props: ProductProps) => {
    const conversionRate = 83;

    return (
      <div className="grid grid-cols-4 gap-4 p-5">
        {props?.products
          ?.filter((data: any) => 
            typeof data?.title === 'string' && // Ensure title is a string for accurate comparison
            data?.title?.toLowerCase().includes(props?.search?.toLowerCase() ? props?.search?.toLowerCase() : props.Menu.toLowerCase()) // Case-insensitive search
          )
          .map((product) => (
            <Link to='/details' state={{data:product}} key={product.id}>
              <div className="border border-spacing-1 p-2 ml-3 mt-3">
                <img src={product.image} className="w-60 h-48 object-cover" alt="product" />
                <h1 className="font-bold text-xl">₹{(product.price * conversionRate).toFixed(2)}</h1>
                <h1>{product.title}</h1>
                <h1>{product.category}</h1>
              </div>
            </Link>
        ))}
      </div>
    );
};
  
export default Home;

  