import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { BASE_URL } from '../../stores/apiPoint'

import { ICategoryProps } from './types'

import './CategoryItem.css'



export const  CategoryItem = ({id, title, image}: ICategoryProps) => {

    const src = useMemo(() => {
        if (image.startsWith('http://') || image.startsWith('https://')) {
            return image; 
        }
        return BASE_URL + image;
    }, [image, BASE_URL])


    return (
        <Link  to={'/categories/'+ id} className="category_item">
            <img src={src} alt={title} />
            <span>{title}</span>
        </Link>
    )
}