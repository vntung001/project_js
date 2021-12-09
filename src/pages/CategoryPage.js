import ProductAPI from '../api/productAPI';
import Footer from '../components/footer';
import Header from '../components/header';
import { useParams } from '../utils';
import CategoryAPI from '../api/categoryAPI';

const CategoryPage = {
    async render() {
        const { id } = useParams();
        console.log(id);
        const { data: products } = await ProductAPI.list();
        const { data: categories } = await CategoryAPI.list();

        const result = products.filter(product => product.categoryId == id)
                .map(product => {
                                    return /*html*/`
                        <div class="h-auto w-80 ">
                                <a href="/#/products/${product.id}" class="border-b-4 pb-4"> 
                                    <img src="${product.image}" class="mx-auto h-96 w-80" alt="${product.name}">
                                </a>

                                <a href="/#/products/${product.id}" class="no-underline text-black hover:text-yellow-600">
                                    <p class="font-normal text-xl text-gray-600">${product.name}</p> </a>
                                <h6 class="font-bold">${product.price}₫</h6>
                                
                                
                        </div>
                                    `
                }).join("");
            return /*html*/ `
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

                <div class="container grid grid-cols-4 gap-10 mx-auto my-2">
                        ${result}
                </div>
                ${Footer.render()};
                    `
    }
}
export default CategoryPage;