import FiltersSideBar from "./FiltersSideBar";
import ProductsContent from "./ProductsContent";

export default function FilterSection() {

    return (
        <div className="min-h-screen py-10">
            <div className="container mx-auto px-12">
                <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] lg:grid-cols-[840px_1fr] gap-10">
                    <div className="order-1 md:order-2">
                        <FiltersSideBar />
                    </div>
                    <div className="order-2 md:order-1">
                        <ProductsContent />
                    </div>
                </div>
            </div>
        </div>
    )
}
