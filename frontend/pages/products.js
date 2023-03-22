import { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:1337/api/products?populate=*', {
                headers: {
                    'Authorization': 'Bearer d19bd1f74667f3020242fa7e66db9b0425e76bda4b81240a26b91438e8f6af3bf567807d176dd2080aeb7d52b50f916d571c232b3e7e02c3dac9a02a72fb672079c7d58470c744ba8feb2aa880c2f42b2fdefd82125079fbeb1f6c7569a211e9dbca51a8840de7e6dcfcab2b483687cf33f86333837149973a929c6dbf47efb7'
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
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
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