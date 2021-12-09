const Header = {
  render() {
    return /*html*/`
        <header>
            <div class="grid grid-cols-5 h-12 bg-black px-8">
              <div class="flex items-center">
                <div class="text-sm mr-8 text-white mb-2">
                  <i class="fab fa-facebook-square"></i>
                </div>
                <div class="text-sm mr-8 text-white mb-2">
                  <i class="fab fa-instagram"></i>
                </div>
              </div>
              <div class="col-span-3 pt-1">
                <p class="text-center text-white text-xs font-bold leading-10 font-sans">Miễn Phí Giao Hàng Tiêu Chuẩn [Nội
                  thành HCM
                  từ 1.000.000đ -
                  Khu Vực khác từ 1.100.000đ]
                </p>
              </div>
              <div class="pt-1 flex justify-end">
                <p class="text-center text-white text-xs font-bold leading-10">Hotline : +84 912345678</p>
              </div>
            </div>

            <div class="bg-white-400 h-20 flex items-center">
              <div class="container mx-auto grid grid-cols-5">
                <div class="flex items-center">
                  <a href="/">
                    <img width="217" height="65"
                      src="https://thedenimaniac.com/wp-content/uploads/2019/07/cropped-cropped-cropped-Logo2019web-2.png"
                      alt="" />
                  </a>
                </div>
                <div class="col-span-3 text-center my-auto ">
                  <ul class="font-bold mx-auto px-5 my-5">
                    <li class="mx-4 inline-block "><a class="no-underline text-black text-base hover:text-red-700"
                        href="/">Home</a>
                    </li>
                    <li class="mx-4 inline-block "><a class="no-underline text-black text-base hover:text-red-700"
                        href="/#/products">Shop</a>
                    </li>
                    <li class="mx-4 inline-block "><a class="no-underline text-black text-base hover:text-red-700"
                        href="#">About</a>
                    </li>
                    <li class="mx-4 inline-block "><a class="no-underline text-black text-base hover:text-red-700"
                        href="#">Contact</a>
                    </li>
                  </ul>
                </div>

                <ul class="flex items-center px-10">

                  <li class="relative group">
                    <a href="/#/listproduct"><i class="fas fa-user px-3 text-3xl mx-3 text-black hover:text-red-700"></i></a>
                    <ul class="absolute hidden group-hover:block w-36  right--10 bg-white">
                      
                    </ul>
                  </li>
                  <li><a href="#"><i class="fas fa-shopping-bag px-3 text-3xl mx-3 text-black hover:text-red-700"></i></a></li>
                </ul>



              </div>
            </div>

          </header>
        `
  }
}
export default Header;