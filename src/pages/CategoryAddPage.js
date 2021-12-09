import Header from '../components/header';
import Footer from '../components/footer';
import { $, useParams } from '../utils.js';
import CategoryAPI from '../api/categoryAPI';
import { v4 as uuidv4 } from 'uuid';
const CategoryAddPage = {
     render(){
        
        return /*html*/`

            <div class="container">
                <form id="form-add">
                    <h2 class="text-center mt-10">Thêm Danh Mục</h2>
                    <div class="form-group">
                        <input type="text" id="category-name" placeholder="Tên Danh Mục" class="form-control my-3 ">
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Thêm Danh Mục" class="btn btn-primary">
                    </div>
                    
                </form>
            </div>
        ${ Footer.render()};
        `
    },
    afterRender(){
         
            $("#form-add").addEventListener('submit', e => { 
                e.preventDefault();
                const category = {
                    id: uuidv4(),
                    name: $("#category-name").value
                    
                }
                
                CategoryAPI.add(category);
                window.location.hash = '/listcategory'
            });
        }
}
export default CategoryAddPage;

// afterRender(){
         
//     $("#form-add").addEventListener('submit', e => { //chan su kien reload
//         e.preventDefault();
//         const product = {
//             id: uuidv4(),
//             name: $("#product-name").value,
//             image: $("#product-image").value,
//             price: $("#product-price").value
//         }
//         console.log(product);
//         ProductAPI.add(product);
//     });
// }