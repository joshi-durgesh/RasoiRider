import { useEffect, useState } from "react";
import BannerSection from "./BannerSection";
import TopBrandsSection from "./TopBrandsSection";
import AllRestaurant from "./AllRestaurant";
import { SWIGGY_API } from "../utils/constant";
import { BodyShimmer } from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import HeroSection from "./HeroSection";

const Body = () => {
  const [allData, setAllData] = useState(null);
  const defaultLocation = "lat=17.4356874&lng=78.4331776";
  const [location, setLocation] = useState(defaultLocation);

  useEffect(() => {
    fetchAllData();
  }, [location]);

  const fetchAllData = async () => {
    const data = await fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(
        SWIGGY_API + location
      )}`
    );
    const json = await data.json();
    setAllData(json?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  if (allData === null) {
    return <BodyShimmer />;
  }

  const banData = allData?.filter((data) => {
    return (
      data?.card?.card?.gridElements?.infoWithStyle?.["@type"] ===
      "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard"
    );
  });

  const topData = allData?.filter((data) => {
    return (
      data?.card?.card?.gridElements?.infoWithStyle?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
    );
  });
  const restoTitle = allData?.filter((data) => {
    return (
      data?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent"
    );
  });
  const restoData = allData?.filter((data) => {
    return (
      data?.card?.card?.gridElements?.infoWithStyle?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
    );
  });
  const bannerData = banData?.[0]?.card?.card;
  const topBrandData = topData?.[0]?.card?.card;
  const allRestoSectionTitle = restoTitle?.[0]?.card?.card?.title;
  const allRestoData =
    restoData?.[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  return (
    <>
      <HeroSection setLocation={setLocation} />
      <BannerSection data={bannerData} />
      <AllRestaurant data={allRestoData} title={allRestoSectionTitle} />
      <TopBrandsSection data={topBrandData} />
    </>
  );
};

export default Body;
