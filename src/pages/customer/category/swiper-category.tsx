import { FC, useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Box } from "@mui/material";
import CollectionCard from "@/pages/customer/category/collection-card";
import { ICategory } from "@/lib/types";

interface Props {
  categories: ICategory[]
}

const SwiperCategory: FC<Props> = ({ categories }) => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 6,
      spaceBetween: 16,
      direction: getDirection(),
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        resize: () => {
          swiper.changeDirection(getDirection());
        },
      },
    });

    function getDirection() {
      return window.innerWidth <= 760 ? "vertical" : "horizontal";
    }
  }, []);

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }} p={2}>
      <Box
        className="swiper"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          width: "100%",
        }}
      >
        <Box
          className="swiper-wrapper"
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {categories.map((item, index) => (
            <Box
              className="swiper-slide"
              key={index}
              sx={{
                minWidth: 200,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CollectionCard {...item} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SwiperCategory;
