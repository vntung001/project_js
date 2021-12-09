import Header from '../components/header';
import Footer from '../components/footer';
import { $, useParams } from '../utils.js';
import ProductAPI from '../api/productAPI';
import CategoryAPI from '../api/categoryAPI';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../firebase';
const ProductAddPage = {
    async render(){
       
        const { data: categories } = await CategoryAPI.list();
        
        return /*html*/`

            <div class="container">
                <form id="form-add">
                    <h2 class="text-center mt-10">Thêm Sản Phẩm</h2>
                    <div class="form-group">
                        <input type="text" id="product-name" placeholder="Tên Sản Phẩm" class="form-control my-3 ">
                    </div>
                    <div class="form-group">
                        <input type="text" id="product-price" placeholder="Giá" class="form-control mb-3 ">
                    </div>
                    <div class="form-group">
                        <input type="file" id="product-image" placeholder="Ảnh" class="form-control mb-3 ">
                    </div>
                    <label class="text-xl mr-2">Danh Mục :</label>
                        <select id="product-category"  class="form-select mb-3"  id="" value="">
                            ${categories.map((category) => {
                        return `<option  value="${category.id}">${category.name}</option>`;
        })}
                            
                        </select>
                        
                    <div class="form-group">
                        <input type="submit" value="Thêm Sản Phẩm" class="btn btn-primary">
                    </div>
                    
                </form>
            </div>
        ${ Footer.render()};
        `
    },
     afterRender() {
        $('#form-add').addEventListener('submit', e => {
            e.preventDefault();

            const productImage = $('#product-image').files[0];
            let storageRef = firebase.storage().ref(`images/${productImage.name}`);// để truy cập vào dv storage, ref tạo ra
            storageRef.put(productImage).then(function() {// put la 1 prm                        // thư mục images có tên ảnh
                console.log('thanh cong')
                storageRef.getDownloadURL().then(async (url) => { // download link ol, neu resolve trả về url
                    const product = {
                        id: uuidv4(),
                        name: $("#product-name").value,
                        image: url,
                        price: $("#product-price").value,
                        categoryId: $('#product-category').value
                    };
                    console.log(product);
                    await ProductAPI.add(product)
                    window.location.hash = '/listproduct'

                })
            })
            


        })
    }
}
export default ProductAddPage;

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