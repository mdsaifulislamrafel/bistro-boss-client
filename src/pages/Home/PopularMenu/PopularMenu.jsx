import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shard/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTitle subheading={'Check it out'} heading={'FROM OUR MENU'} />
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
        </section>
    );
};

export default PopularMenu;