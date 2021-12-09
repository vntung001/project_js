import CategoryAPI from '../api/categoryAPI';
import ProductAPI from '../api/productAPI';
import firebase from '../firebase';
import { useParams, $ } from '../utils';

const ProductEditPage = {
    async render() {
        const { id } = useParams(); 
        const { data: product } = await ProductAPI.read(id);
        const { data: categories } = await CategoryAPI.list();

        return /*html*/`
        <div class="container">
                <form id="form-edit">
                    <h1 class="text-center text-3xl ">Cập nhật sản phẩm</h1>
                    <label class="text-2xl mr-2 ">Tên sản phẩm :</label>
                    <input type="text" id="product-name" placeholder="Tên Sản Phẩm" value="${product.name}" class="form-control my-3 ">
                    
                    <label class="text-2xl mr-2 ">Giá sản phẩm :</label>
                    <input type="text" id="product-price" placeholder="Giá" value="${product.price}" class="form-control mb-3 ">
                    
                    <label class="text-2xl mr-2 ">Chọn ảnh mới :</label>
                    <input type="file" id="product-image" placeholder="Ảnh" class="form-control mb-3 ">
                    
                    <div class="text-2xl mr-2">Ảnh sản phẩm :</div><img width="200px" class="m-4" src="${product.image}" alt="">
                    <label class="text-2xl mr-2">Thuộc danh mục :</label>
                        <select id="product-category"  class="form-select" id="" value="${product.categoryId}">
                            ${categories.map((category) => {
                        return `<option  value="${category.id}">${category.name}</option>`;
            })}
                            
                        </select>
                        

                    <div class="form-group my-3">
                        <input type="submit" value="Cập nhật" class="btn btn-primary">
                    </div>
                    
                </form>
            </div>
        `

    },
    async afterRender() {
        const { id } = useParams(); 
        const { data: product } = await ProductAPI.read(id);
        $('#form-edit').addEventListener("submit", (e) => {
            e.preventDefault();
            let img = product.image;
            if($("#product-image").value == "") {
                const productadd = {
                    name: $("#product-name").value,
                    image: img,
                    price: $("#product-price").value,
                    categoryId: $("#product-category").value,
                    
                };
                // console.log(product);
                ProductAPI.update(id , productadd);
                window.location.hash ='/listproduct';
            } else {
                const productImage = $('#product-image').files[0];
            let storageRef = firebase.storage().ref(`images/${productImage.name}`);// ref là lấy về đường dẫn trên firebase
            storageRef.put(productImage).then(function () {
                
                storageRef.getDownloadURL().then( async (url) => {
                    const newProduct = {
                        
                        name: $("#product-name").value,
                        image: url,
                        price: $("#product-price").value,
                        categoryId: $('#product-category').value,
                        
                    };
                    
                    await ProductAPI.update(id,newProduct)
                    window.location.hash = '/listproduct'

                })
            })
            }
            
        })
    }
}
export default ProductEditPage;