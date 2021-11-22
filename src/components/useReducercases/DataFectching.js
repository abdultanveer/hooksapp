import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function DataFectching() {

    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post,setPost] = useState({})

    useEffect(
        () => {
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then( response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {})
        }, []
    )

    return (
        <div>
            {loading ? 'loading data': post.title}
            {error ? error : null}
        </div>
    )
}
