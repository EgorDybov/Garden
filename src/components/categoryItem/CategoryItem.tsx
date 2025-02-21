import { Link } from 'react-router-dom'
import fertilizerImg from '../../assets/media/img/Fertilizer.png'
import './CategoryItem.css'

export const  CategoryItem = () => {
    return (
        <Link to={'/products'} className="category_item">
            <img src={fertilizerImg} alt="fertilizer" />
            <span>Удобрения</span>
        </Link>
    )
}