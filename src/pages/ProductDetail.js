// import data from '../data.js';
import Header from '../components/header';
import Footer from '../components/footer';
import { useParams } from '../utils.js';
import ProductAPI from '../api/productAPI';
import CategoryAPI from '../api/categoryAPI';


const ProductDetail = {
    async render() {
        try {
            

            const { id } = useParams(); 
            const { data: product } = await ProductAPI.read(id);
            const { data: categories } = await CategoryAPI.list();

            

            return /*html*/`
                    
                    <div class="h-60 text-center py-20"style="background: url('../images/banner.jpg');">
                        <ul class="w-96 h-20 mx-auto mt-4 grid grid-cols-3">
                        ${
                            categories.map(category => {
                                return `
                                <li class="mx-3 leading-5 hover:text-yellow-500 font-sans font-bold"><a class="no-underline text-xl text-white" href="/#/category/${category.id}">${category.name}</a></li>
                                
                                `
                            }).join("")
                        }
                        </ul>
                    </div>

                    <div class="container mx-auto my-5">
                        <div class="grid grid-cols-2 h-auto border-b-2 py-3">
                            <div class="h-max mx-auto">
                                <img src="${product.image}" />
                            </div>
                            <div class="px-5">
                                <h1 class="font-bold ">${product.name}</h1>
                                <h4 class="font-semibold my-3">${product.price}₫</h4>
                                <div class="border-b-2 my-3"></div>
                                <div class=" w-96">
                                <p class="text-lg leading-7 font-medium text-gray-400">  ${product.description}</p>
                                </div>
                                
                                <span>Quantity:</span>
                                <div class="inline-block border border-gray-500 rounded-full py-3 text-gray-700">  
                                <div class="flex justify-between items-center gap-5">
                                <span  class=" cursor-pointer pl-3" id="minus">-</span>
                                <input type="text" name="" id="number-cart" value="1" min="0"
                                    class=" outline-none text-center  w-12 bg-[#eeeeee]">
                                 <span  class="cursor-pointer pr-3" id="plus">+</span>


                                <button class="h-12 mt-5  w-60 font-xs font-semibold font-Helvetica Neue text-white bg-green-600 mr-2 
                                    hover:bg-gray-600 hover:text-black outline-none">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                        <div class="container mx-auto mt-5">
                                <h2 class=" mx-auto text-center font-semibold">Sản phẩm tương tự</h2>
                            
                                
                            </div>    
                            
                        </div>

                        


                    
                    </div>
                    ${Footer.render()};
                    `

        } catch (error) {
            console.log(error);
        }
    },
    afterRender() {
        
    }
}
export default ProductDetail;
