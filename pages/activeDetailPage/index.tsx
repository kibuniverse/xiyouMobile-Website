
import axios from 'axios'
import { useEffect } from 'react'
import HeaderNav from '../../components/HeaderNav'
import { GetStaticProps } from 'next'

export default function ActivePageIndex({ context, res }) {
    console.log(context)
    console.log(res)
    return (
        <div>
            <HeaderNav />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    console.log(context)
    await axios.get('/api/api/activity/detail/181').then(reslove => {
        
    })
    return {
        props: {
            context,
        }
    }
}