
import axios from 'axios'
import activityApi from '../../public/api/activity'
import { useEffect } from 'react'
import HeaderNav from '../../components/HeaderNav'
import { InferGetStaticPropsType } from 'next'

export default function ActivePageIndex({ posts }) {
    
    return (
        <div>
            <HeaderNav />
        </div>
    )
}
