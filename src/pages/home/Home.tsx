import { Sales } from "../sales/Sales"
import { Banner } from "../../components/banner/Banner"
import { BannerEmail } from "../../components/bannerEmail/BannerEmail"

export const Home = () => {
    return (
        <>
            <Banner/>
            <BannerEmail/>
            <Sales/>
        </>
        
    )
}