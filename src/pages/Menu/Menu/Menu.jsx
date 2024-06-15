import { Helmet } from 'react-helmet-async';
import Cover from '../../Shard/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'OUR MENU'} />
            
            
        </div>
    );
};

export default Menu;