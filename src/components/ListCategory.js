import CategoryAPI from "../api/categoryAPI";
import { $, reRender } from '../utils.js';
const ListCategory = {
    async render() {
        const { data: categories } = await CategoryAPI.list();
                return /*html*/ `
                <table class="table table-striped table-sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th width="200">Action</th>
                    </tr>
                </thead>
                    <tbody>
                        ${categories.map( (category, index) => {
                            return /*html*/`
                            <tr>
                                <td>${index+1}</td>
                                <td>${category.name}</td>
                                <td>
                                    <a href="/#/editcategory/${category.id}" class="update btn  btn-primary">Update</a>
                                    <button class="remove btn btn-danger " data-id="${category.id}">Remove</button>
                                </td>
                            </tr>
                            `
                        }).join("")}
                        
                    </tbody>
                </table>
                `
    },
    async afterRender(){
        const btns = $("#list-category .remove");
        
        btns.forEach( btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function(){
                const question = confirm('Bạn có chắc chắn muốn xóa không ?');
                if(question){
                  await  CategoryAPI.remove(id);
                  await  reRender(ListCategory, '#list-category');
                }
                
            })
        });
    }
};
export default ListCategory;