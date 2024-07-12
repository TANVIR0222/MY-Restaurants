import { useEffect, useState } from "react";
import SectionTitel from "../../../components/SectionTitel";
import MenuItemCard from "../../shared/MenuItemCard";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter((item) => item.category === 'popular' )
            setMenu(popularItem)})
    }, []);
    return (
        <div className="my-8 text-center">
            <SectionTitel subHeading={'Check it out'} heading={'FROM OUR MENU'}/>
            <div className="grid md:grid-cols-2 gap-10">
            {
                menu.map((item) => <MenuItemCard key={item._id} item={item}/>)
            }

            </div>
            <button className=" border-black text-black btn btn-outline border-0 mt-8 cursor-pointer border-b-4">View Full  Menu</button>

        </div>
    );
};

export default PopularMenu;