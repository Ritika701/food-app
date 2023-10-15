import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestuarantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    console.log("called");

    useEffect(() => {
        fetchData();
        console.log("use effect");
    },[]);

    const fetchData = async() => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestuarantMenu;