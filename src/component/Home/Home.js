import Banner from "../BannerHeader/Banner"
import BannerSecond from "./BannerSecond/BannerSecond"
import ComicsForeign from "./ComicsForeign/ComicsForeign"

import ComicsViet from "./ComicsViet/ComicsViet"
import NewProduct from "./NewProduct/NewProduct"


const Home = () => {
    return (
        <>
            <Banner />
            <NewProduct />
            <BannerSecond />
            <ComicsViet />
            <ComicsForeign />
        </>
    )
}
export default Home