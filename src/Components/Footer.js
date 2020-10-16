import React from 'react'
import Filters from '../Container/Filters'
import { VisibilityFilters } from '../Actions/action'

const Footer = () => (
    <div>
        <Filters filter={VisibilityFilters.SHOW_ALL}>
            All
        </Filters>
        <Filters filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </Filters>
        <Filters filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </Filters>
    </div>
)

export default Footer