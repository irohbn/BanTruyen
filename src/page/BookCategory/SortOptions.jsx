//sap xep sach
const SortOptions = ({ sortType, setSortType }) => (
  <div className="sort-options">
    <label>Sắp xếp: </label>
    <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
      <option value="">Mặc định</option>
      <option value="a-z">A-Z</option>
      <option value="z-a">Z-A</option>
      <option value="price-asc">Giá tăng dần</option>
      <option value="price-desc">Giá giảm dần</option>
      <option value="newest">Mới nhất</option>
      <option value="oldest">Cũ nhất</option>
    </select>
  </div>
);

export default SortOptions;
