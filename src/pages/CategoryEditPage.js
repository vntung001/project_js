import CategoryAPI from '../api/categoryAPI';
import { useParams, $ } from '../utils';

const CategoryEditPage = {
    async render() {
        const { id } = useParams(); 
        const { data: categories } = await CategoryAPI.read(id);

        return /*html*/`
        <div class="container">
                <form id="form-edit">
                    <h1 class="text-center text-3xl ">Cập Nhật Danh Mục</h1>
                    <label class="text-2xl mr-2 ">Tên Danh Mục :</label>
                    <input type="text" id="category-name" placeholder="Tên Sản Phẩm" value="${categories.name}" class="form-control my-3 ">
                    
                    

                    <div class="form-group my-3">
                        <input type="submit" value="Cập nhật" class="btn btn-primary">
                    </div>
                    
                </form>
            </div>
        `

    },
    async afterRender(){
        const { id } = useParams(); // 
        const { data: categories } = await CategoryAPI.read(id);
        $("#form-edit").addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(1);
            const newCategory = {
                name: $("#category-name").value
            };
            CategoryAPI.update(id,newCategory);
            window.location.hash = '/listcategory';
        })
    }
}
export default CategoryEditPage;