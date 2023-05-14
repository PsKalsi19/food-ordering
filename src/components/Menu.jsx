/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { fakeFetch } from "../database/data"
import { MenuContext } from "../context/MenuProvider"
import MenuCard from "./MenuCard"

const Menu = () => {
    const { menu, setMenu } = useContext(MenuContext);
    const [filters, setFilters] = useState({
        searchedText: "",
        isVeg: false,
        isSpicy: false,
        sortBy: '',
    })
    useEffect(() => {
        if (!menu) {
            getMenu()
        }
    }, [])


    const getMenu = async () => {
        const promisedData = await fakeFetch('https://example.com/api/menu')
        const menuData = await promisedData;
        setMenu(menuData.data.menu)
    }

    const handleFilters = (event, type) => {
        switch (type) {
            case 'isVeg':
                setFilters({ ...filters, isVeg: !filters.isVeg })
                break;
            case 'isSpicy':
                setFilters({ ...filters, isSpicy: !filters.isSpicy })
                break;
            case 'searchText':
                setFilters({ ...filters, searchedText: event.target.value })
                break;
            case 'sortHighToLow':
                setFilters({ ...filters, sortBy: event.target.value })
                break;
            case 'sortLowToHigh':
                setFilters({ ...filters, sortBy: event.target.value })
                break;
        }
    }
    return (
        <section>
            <h3>Filters:</h3>
            <div><input onChange={(e) => handleFilters(e, 'searchText')} type="text" />
                <label htmlFor="isVeg"><input type="checkbox" checked={filters.isVeg} onChange={(e) => handleFilters(e, 'isVeg')} name="isVeg" id="isVeg" />Veg</label>
                <label htmlFor="isSpicy"><input type="checkbox" checked={filters.isSpicy} onChange={(e) => handleFilters(e, 'isSpicy')} name="isSpicy" id="isSpicy" />Spicy</label>
                <label htmlFor="highToLow"><input type="radio" value="highToLow" checked={filters.sortBy === 'highToLow'} onChange={(e) => handleFilters(e, 'sortHighToLow')} name="highToLow" id="highToLow" />High to Low</label>
                <label htmlFor="lowToHigh"><input type="radio" value="lowToHigh" checked={filters.sortBy === 'lowToHigh'} onChange={(e) => handleFilters(e, 'sortLowToHigh')} name="lowToHigh" id="lowToHigh" />Low to High</label>
            </div>
            <div>
            </div>
            <h3>Menu</h3>
            <div className="menu-cards">{menu && menu.length > 0 && filterMenu(menu, filters).map(item => <MenuCard key={item.id} menuItem={item} />)}</div>
        </section>
    )
}

const filterMenu = (menu, { searchedText, isSpicy, isVeg, sortBy }) => {
    return getSortedData(menu, sortBy).filter(ele => searchedText === '' ? ele : (ele.name).toLowerCase().includes(searchedText.toLowerCase()))
        .filter(items => isSpicy ? items.is_spicy : items)
        .filter(items => isVeg ? items.is_vegetarian : items)

}

const getSortedData = (menu, sortBy) => {
    if (sortBy === '') return menu
    return menu.sort((a, b) => sortBy === 'highToLow' ? b.price - a.price : a.price - b.price)
}

export default Menu