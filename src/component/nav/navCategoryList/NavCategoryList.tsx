import { useState } from 'react';
import { categoryDataType } from '../../../public/publiceData/navPropsData'
import NavListContent from './NavListContent';

const NavCategoryList: React.FC<{ categoryData: categoryDataType[], class: string, boxClass: string, classHover: string }> = (props) => {
    const [categoryListState, setCategoryListState] = useState<number | null>(null)

    const [classSelector, setClassSelctor] = useState<boolean>(false)

    const pointerHandler = (id: number) => {
        setCategoryListState(id)
    }

    const pointerLeavedHandler = () => {
        setCategoryListState(null)
    }

    return (
        <>
            {props.categoryData.map(categoryList =>
                <div key={categoryList.id} className={categoryList.id === categoryListState && classSelector ? props.classHover : props.boxClass}>
                    <li
                        onPointerEnter={() => { pointerHandler(categoryList.id); setClassSelctor(() => true) }}
                        className={props.class}
                    >
                        {categoryList.title}
                    </li>
                    <li
                        className={props.class}
                    >
                        {
                            categoryList.id === categoryListState
                            &&
                            <NavListContent
                                onPointerLeave={pointerLeavedHandler}
                                id={categoryList.id}
                                compareId={categoryListState}
                                categoryList={categoryList}
                            />
                        }
                    </li>
                </div>
            )}
        </>
    )
}

export default NavCategoryList;