// import data from '../data.js';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductAPI from '../api/productAPI';
const HomePage = {
    async render() {
        try {
            
            const { data: products } = await ProductAPI.list();
            const result = products.map(product => {

            return /*html*/`
                    
                        <div class="h-auto w-80 ">
                            <a href="/#/products/${product.id}" class="border-b-4 pb-4">
                                <img src="${product.image}" class="mx-auto h-96 w-80" alt="${product.name}">
                            </a>

                           <a href="/#/products/${product.id}" class="no-underline text-black hover:text-yellow-600">
                            <p class="font-medium text-xl text-gray-600">${product.name}</p> </a>
                            <h6 class="font-bold text-lg">${product.price}₫</h6>
                            
                            
                        </div>
                    
                    
        `
        }).join("")
        return /*html*/`
            
            <div class="mb-24">
                <img src="https://j4p9s7j3.stackpathcdn.com/wp-content/uploads/2021/05/501Day_21-Home.jpg" height="800" alt="">
            </div>

            <div class="container max-w-screen-xl h-auto mx-auto ">
                <div class="grid grid-cols-3 gap-3">
                        <div>
                        
                            <img src="https://thedenimaniac.com/wp-content/uploads/2021/04/BOX-DENIM-1.jpg" width="410" height="510"
                            alt="">

                        </div>
                        <div>
                            <img src="https://thedenimaniac.com/wp-content/uploads/2021/04/BOX-JACKETS-1.jpg" width="410" height="510"
                            alt="">
                        </div>
                        <div>
                            <img src="https://thedenimaniac.com/wp-content/uploads/2021/04/BOX-T-SHIRTS-1.jpg" width="410" height="510"
                            alt="">
                        </div>
                    </div>
                </div>

                <div class="container mx-auto h-48 py-2 relative">
                    <p class="text-6xl font-bold text-pink-200 absolute transform top-1/2 -translate-y-1/2">PRODUCTS</p>
                    <p class="text-xl font-bold absolute transform top-1/2 -translate-y-1/2 z-10 text-current">-SẢN PHẨM MỚI</p>
                </div>

                <div class="container grid grid-cols-4 gap-10 mx-auto">
                    ${result}
                </div>
                ${Footer.render()}
        `
        } catch (error) {
            console.log(error);
        }
    }
}
export default HomePage;