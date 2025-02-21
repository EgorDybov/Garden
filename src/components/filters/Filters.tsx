import { Input } from "antd";
import { Checkbox } from "antd";
import { Select } from "antd";

import './Filters.css'

export const Filters = () => {
    return (
        <div className="filters">
            <label htmlFor="#">
                Цена
                <Input className="priceFrom" placeholder="от"/>
                <Input className="priceTo" placeholder="до"/>
            </label>

            <label htmlFor="#">
                Товары со скидкой
                <Checkbox style={{marginLeft:20}}/>
            </label>

            <label htmlFor="#">
                Сортировать:
                <Select style={{marginLeft:20, width: 200}}>
                    <Select.Option value="default">По умолчанию</Select.Option>
                </Select>
            </label>

        </div>
    )
}