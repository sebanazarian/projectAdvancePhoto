import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Loading } from '../Loading'
// import { categories as mockCategories } from '../../../api/db.json'

import { List, Item } from './style'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true) // cuando carga los datos
    window.fetch('https://petgram-server-sebanazarian.sebanazarian.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false) // datos listos
      })
  }, [])

  return { categories, loading }
}
export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowdFixed] = useState(false)
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowdFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Loading><Item key='loading'><Category /></Item></Loading>
        // cover={category.cover path={category.path}}
          : categories.map(category => {
            return <Item key={category.id}><Category {...category} /></Item>
          })
      }
    </List>
  )
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
