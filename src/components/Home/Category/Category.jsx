import { useNavigate } from "react-router-dom";
import "./Category.scss";
import { getImageUrl } from "../../../utils/getImageUrl";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={getImageUrl(item?.attributes?.img?.data?.attributes?.url)}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
