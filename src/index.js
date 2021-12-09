import Error404Page from './pages/Error404Page.js';
import HomePage from './pages/Homepage.js';
import ProductDetail from './pages/ProductDetail.js';
import ProductsPage from './pages/ProductsPage.js';
import { useParams, $ } from './utils.js';
import AdminProductPage from './pages/AdminProductPage.js';
import ProductAddPage from './pages/ProductAddPage';
import Header from './components/header';
import CategoryPage from './pages/CategoryPage.js';
import ProductEditPage from './pages/ProductEditPage';
import AdminCategoryPage from './pages/AdminCategoryPage.js';
import CategoryAddPage from './pages/CategoryAddPage.js';
import CategoryEditPage from './pages/CategoryEditPage.js';

const routes = { 
    '/': HomePage,
    '/products': ProductsPage,
    '/products/:id': ProductDetail,
    '/listproduct': AdminProductPage,
    '/addproduct': ProductAddPage,
    '/category/:id': CategoryPage,
    '/editproduct/:id': ProductEditPage,
    '/listcategory': AdminCategoryPage,
    '/addcategory': CategoryAddPage,
    '/editcategory/:id': CategoryEditPage

}


const router = async () => {
    const { resource, id } = useParams();

    const parseUrl = (resource ? `/${resource}` : '/') +
        (id ? `/:id` : ''); 

    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page; 
    
    $("#header").innerHTML = Header.render();
    $('#main-content').innerHTML = await page.render();
    
    if(page.afterRender){
        await page.afterRender();
    }
    
    
         
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router); //khi window thay doi thi goi lai phan router va render lai
