import { useState } from "react";
import { observer } from "mobx-react";

import { Input } from "antd";
import { Checkbox } from "antd";
import { Select } from "antd";
import { filterStore } from "../../stores/filterStore/filterstore";

import './Filters.css'

export const Filters = observer(() => {

    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(100)

    const onFrom = (event) => {
        const value: string = event.target.value

        if(/[0-9]/.test(value)){
            setFrom(Number(value))
        }
    }

    const onTo = (event) => {
        const  value: string = event.target.value
        if(/[0-9]/.test(value)) {
            setTo(Number(value))
        }
    }


    const onBlur = () => {
        if(from >= 0 && to > 0) {
            filterStore.setFromAndTo({from, to})
        }
    }

    return (
      <div className="filters">
        <label>
          Цена
          <Input
            className="priceFrom"
            placeholder="от"
            onChange={onFrom}
            value={from}
            onBlur={onBlur}
          />
          <Input
            className="priceTo"
            placeholder="до"
            onChange={onTo}
            value={to}
            onBlur={onBlur}
          />
        </label>

        <label>
          Товары со скидкой
          <Checkbox style={{ marginLeft: 20 }} />
        </label>

        <label>
          Сортировать:
          <Select style={{ marginLeft: 20, width: 200 }}>
            <Select.Option value="default">По умолчанию</Select.Option>
          </Select>
        </label>
      </div>
    );
})