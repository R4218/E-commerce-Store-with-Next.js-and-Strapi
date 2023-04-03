import { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const PRODUCTS_TOKEN = process.env.NEXT_PUBLIC_PRODUCTS_TOKEN;

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${ 
                process.env.NEXT_PUBLIC_PRODUCTS_API_URL
             }/api/products?populate=*`, {
                headers: {
                    'Authorization': `Bearer ${PRODUCTS_TOKEN}`
                }
            });
            const data = await response.json();
            setProducts(data.data);
        }
        fetchData();
    }, []);

    console.log("Productss", products);

    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap w-full mt-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"> Product list - My Shop </h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {products.map((product) => (
                            <div key={product.id} className="lg:w-1/4 md:w-1/2 m-4 w-full bg-zinc-100 rounded-lg">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.attributes.Image.data.attributes.url} />
                                </a>
                                <div className="p-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest tit /le-font mb-1">{product.attributes.Category}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.attributes.Title}</h2>
                                    <p className="mt-1">{`$ ${product.attributes.Price}`}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products