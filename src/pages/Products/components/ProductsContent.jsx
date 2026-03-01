import { Search } from "lucide-react";

export default function ProductsContent() {
  return (
    <div>

      {/* Title + Count */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          النساء (ملابس، أحذية)
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          45 نتيجة
        </p>
      </div>

      {/* Search */}
      <div className="flex items-center border rounded-lg px-4 py-2 mb-8 w-full sm:w-72 bg-white">
        <Search size={18} />
        <input
          type="text"
          placeholder="بحث"
          className="outline-none w-full mr-2"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(item => (
          <div
            key={item}
            className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="h-48 bg-gray-100 mb-4 rounded-lg" />
            <h3 className="font-semibold text-sm mb-2">
              حذاء رياضي (Nike)
            </h3>
            <p className="text-xs text-gray-500 mb-2">
              حذاء رياضي مريح بتصميم أنيق
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">$35</span>
              <button className="bg-black text-white px-3 py-1 rounded text-xs">
                أضف للسلة
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}