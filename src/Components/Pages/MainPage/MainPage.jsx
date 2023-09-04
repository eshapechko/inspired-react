import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategory, fetchGender } from "../../../features/goodsSlice.js";
import { setActiveGender } from "../../../features/navigationSlice.js";
import { Goods } from "../../Goods/Goods.jsx";
import { Banner } from "../../Banner/Banner.jsx";
import { usePageFromSearchParams } from "../../../hooks/usePageFromSearchParams.js";

export const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const page = usePageFromSearchParams(dispatch);

  const { activeGender, categories, genderList } = useSelector(
    (state) => state.navigation,
  );
  const genderData = categories[activeGender];

  const categoryData = genderData?.list.find((item) => item.slug === category);

  useEffect(() => {
    if (gender) {
      dispatch(setActiveGender(gender));
    } else if (genderList[0]) {
      dispatch(setActiveGender(genderList[0]));
      dispatch(fetchGender(genderList[0]));
    }
  }, [gender, genderList, dispatch]);

  useEffect(() => {
    if (gender && category) {
      const params = { gender, category };
      if (page) {
        params.page = page;
      }
      dispatch(fetchCategory(params));
      return;
    }

    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, category, page, dispatch]);

  return (
    <>
      {!category && <Banner data={genderData?.banner} />}
      <Goods title={categoryData?.title} />
    </>
  );
};
