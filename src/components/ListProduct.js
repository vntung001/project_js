import ProductAPI from "../api/productAPI";
import { $, reRender } from '../utils.js';
const Listproduct = {
    async render() {
        const { data: products } = await ProductAPI.list();
                return /*html*/ `
                <table class="table table-striped table-sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th width="200">Action</th>
                    </tr>
                </thead>
                    <tbody>
                        ${products.map( (product, index) => {
                            return /*html*/`
                            <tr>
                                <td>${index+1}</td>
                                <td>${product.name}</td>
                                <td>${product.price}</td>
                                <td><img src="${product.image}" width=100 height=100 /></td>
                                <td>
                                    <a href="/#/editproduct/${product.id}" class="update btn  btn-primary">Update</a>
                                    <button class="remove btn btn-danger " data-id="${product.id}">Remove</button>
                                </td>
                            </tr>
                            `
                        }).join("")}
                        
                    </tbody>
                </table>
                `
    },
    async afterRender(){
        const btns = $("#list-products .remove");
        
        btns.forEach( btn => {
            
            const id = btn.dataset.id;
            console.log(id);
            btn.addEventListener('click', async function(){
                const question = confirm('Bạn có chắc chắn muốn xóa không ?');
                if(question){
                  await  ProductAPI.remove(id);
                  await  reRender(Listproduct, '#list-products');
                }
                
            })
        });
    }
};
export default Listproduct;