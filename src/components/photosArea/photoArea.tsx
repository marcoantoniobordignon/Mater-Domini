import { ProductsGrid } from "./gridPhotos"
import { Pagination } from "./pagination"

export const PhotoArea = () => {
    return (
        <div className="w-full max-w-400">
            <Pagination />
            <ProductsGrid />
        </div>
    )
}